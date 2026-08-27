const services = [
  {
    title: "Ingeniería y Proyectos Eléctricos",
    text: "Elaboración de planos, memorias técnicas, presupuestos, detección de fallas y montajes completos en baja tensión.",
  },
  {
    title: "Energía Solar Fotovoltaica",
    text: "Diseño, instalación y mantención de sistemas On-Grid, Off-Grid e híbridos, aumentos de capacidad e informes de factibilidad energética.",
  },
  {
    title: "Seguridad y Automatización",
    text: "Instalación de cámaras de seguridad (CCTV), cercos eléctricos y sistemas de citofonía.",
  },
  {
    title: "Certificaciones y Regularizaciones",
    text: "Tramitación oficial de declaraciones SEC.",
  },
];

export const AboutUs = () => {
  return (
    <section className="relative flex flex-1 items-center">
      <div className="relative mx-auto w-full max-w-1400px px-6 py-24 sm:px-10 lg:py-28">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-brand-logo uppercase">
          <span className="h-px w-7 bg-brand-logo" aria-hidden="true" />
          Quiénes somos
        </p>

        <h1 className="mt-7 max-w-full text-6xl leading-[0.98] font-extrabold tracking-tight text-white sm:text-7xl lg:max-w-[60vw] lg:text-8xl">
          Sobre Nosotros
        </h1>

        <p className="mt-7 max-w-full text-lg leading-relaxed text-slate-300 lg:max-w-[60vw]">
          Somos especialistas en ingeniería, ejecución y regularización de
          proyectos eléctricos, energía solar fotovoltaica y sistemas de
          seguridad. Desarrollamos soluciones integrales para el sector
          residencial, comercial e industrial, garantizando instalaciones
          seguras, eficientes y alineadas con la normativa técnica vigente.
        </p>

        <p className="mt-5 max-w-full text-lg leading-relaxed text-slate-300 lg:max-w-[60vw]">
          Bajo la dirección de{" "}
          <span className="font-semibold text-white">
            Matías Farías González
          </span>
          , instalador eléctrico certificado por la SEC, ofrecemos un servicio
          transparente y de alto estándar que abarca:
        </p>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map(({ title, text }) => (
            <li
              key={title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h2 className="text-lg font-semibold tracking-tight text-brand-mint">
                {title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
