"use client";

import React, { useEffect, useRef, useState } from "react";

const careerLevels = [
  "Student",
  "Fresh Graduate",
  "Professional",
  "Senior Professional",
  "Executive",
  "C-Suite / Director / Founder",
];

const serviceOptions = [
  "ATS Resume / CV Writing",
  "LinkedIn Optimization",
  "Cover Letter Writing",
  "Modern CV Format (cross-border applications)",
  "Graphical CV / Premium Design",
  "Career Consultation",
  "Starter Pack",
  "Career Pack",
  "Career Move Pack",
  "Executive Brand Suite",
  "C-Suite Premium",
];

// Target markets first, then other common codes.
const countryCodes = [
  { code: "+1", label: "+1 (US / Canada)" },
  { code: "+44", label: "+44 (UK)" },
  { code: "+61", label: "+61 (Australia)" },
  { code: "+64", label: "+64 (New Zealand)" },
  { code: "+353", label: "+353 (Ireland)" },
  { code: "+971", label: "+971 (UAE)" },
  { code: "+966", label: "+966 (Saudi Arabia)" },
  { code: "+65", label: "+65 (Singapore)" },
  { code: "+60", label: "+60 (Malaysia)" },
  { code: "+91", label: "+91 (India)" },
  { code: "+94", label: "+94 (Sri Lanka)" },
  { code: "+27", label: "+27 (South Africa)" },
  { code: "+49", label: "+49 (Germany)" },
  { code: "+33", label: "+33 (France)" },
  { code: "+31", label: "+31 (Netherlands)" },
  { code: "+47", label: "+47 (Norway)" },
  { code: "+46", label: "+46 (Sweden)" },
  { code: "+974", label: "+974 (Qatar)" },
  { code: "+852", label: "+852 (Hong Kong)" },
];

type FormState = {
  name: string;
  email: string;
  countryCode: string;
  whatsappNumber: string;
  currentCountry: string;
  targetCountry: string;
  careerLevel: string;
  targetRole: string;
  yearsExperience: string;
  selectedService: string;
  linkedinUrl: string;
  message: string;
  website: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  countryCode: "+1",
  whatsappNumber: "",
  currentCountry: "",
  targetCountry: "",
  careerLevel: "Professional",
  targetRole: "",
  yearsExperience: "",
  selectedService: "Career Pack",
  linkedinUrl: "",
  message: "",
  website: "",
};

type FieldErrors = Partial<Record<keyof FormState | "currentCv", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlPattern = /^https?:\/\/.+/i;

