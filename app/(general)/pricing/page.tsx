import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precios y Presupuestos",
  description:
    "Presupuestos claros para instalaciones eléctricas, certificación TE1, TE2 y TE3, cámaras de seguridad y detección de fallas. Cotiza sin costo.",
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Precios</span>
        </>
    )
}