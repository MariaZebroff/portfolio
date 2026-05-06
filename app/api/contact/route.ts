import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const OK_BODY = { ok: true as const };

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  const raw =
    process.env.CONTACT_ALLOWED_ORIGINS ??
    "https://mariasdesignstudio.ca,https://www.mariasdesignstudio.ca,http://localhost:3000,http://127.0.0.1:3000";
  const allowed = new Set(
    raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
  );
  return allowed.has(origin);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

async function verifyTurnstile(token: string, remoteip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !token) return false;
  const body = new URLSearchParams({ secret, response: token });
  if (remoteip) body.append("remoteip", remoteip);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company_website?: unknown;
  turnstileToken?: unknown;
};

export async function POST(req: Request) {
  const secFetchSite = req.headers.get("sec-fetch-site");
  if (secFetchSite === "cross-site") {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }

  const origin = req.headers.get("origin");
  if (!isAllowedOrigin(origin)) {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }

  let json: ContactBody;
  try {
    json = (await req.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const honeypot =
    typeof json.company_website === "string" ? json.company_website.trim() : "";
  if (honeypot.length > 0) {
    return NextResponse.json(OK_BODY);
  }

  const name = typeof json.name === "string" ? json.name.trim() : "";
  const email = typeof json.email === "string" ? json.email.trim() : "";
  const message = typeof json.message === "string" ? json.message.trim() : "";
  const token =
    typeof json.turnstileToken === "string" ? json.turnstileToken.trim() : "";

  if (
    name.length < 2 ||
    name.length > 120 ||
    !email ||
    !isValidEmail(email) ||
    message.length < 3 ||
    message.length > 8000 ||
    !token
  ) {
    return NextResponse.json(
      { ok: false, error: "Please check your entries." },
      { status: 400 },
    );
  }

  const remoteip =
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    undefined;

  if (!(await verifyTurnstile(token, remoteip))) {
    return NextResponse.json(
      { ok: false, error: "Verification failed. Please try again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("contact: missing RESEND_API_KEY, RESEND_FROM_EMAIL, or CONTACT_TO_EMAIL");
    return NextResponse.json(
      { ok: false, error: "Server misconfigured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Website inquiry from ${name}`,
    text: `${name} <${email}>\n\n${message}`,
    html: `<p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</p><pre style="white-space:pre-wrap;font-family:system-ui,sans-serif">${escapeHtml(message)}</pre>`,
  });

  if (error) {
    console.error("resend:", error);
    return NextResponse.json(
      { ok: false, error: "Could not send. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json(OK_BODY);
}
