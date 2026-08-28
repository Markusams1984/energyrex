/**
 * Genera `app/opengraph-image.png` (1200×630), la miniatura que se ve al
 * compartir el link por WhatsApp o redes. Next la detecta por convención de
 * nombre: no hay que declararla en `metadata`.
 *
 * Re-ejecutar (desde la raíz del repo):
 *
 *     node design/generate-og-image.mjs
 *
 * No instala nada. Usa `next/og` — el renderizador de imágenes que ya viene
 * dentro del paquete `next`, con su Satori + resvg y su copia de la fuente
 * Geist (la misma del sitio). Cero dependencias nuevas en package.json.
 *
 * Cuándo volver a correrlo: si cambia `public/logo-full.svg`, si cambian los
 * colores de marca de `app/globals.css`, o si cambia el degradado de
 * `components/backdrop/backdrop.tsx`. Los valores están duplicados aquí abajo
 * a propósito — este script corre fuera de Next y no puede leer el CSS ni los
 * tokens de Tailwind, así que si tocas uno de esos archivos, actualiza este.
 */
import { createElement as h } from "react";
import { readFile, writeFile } from "node:fs/promises";
// La extensión es obligatoria: `next` no declara `exports` en su package.json,
// así que ESM resuelve el archivo literal, no el especificador `next/og`.
import { ImageResponse } from "next/og.js";

const ROOT = new URL("..", import.meta.url);
const rel = (p) => new URL(p, ROOT);

const WIDTH = 1200;
const HEIGHT = 630;

/** Tokens de marca. Espejo de `app/globals.css`. */
const BRAND = {
  navy: "#0c1a2b",
  navyMid: "#10243b",
  forest: "#0b4b3a",
};

/** Espejo de `BRAND_GRADIENT` en `components/backdrop/backdrop.tsx`. */
const LINEAR_GRADIENT = `linear-gradient(105deg, ${BRAND.navy} 0%, ${BRAND.navyMid} 45%, ${BRAND.forest} 100%)`;
const RADIAL_GLOW =
  "radial-gradient(60% 90% at 88% 8%, rgba(16,138,96,0.55) 0%, transparent 60%)";

const TAGLINE = "Instalaciones eléctricas certificadas SEC";

/**
 * El logo maestro es azul marino sobre verde, pensado para fondo claro; sobre
 * el degradado oscuro desaparecería. Lo pasamos a blanco sólido en vez de
 * mantener el verde de la S: a tamaño de miniatura, un logo monocromo se lee
 * y uno bicolor se ensucia. Ancho 420px, alto derivado de la proporción real
 * del viewBox (4440×816) para no deformarlo.
 */
const LOGO_WIDTH = 420;
const LOGO_HEIGHT = Math.round((LOGO_WIDTH * 816) / 4440);

const logoSvg = (await readFile(rel("public/logo-full.svg"), "utf8"))
  .replace(/fill="#131F3C"/gi, 'fill="#ffffff"')
  .replace(/fill="#0A6647"/gi, 'fill="#ffffff"');

const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

/** Geist real, la del sitio, tal como la trae el propio paquete `next`. */
const geist = await readFile(
  rel("node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf"),
);

const image = h(
  "div",
  {
    style: {
      width: WIDTH,
      height: HEIGHT,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      // Sube el bloque sobre el centro geométrico para dejar el logo en el
      // tercio superior-medio, sin abrir tanto hueco abajo que se desbalancee.
      paddingBottom: 24,
      backgroundColor: BRAND.navy,
      backgroundImage: `${RADIAL_GLOW}, ${LINEAR_GRADIENT}`,
      fontFamily: "Geist",
    },
  },
  h("img", {
    src: logoDataUri,
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
    style: { width: LOGO_WIDTH, height: LOGO_HEIGHT },
  }),
  h(
    "div",
    {
      style: {
        marginTop: 56,
        fontSize: 46,
        letterSpacing: 0.8,
        color: "#ffffff",
        // Una sola línea: si algún día el texto crece, se achica la fuente,
        // no se parte en dos.
        whiteSpace: "nowrap",
      },
    },
    TAGLINE,
  ),
);

const response = new ImageResponse(image, {
  width: WIDTH,
  height: HEIGHT,
  fonts: [{ name: "Geist", data: geist, weight: 400, style: "normal" }],
});

const png = Buffer.from(await response.arrayBuffer());
const out = rel("app/opengraph-image.png");
await writeFile(out, png);

console.log(
  `app/opengraph-image.png — ${WIDTH}×${HEIGHT}, ${(png.length / 1024).toFixed(1)} KB`,
);
