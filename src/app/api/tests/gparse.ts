export function gmailParser(email: string): string {
  const [localPart, domain] = email.split('@');

  const parsedLocalPart = localPart.replace(/\./g, '');

  return `${parsedLocalPart}@${domain}`;
}
