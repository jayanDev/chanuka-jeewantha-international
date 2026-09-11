"use client";

import React, { useEffect, useRef, useState } from "react";
import { internationalBundles } from "@/lib/international-bundles";
import { trackCareerEvent } from "@/lib/analytics";

// Web3Forms public access key. This is designed to be exposed client-side
// (spam is handled by the honeypot + Web3Forms filtering). Emails the enquiry
// to chanukajeewantha00@gmail.com.
const WEB3FORMS_ACCESS_KEY = "765378bb-9111-4bd6-88a9-0850d94e8ff8";

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
  "Foreign Job CV / International Format",
  "Graphical CV / Premium Design",
  "Career Consultation",
  ...internationalBundles.map(bundle => bundle.name),
];

const serviceAliases: Record<string, string> = {
  "ATS CV Writing": "ATS Resume / CV Writing",
  "ATS Resume & CV Writing": "ATS Resume / CV Writing",
  "LinkedIn Profile Optimization": "LinkedIn Optimization",
  "Executive Resume & Modern CV Format": "Foreign Job CV / International Format",
  "Graphical CV / Premium Design CV": "Graphical CV / Premium Design",
  "Starter Pack": "International Starter Pack",
  "Career Pack": "International Career Pack",
  "Career Move Pack": "Global Migration Pack",
};

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
  { code: "+960", label: "+960 (Maldives)" },
  { code: "+7", label: "+7 (Russia)" },
  { code: "+968", label: "+968 (Oman)" },
  { code: "+965", label: "+965 (Kuwait)" },
  { code: "+358", label: "+358 (Finland)" },
  { code: "+880", label: "+880 (Bangladesh)" },
  { code: "+84", label: "+84 (Vietnam)" },
  { code: "+39", label: "+39 (Italy)" },
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
  selectedService: "International Career Pack",
  linkedinUrl: "",
  message: "",
  website: "",
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlPattern = /^https?:\/\/.+/i;

// Only Name and Email are required. Everything else is optional, and is only
// validated for format when the visitor actually fills it in.
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
      if (v && !/^[0-9\s-]{6,}$/.test(v)) return "Enter a valid phone number (digits only).";
      return "";
    case "linkedinUrl":
      if (v && !urlPattern.test(v)) return "Enter a valid URL (starting with https://).";
      return "";
    default:
      return "";
  }
}

type ContactFormProps = {
  defaultTargetCountry?: string;
  defaultDialCode?: string;
  defaultService?: string;
  defaultCareerLevel?: string;
  serviceChoices?: string[];
  marketContext?: { name: string; currency: string; path: string };
};

