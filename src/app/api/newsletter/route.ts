import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { isTrustedOrigin } from "@/lib/security";
import { newsletterSchema } from "@/lib/validation";
import { sendEnquiryNotification } from "@/lib/email";

export async function POST(request: Request) {
  try {
    if (!isTrustedOrigin(request)) {
      return NextResponse.json({ error: "Forbidden origin" }, { status: 403 });
    }

    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const ip = getClientIp(request);
    const rate = await checkRateLimit(`newsletter:${ip}`, 8, 60_000);

    if (!rate.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute." },
        { status: 429 }
      );
    }

    // Email the new subscriber straight to the business inbox (same channel as the contact form).
    try {
      await sendEnquiryNotification({
        name: "Newsletter subscriber",
        email: parsed.data.email,
        subject: "New newsletter subscriber",
        message: `New newsletter signup from the website: ${parsed.data.email}`,
      });
    } catch (emailError) {
      console.error("Newsletter email notification failed:", emailError);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Server error while subscribing" },
      { status: 500 }
    );
  }
}
