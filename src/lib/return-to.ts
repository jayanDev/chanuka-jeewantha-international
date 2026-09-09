export function safeReturnTo(value: string | null | undefined): string {
  if (!value || !value.startsWith("/") || value.startsWith("//") || /[\\\x00-\x20]/.test(value)) return "/";
  const url = new URL(value, "https://internal.invalid");
  if (url.origin !== "https://internal.invalid" || /^\/auth\/(signin|signup)(\/|$)/.test(url.pathname)) return "/";
  return `${url.pathname}${url.search}${url.hash}`;
}
