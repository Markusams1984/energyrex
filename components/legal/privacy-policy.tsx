import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/lib/site-config";

const { certification, contact, legal, responsable } = siteConfig;

/**
 * La fecha vive en el config como ISO (la comparte con el sitemap); aquí se
 * formatea para leerla en español. `timeZone: "UTC"` evita que el día se corra
 * al interpretar una fecha sin hora.
 */
const politicaActualizada = new Intl.DateTimeFormat("es-CL", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
}).format(new Date(`${legal.politicaActualizada}T00:00:00Z`));

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
      // La forma verbal es deliberada: "fue fijada para" enuncia un hecho con
      // fecha, no un pendiente. "está diferida a" envejecía sola al pasar esa
      // fecha. No cambiar a un tiempo que dependa de cuándo se lea la página.
      "Este sitio se rige por la Ley N° 19.628 sobre Protección de la Vida Privada. La Ley N° 21.719, publicada en diciembre de 2024, moderniza dicho régimen y crea la Agencia de Protección de Datos Personales; su entrada en vigencia plena fue fijada para el 1 de diciembre de 2026.",
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
        <PageHeader
          variant="document"
          eyebrow="Información legal"
          title="Política de Privacidad"
          intro={
            <>
              En {siteConfig.name} tratamos tus datos personales con la reserva
              que exige la normativa chilena. Aquí explicamos qué información
              recopilamos, para qué la usamos y cómo puedes controlarla.
            </>
          }
        />

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
          Última actualización: {politicaActualizada}
        </p>
      </div>
    </section>
  );
};
