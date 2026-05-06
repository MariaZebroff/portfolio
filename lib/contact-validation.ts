import { contactValidationMessages as m } from "@/lib/contact";

export type ContactFieldName = "name" | "email" | "message";

export type ContactFieldErrors = Partial<Record<ContactFieldName, string>>;

/** Same shape as client-side checks; keep in sync with API limits. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactFields(input: {
  name: string;
  email: string;
  message: string;
}): { ok: true } | { ok: false; fields: ContactFieldErrors } {
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();
  const fields: ContactFieldErrors = {};

  if (name.length === 0) fields.name = m.nameRequired;
  else if (name.length < 2) fields.name = m.nameTooShort;
  else if (name.length > 120) fields.name = m.nameTooLong;

  if (email.length === 0) fields.email = m.emailRequired;
  else if (email.length > 254) fields.email = m.emailTooLong;
  else if (!EMAIL_RE.test(email)) fields.email = m.emailInvalid;

  if (message.length === 0) fields.message = m.messageRequired;
  else if (message.length < 3) fields.message = m.messageTooShort;
  else if (message.length > 8000) fields.message = m.messageTooLong;

  if (Object.keys(fields).length > 0) {
    return { ok: false, fields };
  }
  return { ok: true };
}
