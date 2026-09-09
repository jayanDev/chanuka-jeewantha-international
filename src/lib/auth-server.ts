import { cookies } from "next/headers";
import { getSessionCookieName, getUserBySessionToken, getTokenFromCookieHeader, type AuthUser } from "@/lib/auth";

export async function getRequestUser(request: Request): Promise<AuthUser | null> {
  const token = getTokenFromCookieHeader(request.headers.get("cookie"));
  if (!token) return null;
  return getUserBySessionToken(token);
}

export async function getServerUser(): Promise<AuthUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  if (!token) return null;
  try {
    return await getUserBySessionToken(token);
  } catch {
    // Public rendering survives an auth outage; protected pages still see no authenticated user.
    console.error("[auth] Server session lookup unavailable");
    return null;
  }
}
