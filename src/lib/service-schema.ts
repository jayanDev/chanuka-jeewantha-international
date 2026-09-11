import { getBaseUrl } from "@/lib/site-url";

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
  priceRange?: string;
};

/** Describe services without claiming self-published reviews earn search stars. */
export function buildServiceSchema(input: ServiceSchemaInput) {
  const base = getBaseUrl();
  const url = `${base}${input.path.startsWith("/") ? input.path : `/${input.path}`}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: input.name,
    description: input.description,
    url,
    provider: { "@id": `${base}#organization` },
    areaServed: input.areaServed ?? "Worldwide",
    availableChannel: { "@type": "ServiceChannel", serviceUrl: `${base}/contact`, availableLanguage: "English" },
  };
}
