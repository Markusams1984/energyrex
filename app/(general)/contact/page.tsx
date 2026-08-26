import { FormContact } from '@/components/form-contact/form-contact';
import { InfoContact } from '@/components/info-contact/info-contact';
import styles from '../section.module.css';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a EnergyRex por WhatsApp al +56 9 3003 7134 o escríbenos a mfarias.elec@gmail.com. Cotizaciones sin costo para tu proyecto eléctrico.",
};

export default function ContactPage() {
  return (
    <div className={`${styles.dark} relative flex flex-1 flex-col overflow-hidden`}>
      <div
        className={`${styles.grid} pointer-events-none absolute inset-0`}
        aria-hidden="true"
      />

      <InfoContact />
      <FormContact />
    </div>
  );
}
