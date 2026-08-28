import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * El sitio es enteramente público: no hay panel, ni área de clientes, ni rutas
 * de API. Por eso no hay ningún `disallow` — una regla de bloqueo inventada
 * solo sirve para dejar fuera del índice algo que sí queríamos mostrar.
 *
 * Lo que sí importa aquí es el `sitemap`: es la forma estándar de que un
 * crawler lo encuentre sin que haya que darlo de alta en ningún lado.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", siteConfig.url).href,
  };
}
