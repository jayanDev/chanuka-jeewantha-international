import Link from "next/link";

export default function FooterWhatsAppButton() {
  return (
    <Link
      href="/contact"
      className="btn btn-primary font-bold text-base px-8 py-4 rounded-[12px]"
    >
      Request Career Support
    </Link>
  );
}
