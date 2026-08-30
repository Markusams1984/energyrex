import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CTA_PRIMARY } from "@/lib/styles";
import { cn } from "@/lib/utils";

const { contact } = siteConfig;

const labelClass =
  "text-xs font-semibold tracking-[0.14em] text-brand-mint uppercase";

const fieldClass =
  "rounded-lg border border-white/15 bg-black/25 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-brand-mint focus:ring-1 focus:ring-brand-mint/40 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50";

export const FormContact = () => {
  async function enviarMensaje(formData: FormData) {
    "use server";

    const datos = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      telefono: formData.get("telefono"),
      mensaje: formData.get("mensaje"),
    };

    // TODO: enviar el correo o guardar el mensaje (Resend, Nodemailer, DB,
    // Formspree, etc.). Hoy esto solo imprime en el log del servidor: el
    // mensaje no llega a ninguna parte.
    // Al conectarlo: quitar los disabled de inputs y botón, restaurar el
    // texto "Enviar mensaje", eliminar el párrafo de "Formulario en
    // preparación", y actualizar la sección 2 de privacy-policy.tsx
    // quitando la frase sobre el formulario deshabilitado.
    // Al conectar el envío, agregar también: validación de los datos en
    // servidor, límite de envíos por IP, y campo honeypot contra bots.
    // El disabled del formulario no protege esta función: es un endpoint
    // público desde que existe.
    console.log("Nuevo mensaje de contacto:", datos);
  }

  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-24 sm:px-10 lg:pb-28">
        <form
          action={enviarMensaje}
          className="rounded-2xl border border-white/10 bg-brand-navy/60 p-6 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Escríbenos
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-200">
            Cuéntanos brevemente tu requerimiento y te responderemos a la brevedad.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="nombre" className={labelClass}>
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                disabled
                autoComplete="name"
                placeholder="Tu nombre"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelClass}>
                Correo
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled
                autoComplete="email"
                placeholder="tucorreo@ejemplo.cl"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="telefono" className={labelClass}>
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                disabled
                autoComplete="tel"
                placeholder="+56 9 1234 5678"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="mensaje" className={labelClass}>
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                disabled
                placeholder="Describe tu proyecto o requerimiento eléctrico"
                className={`resize-y ${fieldClass}`}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled
            className={cn(
              CTA_PRIMARY,
              "mt-8 w-full disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-brand-mint sm:w-auto",
            )}
          >
            Formulario en preparación
          </button>

          <p className="mt-4 text-sm leading-relaxed text-slate-200">
            Estamos habilitando el envío online. Mientras tanto escríbenos por
            WhatsApp al{" "}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-mint hover:underline"
            >
              {contact.phone}
            </a>{" "}
            o a{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-brand-mint hover:underline"
            >
              {contact.email}
            </a>
            .
          </p>

          <p className="mt-3 text-xs leading-relaxed text-slate-400">
            Al enviar aceptas que usemos tus datos únicamente para responder tu
            consulta y elaborar tu cotización. No los compartimos con terceros.
            Revisa nuestra{" "}
            <Link
              href="/privacidad"
              className="text-brand-mint hover:underline"
            >
              Política de Privacidad
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  );
};
