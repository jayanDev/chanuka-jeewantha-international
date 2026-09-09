import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isMarketPath } from "@/lib/markets";

const SESSION_COOKIE = "session_token";

function isProtectedPath(pathname: string): boolean {
  return (
    pathname.startsWith("/cart") ||
    pathname.startsWith("/checkout") ||
    pathname.startsWith("/orders") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/notifications") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/reviews-admin")
  );
}

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  // Reject unknown country URLs before streaming can turn notFound() into a 200 response.
  if (pathname.startsWith("/en-") && !isMarketPath(pathname)) {
    return NextResponse.rewrite(new URL("/404", request.url), {
      status: 404,
      headers: { "X-Robots-Tag": "noindex" },
    });
  }
  const sessionToken = request.cookies.get(SESSION_COOKIE)?.value;

  if (/^\/(blog|offers|tutorials|p|tools|packages|services|resources|case-studies|locations|career-stage|resume-writer|cv-writing)(\/|$)/.test(pathname)) {
    try {
      const { checkPublicRequest } = await import("@/lib/public-request");
      const result = await checkPublicRequest(request.nextUrl);
      if (result === 404) {
        return NextResponse.rewrite(new URL("/404", request.url), {
          status: 404, headers: { "X-Robots-Tag": "noindex" },
        });
      }
      if (result) return NextResponse.redirect(new URL(result, request.url), 308);
    } catch {
      return new NextResponse("This page is temporarily unavailable. Please try again shortly.", {
        status: 503, headers: { "Retry-After": "60", "Cache-Control": "no-store", "Content-Type": "text/plain; charset=utf-8" },
      });
    }
  }

  if (isProtectedPath(pathname) && !sessionToken) {
    const signInUrl = new URL("/auth/signin", request.url);
    signInUrl.searchParams.set("returnTo", `${pathname}${search}`);
    return NextResponse.redirect(signInUrl);
  }

  // Cookie presence is not authentication; expired cookies must not redirect away from sign-in.
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/tools/:path*",
    "/packages/:path*",
    "/services/:path*",
    "/resources/:path*",
    "/case-studies/:path*",
    "/locations/:path*",
    "/career-stage/:path*",
    "/resume-writer/:path*",
    "/cv-writing/:path*",
    "/blog/:path*",
    "/tutorials/:path*",
    "/p/:path*",
    "/offers/bulk-cv-5-pack",
    "/offers/bulk-cv-10-pack",
    "/offers/career-brand-trinity-bundle",
    "/offers/application-duo-bundle",
    "/en-(.*)",
    "/cart/:path*",
    "/checkout/:path*",
    "/orders/:path*",
    "/profile/:path*",
    "/notifications/:path*",
    "/admin/:path*",
    "/reviews-admin/:path*",
    "/auth/signin",
    "/auth/signup",
  ],
};
