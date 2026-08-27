import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { footerNavItems, services, siteConfig } from "@/lib/site-config";

const { contact, legal } = siteConfig;

const columnTitle =
  "text-xs font-semibold tracking-[0.18em] text-brand-logo uppercase";
const columnLink =
  "text-sm text-slate-600 transition-colors hover:text-brand-green";

/**
 * Pie de página global. Server Component: el año se resuelve en el render,
 * sin JavaScript en el cliente.
 */
export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-brand-mist to-[#dde7e3] font-sans">
      <div
        className="h-px w-full bg-gradient-to-r from-brand-logo via-brand-mint to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1.1fr_1.1fr]">
          {/* Marca, credibilidad y CTA */}
          <div>
            <Link
              href="/"
              aria-label={`${siteConfig.name} - Inicio`}
              className="inline-flex items-center"
            >
              <Image
                src="/logo-full.svg"
                alt={siteConfig.name}
                width={176}
                height={32}
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              {siteConfig.tagline}
            </p>

            <p className="mt-5 inline-flex items-center gap-2 rounded-lg border border-brand-logo/20 bg-white/60 px-3.5 py-2 text-sm font-semibold text-brand-ink">
              <ShieldCheck
                className="size-4 shrink-0 text-brand-logo"
                aria-hidden="true"
              />
              {siteConfig.certification}
            </p>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-logo px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Cotiza por WhatsApp
            </a>
          </div>

          {/* Navegación */}
          <nav aria-label="Enlaces del sitio">
            <h2 className={columnTitle}>Navegación</h2>
            <ul className="mt-4 space-y-2.5">
              {footerNavItems.map(({ path, text }) => (
                <li key={path}>
                  <Link href={path} className={columnLink}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Servicios */}
          <nav aria-label="Servicios">
            <h2 className={columnTitle}>Servicios</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map(({ slug, title }) => (
                <li key={slug}>
                  <Link href={`/about#${slug}`} className={columnLink}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h2 className={columnTitle}>Contacto</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`tel:${contact.phoneE164}`}
                  className={`flex items-center gap-2.5 ${columnLink}`}
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 ${columnLink}`}
                >
                  <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className={`flex items-center gap-2.5 ${columnLink}`}
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Responsable técnico
              <br />
              {siteConfig.responsable}
            </p>
          </div>
        </div>

        {/* Identificación legal y copyright */}
        <div className="mt-9 flex flex-col gap-2 border-t border-brand-ink/10 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          {(legal.razonSocial || legal.rut) && (
            <p>
              {legal.razonSocial}
              {legal.razonSocial && legal.rut && " · "}
              {legal.rut && `RUT ${legal.rut}`}
            </p>
          )}
          <Link
            href="/privacidad"
            className="transition-colors hover:text-brand-green"
          >
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
};
