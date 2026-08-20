import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EnergyRex | Instalaciones Eléctricas Certificadas SEC",
    template: "%s | EnergyRex",
  },
  description: "Instalador eléctrico certificado SEC. Proyectos, instalaciones residenciales, comerciales e industriales y certificación TE1, TE2 y TE3.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png"
  },
  openGraph: {
    siteName: "EnergyRex",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        </body>
    </html>
  );
}