export default function ContactForm({ defaultTargetCountry, defaultDialCode, defaultService, defaultCareerLevel, serviceChoices, marketContext }: ContactFormProps = {}) {
  const choices = serviceChoices ?? serviceOptions;
  const selection = defaultService && Object.hasOwn(serviceAliases, defaultService) ? serviceAliases[defaultService] : defaultService;
  const defaults: FormState = {
    ...initialFormState,
    targetCountry: defaultTargetCountry ?? initialFormState.targetCountry,
    countryCode: defaultDialCode ?? initialFormState.countryCode,
    selectedService: selection && choices.includes(selection) ? selection : (choices.includes(initialFormState.selectedService) ? initialFormState.selectedService : choices[0]),
    careerLevel: defaultCareerLevel && careerLevels.includes(defaultCareerLevel) ? defaultCareerLevel : initialFormState.careerLevel,
  };
  const [formData, setFormData] = useState<FormState>(defaults);
  const [currentCv, setCurrentCv] = useState<File | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<string, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");
  const started = useRef(false);
  const inFlight = useRef(false);
  const successRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Auto-dismiss the success notice and scroll it into view.
  useEffect(() => {
    if (submitStatus !== "success") return;
    successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  }, [submitStatus]);

  const updateField = (key: keyof FormState, value: string) => {
    if (key !== "website" && !started.current) { started.current = true; trackCareerEvent("form_start"); }
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
    const keys: (keyof FormState)[] = ["name", "email", "whatsappNumber", "linkedinUrl"];
    const next: FieldErrors = {};
    keys.forEach((k) => {
      const err = validateField(k, formData[k]);
      if (err) next[k] = err;
    });
    setErrors(next);
    setTouched((prev) => {
      const t = { ...prev };
      keys.forEach((k) => (t[k] = true));
      return t;
    });
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inFlight.current) return;
    if (!validateAll()) { trackCareerEvent("form_error"); return; }
    if (currentCv && (currentCv.size > 5 * 1024 * 1024 || !/\.(pdf|docx?)$/i.test(currentCv.name))) {
      setSubmitStatus("error");
      setErrorText("Choose a PDF, DOC or DOCX file no larger than 5 MB, or remove the attachment.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorText("");

    // Honeypot: if the hidden field is filled, it's a bot. Show success, send nothing.
    if (formData.website.trim()) {
      setSubmitStatus("success");
      setFormData(defaults);
      setCurrentCv(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setIsSubmitting(false);
      return;
    }

    inFlight.current = true;
    try {
      const phone = formData.whatsappNumber.trim()
        ? `${formData.countryCode} ${formData.whatsappNumber}`.trim()
        : "Not provided";

      const lines = [
        ...(marketContext ? [`Country Website: ${marketContext.name}`, `Enquiry Page: ${marketContext.path}`, `Pricing Currency: ${marketContext.currency} (final invoice confirmed after review)`] : []),
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `WhatsApp: ${phone}`,
        `Current Country: ${formData.currentCountry || "-"}`,
        `Target Market: ${formData.targetCountry || "-"}`,
        `Career Level: ${formData.careerLevel}`,
        `Target Role: ${formData.targetRole || "-"}`,
        `Years of Experience: ${formData.yearsExperience || "-"}`,
        `Selected Service / Package: ${formData.selectedService}`,
        `LinkedIn: ${formData.linkedinUrl || "-"}`,
        "",
        "Message / Career Goal:",
        formData.message || "(none provided)",
      ];

      // Attach the CV if it's within Web3Forms' 5MB limit; otherwise note it.
      const MAX_ATTACHMENT = 5 * 1024 * 1024;
      const attachCv = currentCv && currentCv.size <= MAX_ATTACHMENT ? currentCv : null;
      if (currentCv && !attachCv) {
        lines.push("", "(Note: CV file exceeded 5MB and was not attached - please request it by email.)");
      }

      const payload = new FormData();
      payload.append("access_key", WEB3FORMS_ACCESS_KEY);
      payload.append("subject", `New enquiry${marketContext ? ` (${marketContext.name})` : ""}: ${formData.selectedService || "Career branding"} - ${formData.name}`);
      payload.append("from_name", "Chanuka Jeewantha Website");
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("replyto", formData.email);
      payload.append("botcheck", "");
      payload.append("message", lines.join("\n"));
      if (attachCv) payload.append("attachment", attachCv);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
        signal: AbortSignal.timeout(30000),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data?.success) {
        throw new Error(
          data?.message ||
            "We couldn't send your enquiry. Please email chanukajeewantha00@gmail.com directly."
        );
      }

      setSubmitStatus("success");
      setFormData(defaults);
      setCurrentCv(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      trackCareerEvent("generate_lead");
      started.current = false;
      setErrors({});
      setTouched({});
    } catch (error: unknown) {
      trackCareerEvent("form_error");
      setSubmitStatus("error");
      setErrorText(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email chanukajeewantha00@gmail.com directly."
      );
    } finally {
      inFlight.current = false;
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
              {marketContext ? `Your next step in ${marketContext.name}.` : "Submit your career-branding enquiry."}
            </h2>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-text-body">
              Just your name and email to start - share as much or as little detail as you like. Your enquiry is reviewed personally before the most suitable package is confirmed.
            </p>
            <div className={marketContext ? "mt-8 border-t border-zinc-200 pt-6" : "mt-8 rounded-[18px] border border-zinc-200 bg-white p-6 shadow-sm"}>
              <h3 className="font-heading text-[22px] font-bold text-foreground">Premium, personally written by Chanuka</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {marketContext ? `English career documents and personal guidance for ${marketContext.name} opportunities. Your target role, experience and goals shape the recommendation. Scope and payment details are confirmed before work begins.` : "This is not a budget catalogue flow. The service is built for senior professionals, executives, C-suite hires, founders, and candidates competing for serious roles in competitive job markets and remote-first companies."}
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
                    Thank you - your details have been received. Chanuka reviews every enquiry personally and will contact you with the most suitable service direction. Please check your email (and spam folder) for the reply.
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

                <Field label="WhatsApp Number" error={errors.whatsappNumber}>
                  <div className="flex gap-2">
                    <input
                      list="country-codes"
                      value={formData.countryCode}
                      onChange={(e) => updateField("countryCode", e.target.value)}
                      aria-label="Country code (type to search)"
                      placeholder="+1"
                      className="form-input !w-[96px] shrink-0"
                    />
                    <datalist id="country-codes">
                      {countryCodes.map((c) => <option key={c.code + c.label} value={c.code}>{c.label}</option>)}
                    </datalist>
                    <input
                      value={formData.whatsappNumber}
                      onChange={(e) => updateField("whatsappNumber", e.target.value)}
                      onBlur={() => handleBlur("whatsappNumber")}
                      inputMode="tel"
                      placeholder="555 000 0000"
                      className={`${inputClass(errors.whatsappNumber)} min-w-0 flex-1`}
                    />
                  </div>
                </Field>

                <Field label="Current Country">
                  <input value={formData.currentCountry} onChange={(e) => updateField("currentCountry", e.target.value)} className="form-input" />
                </Field>
                <Field label="Target Market">
                  <input value={formData.targetCountry} onChange={(e) => updateField("targetCountry", e.target.value)} placeholder="e.g. USA, UK, remote-first" className="form-input" />
                </Field>
                <Field label="Current Career Level">
                  <select value={formData.careerLevel} onChange={(e) => updateField("careerLevel", e.target.value)} className="form-input">
                    {careerLevels.map((level) => <option key={level} value={level}>{level}</option>)}
                  </select>
                </Field>
                <Field label="Target Role">
                  <input value={formData.targetRole} onChange={(e) => updateField("targetRole", e.target.value)} className="form-input" />
                </Field>
                <Field label="Years of Experience">
                  <input value={formData.yearsExperience} onChange={(e) => updateField("yearsExperience", e.target.value)} inputMode="numeric" placeholder="8 years" className="form-input" />
                </Field>
              </div>

              <Field label="Selected Service or Package">
                <select value={formData.selectedService} onChange={(e) => updateField("selectedService", e.target.value)} className="form-input">
                  {choices.map((service) => <option key={service} value={service}>{service}</option>)}
                </select>
              </Field>

              <Field label="Upload Current CV / Resume (optional)">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".pdf,.doc,.docx"
                  onChange={(event) => setCurrentCv(event.target.files?.[0] ?? null)}
                  className="form-input"
                />
              </Field>

              <Field label="LinkedIn Profile URL" error={errors.linkedinUrl}>
                <input type="url" value={formData.linkedinUrl} onChange={(e) => updateField("linkedinUrl", e.target.value)} onBlur={() => handleBlur("linkedinUrl")} placeholder="https://www.linkedin.com/in/..." className={inputClass(errors.linkedinUrl)} />
              </Field>

              <Field label="Message / Career Goal">
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Tell me your target role, market, timeline, and what needs to improve."
                  className="form-input resize-none"
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary mt-2 min-h-12 w-full font-bold text-base px-6 py-4 rounded-[12px] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting Enquiry..." : "Submit International Enquiry"}
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
