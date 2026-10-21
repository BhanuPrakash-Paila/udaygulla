"use client";

import { FormEvent, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

type InquiryField = "name" | "email" | "service" | "message";
type InquiryErrors = Partial<Record<InquiryField, string>>;

const serviceOptions = [
  "Photography",
  "Wedding & Engagement",
  "Birthday & Private Events",
  "Corporate Events",
  "Videography & Films",
  "Photo & Video Editing",
  "Brand & Product Shoots",
  "Social Media Content",
  "Other",
];

const budgetOptions = [
  "Not sure yet",
  "Under ₹5,000",
  "₹5,000–₹15,000",
  "₹15,000–₹30,000",
  "₹30,000+",
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<InquiryErrors>({});

  function clearError(field: InquiryField) {
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const service = String(data.service ?? "").trim();
    const message = String(data.message ?? "").trim();
    const nextErrors: InquiryErrors = {};

    if (name.length < 2) nextErrors.name = "Please enter your full name.";
    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!service) nextErrors.service = "Choose the service you are enquiring about.";
    if (message.length < 10) nextErrors.message = "Please share a little more about your project.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = Object.keys(nextErrors)[0];
      form.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)?.focus();
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          name,
          email,
          service,
          message,
          phone: String(data.phone ?? "").trim() || undefined,
          eventDate: String(data.eventDate ?? "").trim() || undefined,
          budget: String(data.budget ?? "").trim() || undefined,
        }),
      });

      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mt-24 scroll-mt-28">
      <div className="grid gap-7 rounded-3xl border border-[#d8cbd2] bg-[#f8f5f2]/95 p-5 shadow-[0_28px_70px_-52px_rgba(41,35,43,0.64)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-10">
        <ScrollReveal className="space-y-6 lg:py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--portfolio-violet) sm:text-sm">
            Have a project in mind?
          </p>
          <h2 className="max-w-lg text-3xl font-semibold leading-tight text-(--portfolio-plum) sm:text-4xl lg:text-5xl">
            Let&apos;s create something worth remembering.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[#665d66] sm:text-base">
            Whether it&apos;s a special occasion, a creative shoot, or a brand idea, tell me what
            you&apos;re imagining. Let&apos;s bring it to life.
          </p>

          <div className="grid grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {[
              {
                label: "Instagram",
                url: "https://www.instagram.com/_chandu4u/?hl=en",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.55 2.55a.75.75 0 0 1 .75.75v1.4a.75.75 0 0 1-1.5 0V6.8a.75.75 0 0 1 .75-.75Zm-4.3 1.2a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5Zm0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Z" />
                  </svg>
                ),
              },
              {
                label: "Twitter",
                url: "https://twitter.com/_chandu4u",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M22.162 5.656c-.793.352-1.645.588-2.538.694a4.44 4.44 0 0 0 1.948-2.45 8.91 8.91 0 0 1-2.82 1.08 4.44 4.44 0 0 0-7.564 4.044A12.6 12.6 0 0 1 3.15 4.894a4.44 4.44 0 0 0 1.375 5.93 4.43 4.43 0 0 1-2.01-.556v.056a4.44 4.44 0 0 0 3.56 4.35 4.45 4.45 0 0 1-1.139.153 4.14 4.14 0 0 1-.834-.08 4.44 4.44 0 0 0 4.15 3.08 8.9 8.9 0 0 1-5.51 1.9c-.358 0-.71-.021-1.056-.062a12.56 12.56 0 0 0 6.795 1.992c8.153 0 12.607-6.75 12.607-12.607 0-.192-.005-.383-.014-.573a9.01 9.01 0 0 0 2.214-2.294Z" />
                  </svg>
                ),
              },
              {
                label: "Facebook",
                url: "https://www.facebook.com/_chandu4u",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.483 21.5V13.41h2.99l.45-3.49h-3.44V7.83c0-.98.273-1.65 1.69-1.65h1.8V3.01a24.13 24.13 0 0 0-2.62-.136c-2.59 0-4.36 1.58-4.36 4.49v2.5H7.87v3.49h2.97V21.5h2.64Z" />
                  </svg>
                ),
              },
              {
                label: "WhatsApp",
                url: "https://wa.me/9876545678",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2.002C6.486 2.002 2 6.488 2 12.002c0 1.974.516 3.82 1.413 5.397L2 22l4.78-1.4A9.955 9.955 0 0 0 12 22.002c5.514 0 10-4.486 10-10 0-5.514-4.486-9.999-10-9.999Zm0 1.5c4.69 0 8.5 3.81 8.5 8.499 0 4.093-2.87 7.572-6.785 8.346l-.401.1-.256-.265A8.47 8.47 0 0 1 5.5 12.001c0-4.688 3.81-8.499 8.5-8.499Zm-1.08 3.353a.75.75 0 0 0-1.252.675c.022.314.082.707.18 1.168.103.489.708 1.363 1.454 2.108.744.744 1.618 1.351 2.107 1.453.48.1.875.158 1.188.18a.75.75 0 0 0 .675-1.252l-.611-.61a.75.75 0 0 0-.716-.186c-.454.098-.965.112-1.355.025a6.05 6.05 0 0 1-1.34-.42 2.193 2.193 0 0 1-.923-.92 6.008 6.008 0 0 1-.42-1.34c-.087-.39-.073-.901.025-1.355a.75.75 0 0 0-.185-.716l-.61-.61Z" />
                  </svg>
                ),
              },
              {
                label: "Call",
                url: "tel:9876545678",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.054 15.054 0 0 0 6.59 6.59l2.2-2.2a1.002 1.002 0 0 1 1.11-.21 11.56 11.56 0 0 0 3.64.58 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C8.63 21.5 2.5 15.37 2.5 8a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.58 3.64.11.27.04.59-.21.8l-2.25 2.35Z" />
                  </svg>
                ),
              },
            ].map(({ label, url, icon }) => (
              <a
                key={label}
                href={url}
                target={label === "Call" ? "_self" : "_blank"}
                rel={label === "Call" ? undefined : "noreferrer"}
                className="inline-flex min-h-14 items-center gap-3 rounded-xl border border-[#e1d4da] bg-white/70 px-4 py-3 text-[#514953] transition duration-200 hover:-translate-y-0.5 hover:border-[#c7a9b8] hover:bg-white hover:text-(--portfolio-plum) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--portfolio-violet) motion-reduce:transform-none"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0e3e8] text-(--portfolio-violet)">
                  {icon}
                </span>
                <span>{label}</span>
              </a>
            ))}
          </div>
          <p className="border-t border-[#d8cbd2] pt-5 text-sm text-[#746a74]">
            Every great project starts with a conversation.
          </p>
        </ScrollReveal>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-[#e1d4da] bg-white p-5 shadow-[0_24px_60px_-48px_rgba(41,35,43,0.56)] sm:p-7"
        >
          <ScrollReveal className="space-y-5">
            <div className="mb-1">
              <h3 className="text-xl font-semibold text-(--portfolio-plum)">
                Tell me about your project.
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#746a74]">
                Share a few details and let&apos;s start planning something meaningful.
              </p>
            </div>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#514953]" htmlFor="name">
                  Full name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={80}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  onChange={() => clearError("name")}
                  className="contact-field w-full rounded-xl border border-[#ded3d8] bg-[#fdfbfa] px-4 py-3 text-sm text-(--portfolio-plum) placeholder:text-[#968b94]"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-rose-700">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#514953]" htmlFor="email">
                  Email address <span aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={() => clearError("email")}
                  className="contact-field w-full rounded-xl border border-[#ded3d8] bg-[#fdfbfa] px-4 py-3 text-sm text-(--portfolio-plum) placeholder:text-[#968b94]"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-rose-700">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#514953]" htmlFor="phone">
                  Phone or WhatsApp <span className="font-normal text-[#857a84]">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={40}
                  placeholder="Your number"
                  className="contact-field w-full rounded-xl border border-[#ded3d8] bg-[#fdfbfa] px-4 py-3 text-sm text-(--portfolio-plum) placeholder:text-[#968b94]"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-[#514953]"
                  htmlFor="eventDate"
                >
                  Event or project date{" "}
                  <span className="font-normal text-[#857a84]">(optional)</span>
                </label>
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  className="contact-field w-full rounded-xl border border-[#ded3d8] bg-[#fdfbfa] px-4 py-3 text-sm text-(--portfolio-plum)"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-[#514953]" htmlFor="service">
                  Service required <span aria-hidden="true">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? "service-error" : undefined}
                  onChange={() => clearError("service")}
                  className="contact-field w-full rounded-xl border border-[#ded3d8] bg-[#fdfbfa] px-4 py-3 text-sm text-(--portfolio-plum)"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
                {errors.service && (
                  <p id="service-error" className="mt-1.5 text-xs text-rose-700">
                    {errors.service}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-[#514953]" htmlFor="budget">
                  Estimated budget <span className="font-normal text-[#857a84]">(optional)</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="contact-field w-full rounded-xl border border-[#ded3d8] bg-[#fdfbfa] px-4 py-3 text-sm text-(--portfolio-plum)"
                >
                  <option value="">Choose a range (optional)</option>
                  {budgetOptions.map((budget) => (
                    <option key={budget}>{budget}</option>
                  ))}
                </select>
                <p className="mt-1.5 text-xs text-[#857a84]">
                  Example ranges only; we can discuss what fits your project.
                </p>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-[#514953]" htmlFor="message">
                  Project details <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  minLength={10}
                  maxLength={4000}
                  placeholder="Tell me what you have in mind, the moments or visuals you need, and anything else that would help me understand your project."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  onChange={() => clearError("message")}
                  className="contact-field w-full resize-y rounded-xl border border-[#ded3d8] bg-[#fdfbfa] px-4 py-3 text-sm leading-6 text-(--portfolio-plum) placeholder:text-[#968b94]"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-rose-700">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-(--portfolio-violet) px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#5743c8] disabled:cursor-wait disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--portfolio-violet) motion-reduce:transform-none"
            >
              {status === "sending" ? (
                <>
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white motion-reduce:animate-none"
                  />{" "}
                  Sending your enquiry...
                </>
              ) : (
                <>
                  Let&apos;s Talk About Your Project{" "}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </>
              )}
            </button>
            <p
              className={`min-h-5 text-sm ${status === "error" ? "text-rose-700" : "text-[#665d66]"}`}
              role="status"
              aria-live="polite"
            >
              {status === "success" &&
                "Thanks for reaching out! Your enquiry has been submitted successfully."}
              {status === "error" &&
                "Your message couldn't be sent right now. Please try again or use the direct contact options."}
            </p>
          </ScrollReveal>
        </form>
      </div>
    </section>
  );
}
