import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/legal";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo EnergyRex trata los datos personales recogidos en su formulario de contacto, conforme a la Ley N° 19.628 sobre Protección de la Vida Privada.",
};

export default function PrivacidadPage() {
  return <PrivacyPolicy />;
}
