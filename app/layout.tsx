import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Backdrop } from "@/components/backdrop";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * Título y descripción por defecto del sitio. Viven en una constante porque
 * los consumen dos bloques distintos (`metadata` y `metadata.openGraph`) y
 * escribirlos dos veces garantiza que tarde o temprano queden desalineados.
 *
 * El "EnergyRex" del título va escrito y no sale de `siteConfig.name`: aquí es
 * parte de una frase de marketing, no un dato suelto. Partirla para inyectar
 * la variable se leería peor y no aporta nada.
 */
const SITE_TITLE = "EnergyRex | Instalaciones Eléctricas Certificadas SEC";
const SITE_DESCRIPTION =
  "Instalador eléctrico certificado SEC. Proyectos, instalaciones residenciales, comerciales e industriales y certificación TE1, TE2 y TE3.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: SITE_TITLE,
    template: `%s | ${siteConfig.name}`,
  },
  description: SITE_DESCRIPTION,
  // `icons` tampoco se declara: Next los resuelve por convención desde
  // `app/icon.png` y `app/apple-icon.png`, igual que la imagen de Open Graph.
  /**
   * OJO con la herencia: una página hereda este bloque completo solo mientras
   * no declare el suyo. Si una página define `openGraph`, REEMPLAZA este
   * objeto entero (no se mezclan campo por campo), así que ahí hay que repetir
   * `siteName`, `locale` y `type` — o extraerlos a una constante compartida y
   * expandirla con spread en ambos lados.
   *
   * `images` no se declara a propósito: Next la resuelve por convención de
   * archivo desde `app/opengraph-image.png`.
   */
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: siteConfig.name,
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <Backdrop as="main">{children}</Backdrop>
        <Footer />
      </body>
    </html>
  );
}
