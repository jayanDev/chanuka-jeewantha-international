import { NextResponse } from "next/server";
import { getRequestUser } from "@/lib/auth-server";

export async function GET(request: Request) {
  try {
    const user = await getRequestUser(request);
    return NextResponse.json({ user }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    console.error("[auth] Session lookup unavailable");
    return NextResponse.json({ error: "Authentication is temporarily unavailable" }, {
      status: 503,
      headers: { "Cache-Control": "no-store", "Retry-After": "60" },
    });
  }
}
