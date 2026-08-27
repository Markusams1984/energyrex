export const FormContact = () => {
  async function enviarMensaje(formData: FormData) {
    "use server";

    const datos = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      telefono: formData.get("telefono"),
      mensaje: formData.get("mensaje"),
    };

    // TODO: enviar el correo o guardar el mensaje (Resend, Nodemailer, DB, etc.)
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
              <label
                htmlFor="nombre"
                className="text-xs font-semibold tracking-[0.14em] text-brand-mint uppercase"
              >
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                autoComplete="name"
                placeholder="Tu nombre"
                className="rounded-lg border border-white/15 bg-black/25 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-brand-mint focus:ring-1 focus:ring-brand-mint/40 focus:outline-none"
              />
            </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs font-semibold tracking-[0.14em] text-brand-mint uppercase"
          >
            Correo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tucorreo@ejemplo.cl"
            className="rounded-lg border border-white/15 bg-black/25 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-brand-mint focus:ring-1 focus:ring-brand-mint/40 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label
            htmlFor="telefono"
            className="text-xs font-semibold tracking-[0.14em] text-brand-mint uppercase"
          >
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            placeholder="+56 9 1234 5678"
            className="rounded-lg border border-white/15 bg-black/25 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-brand-mint focus:ring-1 focus:ring-brand-mint/40 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label
            htmlFor="mensaje"
            className="text-xs font-semibold tracking-[0.14em] text-brand-mint uppercase"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            required
            placeholder="Describe tu proyecto o requerimiento eléctrico"
            className="resize-y rounded-lg border border-white/15 bg-black/25 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-brand-mint focus:ring-1 focus:ring-brand-mint/40 focus:outline-none"
          />
        </div>
      </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-lg bg-brand-mint px-6 py-3 font-semibold text-brand-navy transition-colors hover:bg-white sm:w-auto"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};
