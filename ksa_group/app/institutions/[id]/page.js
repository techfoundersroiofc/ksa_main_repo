import { notFound } from "next/navigation";
import { INSTITUTIONS } from "@/lib/data/institutions";
import InstitutionDetailClient from "./InstitutionDetailClient";

export async function generateStaticParams() {
  return INSTITUTIONS.map((inst) => ({
    id: inst.id,
  }));
}

export default async function InstitutionDetailPage({ params }) {
  const { id } = await params;
  const institution = INSTITUTIONS.find((i) => i.id === id);

  if (!institution) {
    notFound();
  }

  return <InstitutionDetailClient institution={institution} />;
}
