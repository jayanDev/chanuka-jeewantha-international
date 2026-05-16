import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatUsd, getPackageDisplayPrice, packageProducts } from "@/lib/packages-catalog";
import { buildNoIndexMetadata, buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList, buildProductSchema } from "@/lib/structured-data";

type PackagePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return packageProducts.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packageProducts.find((item) => item.slug === slug);

  if (!pkg) {
    return buildNoIndexMetadata({
      title: "Package Not Found",
      description: "The requested package is unavailable.",
      path: `/packages/${slug}`,
    });
  }

  return buildPageMetadata({
    title: `${pkg.name} | International Signature Series`,
    description: `${pkg.name} - ${pkg.description ?? pkg.audience}. ${getPackageDisplayPrice(pkg)} in USD.`,
    path: `/packages/${slug}`,
    keywords: [pkg.name, pkg.category, "international resume writing", "global CV writing"],
  });
}

export default async function PackageSinglePage({ params }: PackagePageProps) {
  const { slug } = await params;
  const pkg = packageProducts.find((item) => item.slug === slug);

  if (!pkg) {
    notFound();
  }

  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "International Packages", path: "/pricing" },
    { name: pkg.name, path: `/packages/${pkg.slug}` },
  ]);

  const productLd = buildProductSchema({
    name: pkg.name,
    description: `${pkg.description ?? pkg.audience}. Includes: ${pkg.features.slice(0, 3).join(", ")}.`,
    path: `/packages/${pkg.slug}`,
    category: pkg.category,
    priceLkr: pkg.priceLkr,
    sku: pkg.slug,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />

      <section className="w-full bg-foreground px-4 py-[72px] text-background sm:px-6 md:py-[96px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 flex items-center gap-2 text-white/85">
            <Link href="/" className="hover:text-brand-main">Home</Link>
            <span className="text-brand-main">/</span>
            <Link href="/pricing" className="hover:text-brand-main">International Packages</Link>
          </div>
          <p className="mb-4 font-semibold uppercase tracking-[0.18em] text-brand-main">International Signature Series</p>
          <h1 className="font-heading text-[34px] font-bold leading-tight text-white md:text-[62px]">
            {pkg.name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl text-white/85">{pkg.description ?? pkg.audience}</p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-[72px] sm:px-6 md:py-[96px]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[1fr_340px]">
          <article className="rounded-[20px] border border-zinc-200 p-8">
            <p className="text-sm uppercase tracking-wide text-zinc-500">Category</p>
            <p className="mb-6 mt-2 text-lg font-semibold text-foreground">{pkg.category}</p>

            <p className="text-sm uppercase tracking-wide text-zinc-500">Investment</p>
            <p className="mb-6 mt-2 font-heading text-[34px] font-bold text-foreground">
              {pkg.priceNote ?? formatUsd(pkg.priceLkr)}
            </p>

            <p className="text-sm uppercase tracking-wide text-zinc-500">Delivery</p>
            <p className="mb-8 mt-2 text-lg font-semibold text-foreground">{pkg.delivery}</p>

            <h2 className="mb-5 font-heading text-[28px] font-bold text-foreground">What is included</h2>
            <ul className="mb-10 space-y-3">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-text-body">
                  <span className="mt-1.5 inline-block h-2.5 w-2.5 rounded-full bg-brand-main" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {pkg.idealFor && (
              <div className="rounded-[16px] border border-brand-main/20 bg-brand-main/5 p-5">
                <h2 className="mb-3 font-heading text-[22px] font-bold text-foreground">Ideal For</h2>
                <p className="leading-relaxed text-text-body">{pkg.idealFor}</p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/contact?service=${encodeURIComponent(pkg.name)}`}
                className="btn btn-primary"
              >
                Apply for This Service
              </Link>
              <Link href="/pricing" className="btn btn-secondary">
                View All Packages
              </Link>
            </div>
          </article>

          <aside className="h-fit rounded-[20px] border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="mb-3 font-heading text-xl font-bold text-foreground">More {pkg.category}</h3>
            <div className="space-y-3">
              {packageProducts
                .filter((item) => item.slug !== pkg.slug && item.serviceKey === pkg.serviceKey)
                .slice(0, 6)
                .map((item) => (
                  <Link key={item.slug} href={`/packages/${item.slug}`} className="block rounded-[10px] border border-zinc-200 bg-white px-3 py-3 hover:border-brand-main">
                    <p className="text-sm font-semibold text-zinc-800">{item.name}</p>
                    <p className="mt-1 text-xs text-zinc-500">{getPackageDisplayPrice(item)} - {item.audience}</p>
                  </Link>
                ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
