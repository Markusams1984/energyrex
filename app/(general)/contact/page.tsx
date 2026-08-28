import type { Metadata } from "next";
import { FormContact, InfoContact } from "@/components/contact";
import { siteConfig } from "@/lib/site-config";

const { contact } = siteConfig;

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacta a ${siteConfig.name} por WhatsApp al ${contact.phone} o escríbenos a ${contact.email}. Cotizaciones sin costo para tu proyecto eléctrico.`,
};

export default function ContactPage() {
  return (
    <>
      <InfoContact />
      <FormContact />
    </>
  );
}
