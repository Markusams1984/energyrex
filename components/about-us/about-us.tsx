import { PageHeader } from "@/components/page-header";
import { services } from "@/lib/site-config";
import { SECTION_CONTAINER, SURFACE_CARD } from "@/lib/styles";
import { cn } from "@/lib/utils";

export const AboutUs = () => {
  return (
    <section className="relative flex flex-1 items-center">
      <div className={cn(SECTION_CONTAINER, "relative py-24 lg:py-28")}>
        <PageHeader
          eyebrow="Quiénes somos"
          title="Sobre Nosotros"
          intro="Somos especialistas en ingeniería, ejecución y regularización de proyectos eléctricos, energía solar fotovoltaica y sistemas de seguridad. Desarrollamos soluciones integrales para el sector residencial, comercial e industrial, garantizando instalaciones seguras, eficientes y alineadas con la normativa técnica vigente."
        />

        <p className="mt-5 max-w-full text-lg leading-relaxed text-slate-300 lg:max-w-[60vw]">
          Bajo la dirección de{" "}
          <span className="font-semibold text-white">
            Matías Farías González
          </span>
          , instalador eléctrico certificado por la SEC, ofrecemos un servicio
          transparente y de alto estándar que abarca:
        </p>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map(({ slug, title, text }) => (
            <li
              key={slug}
              id={slug}
              className={cn(SURFACE_CARD, "scroll-mt-28")}
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
