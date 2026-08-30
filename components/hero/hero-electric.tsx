import Image from "next/image";
import { ElectricBorder } from "@/components/electric-border";
import { SECTION_CONTAINER } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

/** Lienzo interior del hero: la marca EnergyRex en clave "eléctrica". */
export const HeroElectric = () => {
  return (
    <section className="relative flex flex-1 items-center">
      <div className={cn(SECTION_CONTAINER, "relative flex flex-col items-center py-24 lg:py-28")}>
        <ElectricBorder color="#7df9ff" speed={1} chaos={0.12} borderRadius={16}>
          <div className="relative flex h-64 w-[85vw] max-w-3xl items-center justify-center overflow-hidden rounded-[16px] bg-[image:radial-gradient(110%_130%_at_50%_0%,rgba(125,249,255,0.16)_0%,transparent_55%),radial-gradient(90%_120%_at_88%_100%,rgba(53,208,140,0.22)_0%,transparent_62%),linear-gradient(155deg,#07121e_0%,var(--color-brand-navy)_48%,#072318_100%)] sm:h-80 lg:h-96">
            {/* Rejilla enmascarada */}
            <div
              className="pointer-events-none absolute inset-0 bg-[image:linear-gradient(to_right,rgba(125,249,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(125,249,255,0.08)_1px,transparent_1px)] bg-size-[38px_38px] [mask-image:radial-gradient(75%_75%_at_50%_50%,#000_10%,transparent_80%)]"
              aria-hidden="true"
            />
            {/* Halo central */}
            <div
              className="pointer-events-none absolute inset-0 bg-[image:radial-gradient(46%_58%_at_50%_46%,rgba(125,249,255,0.22)_0%,transparent_70%)] blur-[18px]"
              aria-hidden="true"
            />
            {/* Brillo diagonal */}
            <div
              className="pointer-events-none absolute inset-0 bg-[image:linear-gradient(115deg,rgba(255,255,255,0.09)_0%,transparent_42%,transparent_100%)]"
              aria-hidden="true"
            />

            <div className="relative flex w-full flex-col items-center gap-6 px-8">
              {/* El logo es azul marino: se pasa a blanco y se le da halo eléctrico. */}
              <Image
                src="/logo-full.svg"
                alt={siteConfig.name}
                width={4440}
                height={816}
                priority
                className="h-auto w-[74%] max-w-[540px] min-w-[200px] [filter:brightness(0)_invert(1)_drop-shadow(0_0_16px_rgba(125,249,255,0.5))_drop-shadow(0_10px_30px_rgba(11,75,58,0.55))]"
              />
              <span
                className="block h-px w-[46%] max-w-[320px] bg-[image:linear-gradient(90deg,transparent_0%,#7df9ff_35%,var(--color-brand-mint)_65%,transparent_100%)] shadow-[0_0_14px_rgba(125,249,255,0.55)]"
                aria-hidden="true"
              />
            </div>
          </div>
        </ElectricBorder>
      </div>
    </section>
  );
};
