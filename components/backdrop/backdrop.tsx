import { cn } from "@/lib/utils";

const BRAND_GRADIENT =
  "bg-[image:radial-gradient(60%_90%_at_88%_8%,rgba(16,138,96,0.55)_0%,transparent_60%),linear-gradient(105deg,var(--color-brand-navy)_0%,var(--color-brand-navy-mid)_45%,var(--color-brand-forest)_100%)]";

const BRAND_GRID =
  "bg-[image:linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-size-[64px_64px] [mask-image:radial-gradient(120%_100%_at_78%_30%,#000_15%,transparent_78%)]";

interface Props {
  children: React.ReactNode;
  /** Etiqueta HTML que envuelve el contenido. */
  as?: "main" | "section" | "div";
  className?: string;
}

/**
 * Fondo de marca EnergyRex: degradado navy → verde con una rejilla
 * enmascarada encima. Compartido por la home y las páginas de (general).
 */
export const Backdrop = ({ children, as: Tag = "div", className }: Props) => {
  return (
    <Tag
      className={cn(
        "relative flex flex-1 flex-col overflow-hidden font-sans",
        BRAND_GRADIENT,
        className,
      )}
    >
      <div
        className={cn("pointer-events-none absolute inset-0", BRAND_GRID)}
        aria-hidden="true"
      />
      {children}
    </Tag>
  );
};
