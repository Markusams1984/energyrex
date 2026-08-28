

import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/lib/site-config";

const { certification, contact } = siteConfig;

const contactDetails = [
  { label: "Responsable Técnico", value: siteConfig.responsable },
  { label: "Acreditación", value: certification.full },
  {
    label: "Teléfono / WhatsApp",
    value: contact.phone,
    href: contact.whatsapp,
  },
  {
    label: "Correo Electrónico",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
];

export const InfoContact = () => {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-[1400px] px-6 pt-24 pb-12 sm:px-10 lg:pt-28">
        <PageHeader
          eyebrow="Cotizaciones sin costo"
          title="Contáctanos"
          intro="¿Tienes un proyecto en mente, necesitas regularizar tu instalación o requieres atención técnica? Comunícate directamente con nosotros para evaluar tu requerimiento y entregarte una cotización a medida."
        />

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-white">
          Información de Contacto
        </h2>

        <dl className="mt-6 grid gap-5 sm:grid-cols-2">
          {contactDetails.map(({ label, value, href }) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <dt className="text-xs font-semibold tracking-[0.14em] text-brand-mint uppercase">
                {label}
              </dt>
              <dd className="mt-3 text-lg leading-relaxed text-slate-200">
                {href ? (
                  <a
                    href={href}
                    className="transition-colors hover:text-brand-mint"
                  >
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};