function validateField(key: keyof FormState, value: string): string {
  const v = value.trim();
  switch (key) {
    case "name":
      if (!v) return "Please enter your full name.";
      if (v.length < 2) return "Name is too short.";
      return "";
    case "email":
      if (!v) return "Please enter your email address.";
      if (!emailPattern.test(v)) return "Enter a valid email address.";
      return "";
    case "whatsappNumber":
      if (!v) return "Please enter your WhatsApp number.";
      if (!/^[0-9\s-]{6,}$/.test(v)) return "Enter a valid phone number (digits only).";
      return "";
    case "currentCountry":
      if (!v) return "Please enter your current country.";
      return "";
    case "targetCountry":
      if (!v) return "Please enter your target market.";
      return "";
    case "targetRole":
      if (!v) return "Please enter your target role.";
      return "";
    case "yearsExperience":
      if (!v) return "Please enter your years of experience.";
      return "";
    case "linkedinUrl":
      if (v && !urlPattern.test(v)) return "Enter a valid URL (starting with https://).";
      return "";
    case "message":
      if (!v) return "Please tell us your career goal.";
      if (v.length < 10) return "Please add a little more detail.";
      return "";
    default:
      return "";
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [currentCv, setCurrentCv] = useState<File | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<string, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");
  const successRef = useRef<HTMLDivElement | null>(null);

  // Auto-dismiss the success notice and scroll it into view.
  useEffect(() => {
    if (submitStatus !== "success") return;
    successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    const timer = setTimeout(() => setSubmitStatus("idle"), 6000);
    return () => clearTimeout(timer);
  }, [submitStatus]);

  const updateField = (key: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (touched[key]) {
      setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
    }
  };

  const handleBlur = (key: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validateField(key, formData[key]) }));
  };

  const validateAll = (): boolean => {
    const keys: (keyof FormState)[] = [
      "name", "email", "whatsappNumber", "currentCountry", "targetCountry",
      "targetRole", "yearsExperience", "linkedinUrl", "message",
    ];
    const next: FieldErrors = {};
    keys.forEach((k) => {
      const err = validateField(k, formData[k]);
      if (err) next[k] = err;
    });
    if (!currentCv) next.currentCv = "Please upload your current CV / resume.";
    setErrors(next);
    setTouched((prev) => {
      const t = { ...prev };
      keys.forEach((k) => (t[k] = true));
      t.currentCv = true;
      return t;
    });
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorText("");

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "countryCode" || key === "whatsappNumber") return;
        payload.append(key, value);
      });
      payload.append("whatsapp", `${formData.countryCode} ${formData.whatsappNumber}`.trim());
      if (currentCv) payload.append("currentCv", currentCv);

      const response = await fetch("/api/contact", { method: "POST", body: payload });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.error ?? "Failed to submit enquiry.");
      }

      setSubmitStatus("success");
      setFormData(initialFormState);
      setCurrentCv(null);
      setErrors({});
      setTouched({});
    } catch (error: unknown) {
      setSubmitStatus("error");
      setErrorText(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-zinc-50 py-[64px] sm:py-[80px] md:py-[96px]">
      <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="mb-4 block font-semibold uppercase tracking-wider text-brand-main">Enquiry</span>
            <h2 className="font-heading text-[36px] font-bold leading-[1.15] text-foreground md:text-[52px]">
              Submit your career-branding enquiry.
            </h2>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-text-body">
              Share your current CV or resume, target market, target role, career level, and preferred service direction. Your profile is reviewed personally before the most suitable package is confirmed.
            </p>
            <div className="mt-8 rounded-[18px] border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-[22px] font-bold text-foreground">Premium, personally written by Chanuka</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                This is not a budget catalogue flow. The service is built for senior professionals, executives, C-suite hires, founders, and candidates competing for serious roles in competitive job markets and remote-first companies.
              </p>
            </div>
          </div>

          <div className="rounded-[20px] border border-zinc-200 bg-white p-6 shadow-lg md:p-10">
            <h3 className="mb-8 font-heading text-[28px] font-bold text-foreground">Enquiry Form</h3>

            <div aria-live="polite" aria-atomic="true" ref={successRef}>
              {submitStatus === "success" && (
                <div className="mb-6 rounded-[18px] border-2 border-green-500/30 bg-green-50 p-8 text-center" role="status">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                    <svg className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-[26px] font-bold text-green-700">Enquiry sent successfully!</h3>
                  <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-green-800/90">
                    Thank you — your details have been received. Chanuka reviews every enquiry personally and will contact you with the most suitable service direction. Please check your email (and spam folder) for the reply.
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 rounded-[10px] border border-red-200 bg-red-50 p-4 text-red-600" role="alert">
                  {errorText || "Something went wrong. Please try again later."}
                </div>
              )}
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                value={formData.website}
                onChange={(e) => updateField("website", e.target.value)}
                id="website"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden"
              />

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Full Name" required error={errors.name}>
                  <input value={formData.name} onChange={(e) => updateField("name", e.target.value)} onBlur={() => handleBlur("name")} autoComplete="name" className={inputClass(errors.name)} />
                </Field>
                <Field label="Email Address" required error={errors.email}>
                  <input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} onBlur={() => handleBlur("email")} autoComplete="email" className={inputClass(errors.email)} />
                </Field>

                <Field label="WhatsApp Number" required error={errors.whatsappNumber}>
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => updateField("countryCode", e.target.value)}
                      aria-label="Country code"
                      className="form-input w-[112px] shrink-0"
                    >
                      {countryCodes.map((c) => <option key={c.code + c.label} value={c.code}>{c.label}</option>)}
                    </select>
                    <input
                      value={formData.whatsappNumber}
                      onChange={(e) => updateField("whatsappNumber", e.target.value)}
                      onBlur={() => handleBlur("whatsappNumber")}
                      inputMode="tel"
                      placeholder="555 000 0000"
                      className={inputClass(errors.whatsappNumber)}
                    />
                  </div>
                </Field>

                <Field label="Current Country" required error={errors.currentCountry}>
                  <input value={formData.currentCountry} onChange={(e) => updateField("currentCountry", e.target.value)} onBlur={() => handleBlur("currentCountry")} className={inputClass(errors.currentCountry)} />
                </Field>
                <Field label="Target Market" required error={errors.targetCountry}>
                  <input value={formData.targetCountry} onChange={(e) => updateField("targetCountry", e.target.value)} onBlur={() => handleBlur("targetCountry")} placeholder="Country or region you're applying to, or remote-first" className={inputClass(errors.targetCountry)} />
                </Field>
                <Field label="Current Career Level" required>
                  <select value={formData.careerLevel} onChange={(e) => updateField("careerLevel", e.target.value)} className="form-input">
                    {careerLevels.map((level) => <option key={level} value={level}>{level}</option>)}
                  </select>
                </Field>
                <Field label="Target Role" required error={errors.targetRole}>
                  <input value={formData.targetRole} onChange={(e) => updateField("targetRole", e.target.value)} onBlur={() => handleBlur("targetRole")} className={inputClass(errors.targetRole)} />
                </Field>
                <Field label="Years of Experience" required error={errors.yearsExperience}>
                  <input value={formData.yearsExperience} onChange={(e) => updateField("yearsExperience", e.target.value)} onBlur={() => handleBlur("yearsExperience")} inputMode="numeric" placeholder="8 years" className={inputClass(errors.yearsExperience)} />
                </Field>
              </div>

              <Field label="Selected Service or Package" required>
                <select value={formData.selectedService} onChange={(e) => updateField("selectedService", e.target.value)} className="form-input">
                  {serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}
                </select>
              </Field>

              <Field label="Upload Current CV / Resume" required error={touched.currentCv ? errors.currentCv : ""}>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(event) => {
                    setCurrentCv(event.target.files?.[0] ?? null);
                    setTouched((prev) => ({ ...prev, currentCv: true }));
                    setErrors((prev) => ({ ...prev, currentCv: event.target.files?.[0] ? "" : "Please upload your current CV / resume." }));
                  }}
                  className={inputClass(touched.currentCv ? errors.currentCv : "")}
                />
              </Field>

              <Field label="LinkedIn Profile URL" error={errors.linkedinUrl}>
                <input type="url" value={formData.linkedinUrl} onChange={(e) => updateField("linkedinUrl", e.target.value)} onBlur={() => handleBlur("linkedinUrl")} placeholder="https://www.linkedin.com/in/..." className={inputClass(errors.linkedinUrl)} />
              </Field>

              <Field label="Message / Career Goal" required error={errors.message}>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  placeholder="Tell me your target role, market, timeline, and what needs to improve."
                  className={`${inputClass(errors.message)} resize-none`}
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary mt-2 min-h-12 w-full font-bold text-base px-6 py-4 rounded-[12px] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting Enquiry..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function inputClass(error?: string): string {
  return `form-input${error ? " !border-red-400 focus:!border-red-500" : ""}`;
}

function Field({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
      <span>{label}{required ? " *" : ""}</span>
      {children}
      {error ? <span className="text-xs font-medium text-red-500">{error}</span> : null}
    </label>
  );
}
