"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<{ error: boolean; message: string } | null>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    setPending(true);
    setStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(fields)),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not send your message.");
      setStatus({ error: false, message: "Message sent! Thanks for reaching out." });
      form.reset();
    } catch (error) {
      setStatus({ error: true, message: error instanceof Error ? error.message : "Something went wrong. Please try again." });
    } finally {
      setPending(false);
    }
  }
  const input = "mt-2 w-full border border-gray bg-transparent px-4 py-3 text-white placeholder:text-gray focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
  return (
    <form onSubmit={submit} className="mt-6 max-w-[720px] border border-gray p-5 sm:p-6" aria-label="Send a message">
      <fieldset disabled={pending} className="space-y-5 disabled:opacity-70">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-gray" htmlFor="contact-name">Name<input className={input} id="contact-name" name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Your name" /></label>
          <label className="block text-gray" htmlFor="contact-email">Email<input className={input} id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
        </div>
        <label className="block text-gray" htmlFor="contact-message">Message<textarea className={`${input} min-h-[180px] resize-y`} id="contact-message" name="message" required minLength={10} maxLength={5000} rows={6} placeholder="Tell me about your project or question" /></label>
        <div className="hidden" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
        <button type="submit" className="inline-flex min-h-[44px] items-center justify-center border border-primary px-4 py-2 font-medium text-white transition-colors hover:bg-primary/10 disabled:cursor-wait">{pending ? "Sending…" : "Send message"}</button>
      </fieldset>
      <div aria-live="polite" aria-atomic="true">{status && <p role={status.error ? "alert" : "status"} className={`mt-4 text-sm leading-6 ${status.error ? "text-red-300" : "text-primary"}`}>{status.message}</p>}</div>
    </form>
  );
}
