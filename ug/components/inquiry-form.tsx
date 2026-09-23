"use client";
import { FormEvent, useState } from "react";

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"}/api/inquiries`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
        },
      );
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }
  return (
    <form onSubmit={submit} className="space-y-7" aria-label="Project inquiry">
      <label className="block">
        <span className="eyebrow">Name</span>
        <input
          required
          name="name"
          className="mt-2 w-full border-b border-black/25 bg-transparent py-3 outline-none focus:border-[var(--rust)]"
        />
      </label>
      <label className="block">
        <span className="eyebrow">Email</span>
        <input
          required
          type="email"
          name="email"
          className="mt-2 w-full border-b border-black/25 bg-transparent py-3 outline-none focus:border-[var(--rust)]"
        />
      </label>
      <label className="block">
        <span className="eyebrow">Project type</span>
        <select
          name="projectType"
          className="mt-2 w-full border-b border-black/25 bg-transparent py-3 outline-none focus:border-[var(--rust)]"
        >
          <option>Photography</option>
          <option>Film</option>
          <option>Photography + Film</option>
        </select>
      </label>
      <label className="block">
        <span className="eyebrow">Tell us about it</span>
        <textarea
          required
          name="message"
          rows={4}
          className="mt-2 w-full resize-none border-b border-black/25 bg-transparent py-3 outline-none focus:border-[var(--rust)]"
        />
      </label>
      <label className="flex gap-3 text-xs leading-5">
        <input
          required
          type="checkbox"
          name="consent"
          value="true"
          className="mt-1 accent-[var(--rust)]"
        />{" "}
        I agree to be contacted about this inquiry.
      </label>
      <button
        disabled={status === "sending"}
        className="min-h-11 bg-[var(--ink)] px-6 text-[10px] uppercase tracking-[.16em] text-white transition hover:bg-[var(--rust)] disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send inquiry ↗"}
      </button>
      <p aria-live="polite" className="text-sm">
        {status === "success" && "Thank you. Your note is on its way."}
        {status === "error" && "Something went wrong. Please email hello@ateliernoir.studio."}
      </p>
    </form>
  );
}
