/**
 * Fuente única de verdad para los datos públicos de EnergyRex.
 * La consumen el navbar, el footer, la página "Sobre nosotros" y la política
 * de privacidad, para no duplicar teléfonos, correos ni enlaces.
 */
export const siteConfig = {
  name: "EnergyRex",
  tagline:
    "Ingeniería, ejecución y certificación de instalaciones eléctricas y fotovoltaicas.",
  responsable: "Matías Farías González",
  /**
   * Acreditación oficial. Dos redacciones distintas y ambas correctas:
   * `short` para el badge del footer, `full` para la ficha formal.
   */
  certification: {
    /** Badge del footer. */
    short: "Certificado por la SEC",
    /** Acreditación formal (ficha de contacto). */
    full: "Instalador Eléctrico Certificado SEC",
    organismo: "Superintendencia de Electricidad y Combustibles",
  },
  /** Identificación legal exigible a un sitio comercial chileno. */
  legal: {
    razonSocial: "EnergyRex SpA",
    rut: "78.470.849-7",
    /** Fecha de la última revisión de la política de privacidad. */
    politicaActualizada: "27 de agosto de 2026",
  },
  contact: {
    phone: "+56 9 3003 7134",
    /** Mismo número en formato E.164 para el enlace tel:. */
    phoneE164: "+56930037134",
    whatsapp: "https://wa.me/56930037134",
    email: "mfarias@energyrex.cl",
  },
};

/** Enlaces del menú principal (el logo cubre el enlace a Inicio). */
export const navItems = [
  { path: "/about", text: "Nosotros" },
  { path: "/contact", text: "Contacto" },
];

/**
 * El footer sí necesita el enlace explícito a Inicio. La política de
 * privacidad no va aquí: vive en el bloque legal de la barra inferior.
 */
export const footerNavItems = [{ path: "/", text: "Inicio" }, ...navItems];

/**
 * Servicios de la empresa. El `slug` es el ancla dentro de /about, así el
 * footer puede enlazar cada servicio de forma individual (SEO local).
 */
export const services = [
  {
    slug: "proyectos-electricos",
    title: "Ingeniería y Proyectos Eléctricos",
    text: "Elaboración de planos, memorias técnicas, presupuestos, detección de fallas y montajes completos en baja tensión.",
  },
  {
    slug: "energia-solar",
    title: "Energía Solar Fotovoltaica",
    text: "Diseño, instalación y mantención de sistemas On-Grid, Off-Grid e híbridos, aumentos de capacidad e informes de factibilidad energética.",
  },
  {
    slug: "seguridad-automatizacion",
    title: "Seguridad y Automatización",
    text: "Instalación de cámaras de seguridad (CCTV), cercos eléctricos y sistemas de citofonía.",
  },
  {
    slug: "certificaciones",
    title: "Certificaciones y Regularizaciones",
    text: "Tramitación oficial de declaraciones SEC.",
  },
];
