const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Normalize to E.164 +94XXXXXXXXX for Sri Lanka mobile. */
export function normalizeSriLankaPhone(input: string): string | null {
  const digits = input.replace(/\D/g, "");

  if (digits.startsWith("94") && digits.length === 11 && digits[2] === "7") {
    return `+${digits}`;
  }
  if (digits.length === 9 && digits.startsWith("7")) {
    return `+94${digits}`;
  }
  if (digits.length === 10 && digits.startsWith("07")) {
    return `+94${digits.slice(1)}`;
  }

  return null;
}

export function validateEmail(email: string): string | null {
  const trimmed = email.trim().toLowerCase();
  if (!trimmed) return "Email is required.";
  if (!EMAIL_RE.test(trimmed)) return "Enter a valid email address.";
  return null;
}

export function validateName(name: string): string | null {
  const trimmed = name.trim();
  if (trimmed.length < 2) return "Please enter your name.";
  if (trimmed.length > 120) return "Name is too long.";
  return null;
}

export function validatePhone(phone: string): string | null {
  if (!phone.trim()) return "Phone number is required.";
  if (!normalizeSriLankaPhone(phone)) {
    return "Enter a valid Sri Lanka mobile number (e.g. +94 77 123 4567).";
  }
  return null;
}
