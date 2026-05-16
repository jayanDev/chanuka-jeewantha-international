import Link from "next/link";

export default function FooterWhatsAppButton() {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center gap-2 px-[32px] py-[18px] bg-brand-main hover:bg-white hover:text-foreground text-white rounded-[10px] text-[16px] font-medium transition-colors"
    >
      Apply for International Career Support
    </Link>
  );
}
