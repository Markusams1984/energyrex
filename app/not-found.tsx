import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { CTA_PRIMARY, CTA_SECONDARY, SECTION_CONTAINER } from "@/lib/styles";
import { cn } from "@/lib/utils";

/**
 * 404 del sitio. Es un Server Component y no necesita nada más: al vivir en la
 * raíz de `app/`, se renderiza dentro del layout raíz, así que el navbar, el
 * Backdrop y el footer ya vienen puestos.
 */
export default function NotFound() {
  return (
    <section className="relative flex flex-1 items-center">
      <div className={cn(SECTION_CONTAINER, "relative py-24 lg:py-28")}>
        <PageHeader
          eyebrow="Error 404"
          title="Página no encontrada"
          intro="La dirección que buscas no existe o cambió de lugar."
          // `display` llega a 8xl en escritorio y este título se partiría en
          // dos líneas; `document` lo mantiene en una.
          variant="document"
        />

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/" className={CTA_PRIMARY}>
            Ir al inicio
          </Link>
          <Link href="/contacto" className={CTA_SECONDARY}>
            Ver formas de contacto
          </Link>
        </div>
      </div>
    </section>
  );
}
