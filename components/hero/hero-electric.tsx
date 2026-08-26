import Image from "next/image";
import ElectricBorder from "../electric-border/ElectricBorder";
import styles from "./hero.module.css";

export const HeroElectric = () => {
  return (
    <section className="relative flex flex-1 items-center font-sans">
      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col items-center px-6 py-24 sm:px-10 lg:py-28">
        <ElectricBorder
          className=""
          color="#7df9ff"
          speed={1}
          chaos={0.12}
          style={{ borderRadius: 16 }}
        >
          {/* Lienzo interior: la marca EnergyRex tratada en clave "eléctrica" */}
          <div
            className={`${styles.panel} relative flex h-64 w-[85vw] max-w-3xl items-center justify-center overflow-hidden rounded-[16px] sm:h-80 lg:h-96`}
          >
            <div className={`${styles.panelGrid} pointer-events-none absolute inset-0`} aria-hidden="true" />
            <div className={`${styles.panelGlow} pointer-events-none absolute inset-0`} aria-hidden="true" />
            <div className={`${styles.sheen} pointer-events-none absolute inset-0`} aria-hidden="true" />

            <div className="relative flex w-full flex-col items-center gap-6 px-8">
              <Image
                src="/logo-full.svg"
                alt="EnergyRex"
                width={4440}
                height={816}
                priority
                className={`${styles.logo} h-auto w-[74%] max-w-[540px] min-w-[200px]`}
              />
              <span className={`${styles.accent} block h-px w-[46%] max-w-[320px]`} aria-hidden="true" />
            </div>
          </div>
        </ElectricBorder>
      </div>
    </section>
  );
};
