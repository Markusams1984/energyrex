/**
 * Clases compartidas entre componentes. Solo entran aquí los strings que
 * dos o más archivos deben mantener sincronizados; una utilidad repetida
 * dentro de un mismo archivo se extrae a una constante local.
 */

/**
 * Franja clara que encuadra la página: navbar arriba, footer abajo.
 * Si cambia, debe cambiar en ambos a la vez.
 */
export const LIGHT_BAND =
  "w-full bg-gradient-to-r from-brand-mist to-brand-mist-deep";

/**
 * Tramo invariante del contenedor de sección: centrado, ancho máximo y padding
 * horizontal. El padding **vertical** no entra aquí a propósito — cada sección
 * tiene el suyo y son distintos entre sí; unificarlos cambiaría el render.
 *
 * No está extraído para ahorrar repetición, sino porque aquí ya se coló un bug:
 * de las diez copias escritas a mano, una tenía `max-w-1400px` sin corchetes.
 * Tailwind no genera ninguna regla para esa clase, así que /nosotros quedó sin
 * ancho máximo y se estiraba a todo el viewport, sin que nada fallara. Con una
 * sola definición ese error ya no puede repetirse.
 */
export const SECTION_CONTAINER = "mx-auto w-full max-w-[1400px] px-6 sm:px-10";

/**
 * Superficie de tarjeta: el recuadro translúcido de las tarjetas de servicios,
 * la ficha de contacto y los artículos de la política de privacidad. Las tres
 * deben verse iguales — si divergen, las tres páginas dejan de parecer el mismo
 * sitio.
 */
export const SURFACE_CARD =
  "rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm";

/**
 * Acción principal: menta sólida sobre navy. Nació en el botón del formulario
 * de contacto y ahora lo comparten también las páginas de error, así que vive
 * acá. Es solo el núcleo visual — el ancho, el `disabled:` y demás variantes
 * las agrega cada uso con `cn`.
 */
export const CTA_PRIMARY =
  "inline-flex items-center justify-center rounded-lg bg-brand-mint px-6 py-3 font-semibold text-brand-navy transition-colors hover:bg-white";

/**
 * Acción secundaria: el mismo cuerpo que `CTA_PRIMARY` pero delineado, para
 * acompañarlo sin competirle. Usa el mismo tratamiento de borde y fondo que
 * las tarjetas de `/nosotros` y `/contacto`.
 */
export const CTA_SECONDARY =
  "inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:border-brand-mint hover:text-brand-mint";
