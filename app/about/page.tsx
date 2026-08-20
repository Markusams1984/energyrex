import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a EnergyRex: Matías Farías González, instalador eléctrico certificado SEC. Proyectos residenciales, comerciales e industriales con garantía.",
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">Nosotros</span>
        </>
    )
}