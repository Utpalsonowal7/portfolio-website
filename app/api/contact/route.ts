import { NextResponse } from "next/server";

export const runtime = "nodejs";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return NextResponse.json({ error: "Request not allowed." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Expected JSON." }, { status: 415 });
  }
  let data: unknown;
  try {
    const text = await request.text();
    if (text.length > 12000) return NextResponse.json({ error: "Message is too large." }, { status: 413 });
    data = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!data || typeof data !== "object") return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  const fields = data as Record<string, unknown>;
  // Bots commonly fill hidden website fields.
  if (typeof fields.website === "string" && fields.website.trim()) return NextResponse.json({ success: true });
  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";
  if (name.length < 2 || name.length > 100 || /[\r\n]/.test(name) || email.length > 254 || !emailPattern.test(email) || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Enter a name (2–100 characters), valid email, and message (10–5,000 characters)." }, { status: 400 });
  }
  const apiKey = process.env.BREVO_API_KEY;
  const sender = process.env.BREVO_SENDER_EMAIL;
  const recipient = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !sender || !recipient || !emailPattern.test(sender) || !emailPattern.test(recipient)) {
    return NextResponse.json({ error: "Messaging is temporarily unavailable. Please contact me by email." }, { status: 503 });
  }
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": apiKey, "Content-Type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        sender: { email: sender, name: "Portfolio contact" },
        to: [{ email: recipient }],
        replyTo: { email, name },
        subject: `Portfolio message from ${name}`,
        textContent: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error("Contact email provider returned status", response.status);
      return NextResponse.json({ error: "Could not send your message. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Could not send your message. Please try again later." }, { status: 502 });
  }
}
