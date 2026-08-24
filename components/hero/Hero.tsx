import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={`${styles.hero} relative flex flex-1 items-center overflow-hidden font-sans`}>
      <div className={`${styles.grid} pointer-events-none absolute inset-0`} aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 py-24 sm:px-10 lg:py-28">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-brand-logo uppercase">
          <span className="h-px w-7 bg-brand-logo" aria-hidden="true" />
          Ingeniería · Ejecución · Energía solar
        </p>

        <h1 className="mt-7 max-w-full text-6xl leading-[0.98] font-extrabold tracking-tight text-white sm:text-7xl lg:max-w-[60vw] lg:text-8xl">
          Proyectos eléctricos que llegan a obra sin sorpresas.
        </h1>

        <p className="mt-7 max-w-full text-lg leading-relaxed text-slate-300 lg:max-w-[60vw]">
          Diseñamos, ejecutamos y certificamos instalaciones eléctricas y
          fotovoltaicas para empresas, mandantes y hogares en todo Chile.
        </p>

      </div>
    </section>
  );
};
