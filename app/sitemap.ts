import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Fecha de la última revisión real del contenido de las páginas comerciales.
 *
 * Es una constante fija y no `new Date()` a propósito: `new Date()` estampa la
 * fecha del build, así que cada despliegue —aunque sea un cambio de CSS— le
 * anunciaría a Google que las cuatro páginas se actualizaron. Es falso, y un
 * sitemap que miente sobre sus fechas termina ignorado. Al editar el texto de
 * una página de verdad, sube esta fecha a mano.
 */
const CONTENIDO_REVISADO = "2026-08-28";

const url = (path: string) => new URL(path, siteConfig.url).href;

/**
 * Criterio de `priority` y `changeFrequency`:
 *
 * - `/` es la entrada principal y la que concentra las señales del sitio: 1.0.
 * - `/nosotros` y `/contacto` son las páginas comerciales activas —los
 *   servicios y la conversión a WhatsApp—, así que van juntas en 0.8.
 * - `/privacidad` es un documento legal obligatorio que casi nunca cambia:
 *   0.3 y `yearly`. Debe estar indexada, pero no compitiendo con las demás.
 *
 * `priority` es relativa dentro del propio sitio: no mejora la posición frente
 * a otros dominios, solo le dice al crawler dónde mirar primero acá adentro.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url("/"),
      lastModified: CONTENIDO_REVISADO,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: url("/nosotros"),
      lastModified: CONTENIDO_REVISADO,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/contacto"),
      lastModified: CONTENIDO_REVISADO,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      // Única ruta con una fecha derivada de algo real en vez de fija: la
      // política declara su propia fecha de revisión en pantalla, y sale del
      // mismo campo del config. Si se revisa la política, el sitemap sigue.
      url: url("/privacidad"),
      lastModified: siteConfig.legal.politicaActualizada,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
