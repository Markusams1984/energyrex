import { siteConfig } from "@/lib/site-config";

const { certification, contact, legal, responsable } = siteConfig;

const sections = [
  {
    title: "1. Responsable del tratamiento",
    body: [
      `Los datos personales recogidos a través de este sitio son tratados por ${
        legal.razonSocial || siteConfig.name
      }${legal.rut ? `, RUT ${legal.rut}` : ""}, cuyo responsable es ${responsable}. Para cualquier consulta sobre esta política puedes escribir a ${contact.email}.`,
    ],
  },
  {
    title: "2. Datos que recopilamos",
    body: [
      "Únicamente tratamos los datos que tú nos entregas de forma voluntaria a través del formulario de contacto: nombre, correo electrónico, teléfono (opcional) y el mensaje con la descripción de tu requerimiento. Actualmente el formulario de contacto se encuentra deshabilitado, por lo que no estamos recibiendo datos a través del sitio.",
      "No utilizamos cookies de publicidad ni de seguimiento, y no recopilamos datos sensibles en el sentido de la Ley N° 19.628.",
    ],
  },
  {
    title: "3. Finalidad y base del tratamiento",
    body: [
      "Usamos estos datos exclusivamente para responder tu consulta, elaborar la cotización solicitada y dar seguimiento comercial y técnico al requerimiento. No los empleamos para elaborar perfiles ni para tomar decisiones automatizadas.",
      "La base del tratamiento es tu consentimiento, otorgado al enviar el formulario. Puedes revocarlo en cualquier momento escribiéndonos, sin que ello afecte la licitud del tratamiento previo.",
    ],
  },
  {
    title: "4. Comunicación a terceros",
    body: [
      `No vendemos, arrendamos ni cedemos tus datos personales a terceros con fines comerciales. Solo podrán ser comunicados cuando sea necesario para ejecutar el servicio que nos encargas o cuando lo exija una obligación legal o un requerimiento de autoridad competente, como la ${certification.organismo} (SEC).`,
    ],
  },
  {
    title: "5. Plazo de conservación",
    body: [
      "Conservamos los datos durante el tiempo necesario para atender tu solicitud y, si se concreta un servicio, durante el plazo que exijan las obligaciones legales, tributarias y de respaldo técnico asociadas a la instalación. Cumplido ese plazo, los eliminamos.",
    ],
  },
  {
    title: "6. Seguridad",
    body: [
      "Aplicamos medidas razonables de seguridad para evitar el acceso no autorizado, la pérdida o la alteración de la información. El sitio se sirve sobre conexión cifrada y el acceso a los mensajes recibidos está restringido al responsable.",
    ],
  },
  {
    title: "7. Tus derechos",
    body: [
      "Conforme a la Ley N° 19.628 sobre Protección de la Vida Privada, puedes ejercer los derechos de acceso, rectificación, cancelación y oposición sobre tus datos personales.",
      `Para ejercerlos, escríbenos a ${contact.email} indicando tu nombre y el derecho que deseas ejercer. Responderemos dentro de los plazos que establece la ley.`,
    ],
  },
  {
    title: "8. Marco normativo aplicable",
    body: [
      "Este sitio se rige por la Ley N° 19.628 sobre Protección de la Vida Privada. La Ley N° 21.719, publicada en diciembre de 2024, moderniza dicho régimen y crea la Agencia de Protección de Datos Personales; su entrada en vigencia está diferida a diciembre de 2026.",
    ],
  },
  {
    title: "9. Cambios en esta política",
    body: [
      "Podemos actualizar esta política para reflejar cambios legales o en nuestros servicios. La versión vigente será siempre la publicada en esta página, con su fecha de última actualización.",
    ],
  },
];

export const PrivacyPolicy = () => {
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 sm:px-10 lg:py-28">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-brand-logo uppercase">
          <span className="h-px w-7 bg-brand-logo" aria-hidden="true" />
          Información legal
        </p>

        <h1 className="mt-7 max-w-full text-5xl leading-[1] font-extrabold tracking-tight text-white sm:text-6xl lg:max-w-[60vw]">
          Política de Privacidad
        </h1>

        <p className="mt-7 max-w-full text-lg leading-relaxed text-slate-300 lg:max-w-[60vw]">
          En {siteConfig.name} tratamos tus datos personales con la reserva que
          exige la normativa chilena. Aquí explicamos qué información
          recopilamos, para qué la usamos y cómo puedes controlarla.
        </p>

        <div className="mt-12 grid max-w-full gap-5 lg:max-w-[60vw]">
          {sections.map(({ title, body }) => (
            <article
              key={title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h2 className="text-lg font-semibold tracking-tight text-brand-mint">
                {title}
              </h2>
              {body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-3 text-[15px] leading-relaxed text-slate-300"
                >
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-400">
          Última actualización: {legal.politicaActualizada}
        </p>
      </div>
    </section>
  );
};
