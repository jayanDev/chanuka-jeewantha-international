export const BLOG_PAGE_SIZE = 12;

export function parseBlogPage(value: unknown): number | null {
  if (value === undefined || value === null) return 1;
  if (typeof value !== "string" || !/^[1-9]\d*$/.test(value)) return null;
  const page = Number(value);
  return Number.isSafeInteger(page) ? page : null;
}
