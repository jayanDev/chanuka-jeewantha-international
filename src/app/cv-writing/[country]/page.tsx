import { notFound, permanentRedirect } from "next/navigation";

const destinations: Record<string, string> = {
  usa: "/en-us", uk: "/en-uk", australia: "/en-au", canada: "/en-ca", "new-zealand": "/en-nz",
};

export default async function LegacyCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const destination = Object.hasOwn(destinations, country) ? destinations[country] : undefined;
  if (!destination) notFound();
  permanentRedirect(destination);
}
