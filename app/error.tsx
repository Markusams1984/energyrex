"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/lib/site-config";
import { CTA_PRIMARY, CTA_SECONDARY, SECTION_CONTAINER } from "@/lib/styles";
import { cn } from "@/lib/utils";

const { contact } = siteConfig;

interface Props {
  error: Error & { digest?: string };
  /**
   * Reintenta: vuelve a pedir y a renderizar el contenido del boundary.
   *
   * En Next 16.3 la prop es `retry`, no `reset` — `reset` quedó para el caso
   * específico de limpiar el estado del boundary *sin* volver a pedir el
   * contenido, que no es lo que queremos acá.
   */
  retry: () => void;
}

/**
 * Pantalla de error de renderizado. Un error boundary de React tiene que ser
 * Client Component, de ahí el "use client" de arriba.
 *
 * Nota: este archivo cubre las páginas, no el layout raíz que lo envuelve. El
 * navbar y el footer siguen en pantalla porque se renderizan por fuera.
 */
export default function ErrorBoundary({ error, retry }: Props) {
  useEffect(() => {
    // A la consola, nunca a la pantalla: el mensaje puede traer rutas de
    // archivos o detalles internos del servidor.
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex flex-1 items-center">
      <div className={cn(SECTION_CONTAINER, "relative py-24 lg:py-28")}>
        <PageHeader
          eyebrow="Error"
          title="Algo salió mal"
          intro="No pudimos cargar esta página. Puedes reintentar en unos segundos, y si vuelve a fallar, escríbenos y lo vemos contigo."
          variant="document"
        />

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button type="button" onClick={() => retry()} className={CTA_PRIMARY}>
            Reintentar
          </button>
          <Link href="/" className={CTA_SECONDARY}>
            Ir al inicio
          </Link>
        </div>

        <p className="mt-10 text-[15px] leading-relaxed text-slate-300">
          También puedes escribirnos por{" "}
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-mint transition-colors hover:text-white"
          >
            WhatsApp al {contact.phone}
          </a>{" "}
          o a{" "}
          <a
            href={`mailto:${contact.email}`}
            className="font-semibold text-brand-mint transition-colors hover:text-white"
          >
            {contact.email}
          </a>
          .
        </p>

        {/*
          `digest` es un hash opaco que Next genera para el error, no su
          mensaje: no filtra nada. Sirve para que quien nos escriba pueda
          citarlo y podamos calzarlo con el log del servidor.
        */}
        {error.digest && (
          <p className="mt-4 text-sm text-slate-400">
            Código de referencia:{" "}
            <span className="font-mono">{error.digest}</span>
          </p>
        )}
      </div>
    </section>
  );
}
