import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { isTrustedOrigin } from "@/lib/security";
import { contactSchema } from "@/lib/validation";
import { isAllowedFileType, saveUploadedFile } from "@/lib/upload-storage";

function readString(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

export async function POST(request: Request) {
  try {
    if (!isTrustedOrigin(request)) {
      return NextResponse.json({ error: "Forbidden origin" }, { status: 403 });
    }

    let body: unknown;
    const contentType = request.headers.get("content-type") ?? "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const cvFile = formData.get("currentCv");
      let cvUrl = "";

      if (cvFile instanceof File && cvFile.size > 0) {
        const isAllowed = isAllowedFileType(cvFile, {
          mimeTypes: [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ],
          extensions: ["pdf", "doc", "docx"],
        });

        if (!isAllowed) {
          return NextResponse.json(
            { error: "Upload your current CV / resume as a PDF, DOC, or DOCX file." },
            { status: 400 }
          );
        }

        cvUrl = await saveUploadedFile({ file: cvFile, folder: "enquiries/cv" });
      }

      const details = [
        `WhatsApp Number with Country Code: ${readString(formData, "whatsapp")}`,
        `Current Country: ${readString(formData, "currentCountry")}`,
        `Target Country / Market: ${readString(formData, "targetCountry")}`,
        `Current Career Level: ${readString(formData, "careerLevel")}`,
        `Target Role: ${readString(formData, "targetRole")}`,
        `Years of Experience: ${readString(formData, "yearsExperience")}`,
        `Selected Service or Package: ${readString(formData, "selectedService")}`,
        `LinkedIn Profile URL: ${readString(formData, "linkedinUrl")}`,
        cvUrl ? `Uploaded CV / Resume: ${cvUrl}` : "Uploaded CV / Resume: Not attached",
        "",
        "Message / Career Goal:",
        readString(formData, "message"),
      ].join("\n");

      body = {
        name: readString(formData, "name"),
        email: readString(formData, "email"),
        subject: `Career enquiry — ${readString(formData, "selectedService") || "Career branding"}`,
        message: details,
        website: readString(formData, "website"),
      };
    } else {
      body = await request.json();
    }

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      // Honeypot tripped: return success to avoid signal for bots.
      return NextResponse.json({ ok: true });
    }

    const ip = getClientIp(request);
    const rate = await checkRateLimit(`contact:${ip}`, 5, 60_000);

    if (!rate.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute." },
        { status: 429 }
      );
    }

    await prisma.contactMessage.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        subject: parsed.data.subject,
        message: parsed.data.message,
      },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Server error while sending message" },
      { status: 500 }
    );
  }
}
