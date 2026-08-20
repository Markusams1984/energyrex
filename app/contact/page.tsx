import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a EnergyRex por WhatsApp al +56 9 3003 7134 o escríbenos a mfarias.elec@gmail.com. Cotizaciones sin costo para tu proyecto eléctrico.",
};
export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contactanos</span>
        </>
    )
}