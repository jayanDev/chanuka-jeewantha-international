"use client";

import React, { useState } from "react";

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

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
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
  whatsapp: "",
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

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [currentCv, setCurrentCv] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");

  const updateField = (key: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorText("");

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
      if (currentCv) payload.append("currentCv", currentCv);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.error ?? "Failed to submit enquiry.");
      }

      setSubmitStatus("success");
      setFormData(initialFormState);
      setCurrentCv(null);
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
            <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
              <div aria-live="polite" aria-atomic="true">
                {submitStatus === "success" && (
                  <div className="rounded-[10px] border border-brand-main/20 bg-brand-main/10 p-4 text-brand-dark" role="status">
                    Thank you for submitting your enquiry. Your details will be reviewed personally and you will be contacted with the most suitable service direction.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="rounded-[10px] border border-red-200 bg-red-50 p-4 text-red-600" role="alert">
                    {errorText || "Something went wrong. Please try again later."}
                  </div>
                )}
              </div>

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
                <Field label="Full Name" required>
                  <input value={formData.name} onChange={(e) => updateField("name", e.target.value)} required autoComplete="name" className="form-input" />
                </Field>
                <Field label="Email Address" required>
                  <input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} required autoComplete="email" className="form-input" />
                </Field>
                <Field label="WhatsApp Number with Country Code" required>
                  <input value={formData.whatsapp} onChange={(e) => updateField("whatsapp", e.target.value)} required placeholder="+1 555 000 0000" className="form-input" />
                </Field>
                <Field label="Current Country" required>
                  <input value={formData.currentCountry} onChange={(e) => updateField("currentCountry", e.target.value)} required className="form-input" />
                </Field>
                <Field label="Target Market" required>
                  <input value={formData.targetCountry} onChange={(e) => updateField("targetCountry", e.target.value)} required placeholder="Country or region you're applying to, or remote-first" className="form-input" />
                </Field>
                <Field label="Current Career Level" required>
                  <select value={formData.careerLevel} onChange={(e) => updateField("careerLevel", e.target.value)} required className="form-input">
                    {careerLevels.map((level) => <option key={level} value={level}>{level}</option>)}
                  </select>
                </Field>
                <Field label="Target Role" required>
                  <input value={formData.targetRole} onChange={(e) => updateField("targetRole", e.target.value)} required className="form-input" />
                </Field>
                <Field label="Years of Experience" required>
                  <input value={formData.yearsExperience} onChange={(e) => updateField("yearsExperience", e.target.value)} required placeholder="8 years" className="form-input" />
                </Field>
              </div>

              <Field label="Selected Service or Package" required>
                <select value={formData.selectedService} onChange={(e) => updateField("selectedService", e.target.value)} required className="form-input">
                  {serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}
                </select>
              </Field>

              <Field label="Upload Current CV / Resume" required>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={(event) => setCurrentCv(event.target.files?.[0] ?? null)}
                  className="form-input"
                />
              </Field>

              <Field label="LinkedIn Profile URL">
                <input type="url" value={formData.linkedinUrl} onChange={(e) => updateField("linkedinUrl", e.target.value)} placeholder="https://www.linkedin.com/in/..." className="form-input" />
              </Field>

              <Field label="Message / Career Goal" required>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  required
                  placeholder="Tell me your target role, market, timeline, and what needs to improve."
                  className="form-input resize-none"
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-brand-main px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
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

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
      <span>{label}{required ? " *" : ""}</span>
      {children}
    </label>
  );
}
