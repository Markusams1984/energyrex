const TITLE_VARIANTS = {
  display:
    "mt-7 max-w-full text-6xl leading-[0.98] font-extrabold tracking-tight text-white sm:text-7xl lg:max-w-[60vw] lg:text-8xl",
  document:
    "mt-7 max-w-full text-5xl leading-[1] font-extrabold tracking-tight text-white sm:text-6xl lg:max-w-[60vw]",
};

interface Props {
  /** Línea corta en versalitas sobre el título ("Quiénes somos"). */
  eyebrow: string;
  title: string;
  /** Párrafo introductorio bajo el título. */
  intro: React.ReactNode;
  /**
   * Escala tipográfica del título. Elige según el largo del texto y el peso
   * que la página debe tener frente a las demás:
   *
   * - `display` (por defecto) — páginas comerciales con títulos cortos, de
   *   una sola línea. Rampa `6xl → 7xl → 8xl` con interlineado apretado.
   * - `document` — texto legal o títulos largos que envuelven a dos líneas.
   *   Baja un escalón en cada breakpoint y no salta a `8xl` en `lg`, con
   *   interlineado suelto para que las líneas no se estrangulen al envolver.
   */
  variant?: keyof typeof TITLE_VARIANTS;
}

/**
 * Cabecera compartida por las páginas interiores: eyebrow, título e intro.
 * El eyebrow y la intro son idénticos en todas; solo el título cambia de
 * escala según `variant`.
 */
export const PageHeader = ({
  eyebrow,
  title,
  intro,
  variant = "display",
}: Props) => {
  return (
    <>
      <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-brand-mint uppercase">
        <span className="h-px w-7 bg-brand-mint" aria-hidden="true" />
        {eyebrow}
      </p>

      <h1 className={TITLE_VARIANTS[variant]}>{title}</h1>

      <p className="mt-7 max-w-full text-lg leading-relaxed text-slate-300 lg:max-w-[60vw]">
        {intro}
      </p>
    </>
  );
};
