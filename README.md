# EnergyRex

Sitio web corporativo de **EnergyRex**, servicio de instalaciones eléctricas
certificadas SEC (Chile): proyectos residenciales, comerciales e industriales,
energía solar fotovoltaica y regularizaciones.

Construido con Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS v4.

> **Estado:** en desarrollo, sin desplegar. Este README documenta lo que ya está
> implementado; lo que falta está en [Próximos pasos](#próximos-pasos).

---

## Tabla de contenidos

1. [Stack](#stack)
2. [Puesta en marcha](#puesta-en-marcha)
3. [Scripts](#scripts)
4. [Estructura](#estructura)
5. [Rutas](#rutas)
6. [Contenido](#contenido)
7. [Sistema de diseño](#sistema-de-diseño)
8. [Convenciones](#convenciones)
9. [Recursos gráficos](#recursos-gráficos)
10. [Próximos pasos](#próximos-pasos)

---

## Stack

| Herramienta | Rol |
|---|---|
| [Next.js](https://nextjs.org) | Framework, App Router, RSC |
| [React](https://react.dev) | Librería de UI |
| [TypeScript](https://www.typescriptlang.org) | Tipado estático (`strict: true`) |
| [Tailwind CSS](https://tailwindcss.com) | Estilos utilitarios vía PostCSS |
| [lucide-react](https://lucide.dev) | Íconos del footer |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Helper `cn()` para componer clases |
| [ESLint](https://eslint.org) | Linting (flat config + `core-web-vitals`) |

Las versiones vigentes están en `package.json`. El proyecto **no usa** librerías
de componentes, animación ni estado: todo el UI es propio. La fuente es
**Geist**, cargada con `next/font/google`.

---

## Puesta en marcha

Requiere **Node.js 20+** y **npm 10+**.

```bash
git clone <url-del-repositorio> energyrex
cd energyrex
npm install
npm run dev
```

El sitio queda en [http://localhost:3000](http://localhost:3000) con recarga
automática.

Antes de desplegar, la verificación completa debe pasar:

```bash
npx tsc --noEmit && npm run lint && npm run build
```

> El proyecto no requiere variables de entorno por ahora. Cuando se conecte el
> envío del formulario harán falta credenciales del proveedor de correo; se
> documentarán aquí junto con un `.env.example`.

---

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm start` | Sirve la build de producción |
| `npm run lint` | Ejecuta ESLint |

---

## Estructura

```
energyrex/
├── app/                          # App Router
│   ├── page.tsx                  # /           — Home
│   ├── nosotros/page.tsx         # /nosotros
│   ├── contacto/page.tsx         # /contacto
│   ├── privacidad/page.tsx       # /privacidad
│   ├── layout.tsx                # Root layout: fuente, metadata, chrome
│   ├── globals.css               # Tema Tailwind v4 y paleta de marca
│   ├── error.tsx                 # Error de renderizado (Client Component)
│   ├── not-found.tsx             # Página 404
│   ├── robots.ts                 # /robots.txt
│   ├── sitemap.ts                # /sitemap.xml
│   ├── icon.png                  # Favicon 512×512      ┐ Next los detecta
│   ├── apple-icon.png            # Ícono iOS 180×180    │ por convención de
│   └── opengraph-image.png       # Miniatura 1200×630   ┘ nombre de archivo
├── components/                   # Un directorio por componente + barrel
│   ├── about-us/                 # Sección de /nosotros
│   ├── active-link/              # Client Component: enlace con estado activo
│   ├── backdrop/                 # Fondo de marca (degradado + rejilla)
│   ├── contact/                  # Ficha de contacto y formulario
│   ├── electric-border/          # Client Component: borde animado en canvas
│   ├── footer/                   # Pie de página global
│   ├── hero/                     # Portada de la home
│   ├── legal/                    # Contenido de la política de privacidad
│   ├── navbar/                   # Barra de navegación
│   └── page-header/              # Cabecera compartida de páginas interiores
├── lib/
│   ├── site-config.ts            # Datos públicos: contacto, legal, servicios
│   ├── styles.ts                 # Clases compartidas entre componentes
│   └── utils.ts                  # Helper cn()
├── design/                       # Fuentes de diseño (no se publican)
│   ├── README.md                 # Guía de marca y recursos gráficos
│   ├── generate-og-image.mjs     # Genera app/opengraph-image.png
│   ├── logo.svg                  # Isotipo: fuente del favicon
│   └── logo-full-source.jpg      # JPEG original del logo completo
├── public/                       # Assets servidos por URL
│   └── logo-full.svg             # Logo completo
├── AGENTS.md                     # Instrucciones para agentes de IA
├── components.json               # Config de shadcn (ver nota abajo)
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

> **`components.json`** es configuración de recuperación: shadcn/ui se
> desinstaló, pero el archivo permite reinstalarlo con `npx shadcn@latest init`
> conservando estilo y alias.

---

## Rutas

Todas se prerenderizan como contenido estático en el build.

| Ruta | Página | Título | Componentes |
|---|---|---|---|
| `/` | [`app/page.tsx`](app/page.tsx) | *(por defecto)* | `HeroElectric`, `Hero` |
| `/nosotros` | [`app/nosotros/page.tsx`](app/nosotros/page.tsx) | Nosotros | `AboutUs` |
| `/contacto` | [`app/contacto/page.tsx`](app/contacto/page.tsx) | Contacto | `InfoContact`, `FormContact` |
| `/privacidad` | [`app/privacidad/page.tsx`](app/privacidad/page.tsx) | Política de Privacidad | `PrivacyPolicy` |

Las URLs están en español, igual que el contenido. No hay grupos de rutas: el
layout raíz envuelve `children` en `<Backdrop as="main">`, así que **toda**
página hereda el fondo de marca sin declararlo. Navbar y footer quedan fuera del
`Backdrop` y conservan su fondo claro.

`error.tsx` y `not-found.tsx` viven en la raíz de `app/` y heredan ese mismo
layout, así que las pantallas de error llevan navbar, fondo y footer.

---

## Contenido

[`lib/site-config.ts`](lib/site-config.ts) es la **fuente única de verdad** de
los datos públicos. Ningún componente escribe un teléfono, un correo ni un
enlace a mano.

```ts
export const siteConfig = {
  name, url, tagline, responsable,
  certification: { short, full, organismo },
  legal:         { razonSocial, rut, politicaActualizada },
  contact:       { phone, phoneE164, whatsapp, email },
};

export const navItems       // menú del navbar
export const footerNavItems // navItems + Inicio
export const services       // servicios, con slug para anclas en /nosotros
```

Detalles que conviene conocer antes de editarlo:

- **El dominio se escribe una sola vez** (constante `DOMAIN`). De ahí salen
  `url` y el correo de contacto, para que una migración no deje ninguno atrás.
- **`certification` tiene dos redacciones a propósito.** `short` va en el badge
  del footer; `full` en la ficha formal de `/contacto`. **No unificarlas.**
- **`phone` y `phoneE164` son el mismo número.** El primero es legible; el
  segundo alimenta `href="tel:"`, que no admite espacios.
- **`services[].slug`** hace doble trabajo: es el `id` de la tarjeta en
  `/nosotros` y el ancla del enlace del footer (`/nosotros#energia-solar`).
- **`legal.politicaActualizada`** es una fecha ISO con dos consumidores: el pie
  de la política —que la formatea en español— y el `lastModified` de
  `/privacidad` en el sitemap. Actualízala al revisar el texto legal.

---

## Sistema de diseño

[`app/globals.css`](app/globals.css) define solo lo que el sitio usa. La paleta
vive en un bloque `@theme`, lo que convierte cada color en utilidad de Tailwind
(`text-brand-mint`, `bg-brand-navy`):

```css
@theme {
  --color-brand-ink: #131f3c;
  --color-brand-navy: #0c1a2b;
  --color-brand-navy-mid: #10243b;
  --color-brand-forest: #0b4b3a;
  --color-brand-green: #0e7a4f;
  --color-brand-mint: #35d08c;
  --color-brand-logo: #0a6647;      /* verde exacto del logo-full.svg */
  --color-brand-mist: #ecefee;
  --color-brand-mist-deep: #dde7e3;
}
```

Los tokens restantes (`--background`, `--foreground`, `--border`, `--ring`)
existen porque los consume `@layer base`. **El sitio tiene un solo tema:** no hay
bloque `.dark` ni variante `dark:`.

El contraste lo da [`Backdrop`](components/backdrop/backdrop.tsx): degradado
navy → verde con una rejilla enmascarada. Navbar y footer usan en cambio el
degradado claro `brand-mist`, así la página queda encuadrada: claro arriba,
oscuro al medio, claro abajo.

**Los dos verdes no son intercambiables.** `brand-logo` es oscuro y solo se lee
sobre fondo claro (navbar, footer). Sobre el `Backdrop` va `brand-mint`. El
criterio lo decide el fondo, no el componente.

[`lib/styles.ts`](lib/styles.ts) guarda las clases que dos o más archivos deben
mantener idénticas: `SECTION_CONTAINER`, `SURFACE_CARD`, `LIGHT_BAND`,
`CTA_PRIMARY` y `CTA_SECONDARY`. Una utilidad repetida dentro de un mismo
archivo se extrae a una constante local, no aquí.

---

## Convenciones

**Alias de importación.** `@/*` apunta a la raíz (`tsconfig.json` → `paths`).

**Nombres de archivo en `kebab-case` minúscula**, siempre. El componente
exportado va en `PascalCase`:

```
components/active-link/active-link.tsx  →  export const ActiveLink
```

No es cosmético: macOS no distingue mayúsculas y Linux sí, así que un archivo
con casing inconsistente compila en local y rompe el deploy.

**Organización.** Un directorio por componente en `components/`, con un
`index.ts` que reexporta:

```ts
export * from './navbar';
```

**Server vs. Client Components.** Todo componente es de servidor por defecto. Se
marca con `'use client'` solo cuando necesita hooks, estado o eventos del
navegador. Hoy son tres: `ActiveLink` (usa `usePathname`), `ElectricBorder`
(dibuja en `<canvas>`) y `app/error.tsx` (los error boundaries de React lo
exigen).

**Estilos.** Tailwind exclusivamente; no se usan CSS Modules. Para componer
clases condicionales existe `cn()` en [`lib/utils.ts`](lib/utils.ts).

**Contenido.** Ningún dato de la empresa se escribe a mano en un componente. La
excepción son las frases de marketing donde el nombre es parte del texto —el
título SEO del layout, por ejemplo—: partirlas para inyectar una variable se
lee peor y no aporta.

**Metadata.** El root layout define el `template` del título y el bloque
`openGraph`; cada página exporta solo su `title` y `description`. Cuidado: si
una página declara su propio `openGraph`, **reemplaza el del layout entero** —no
se mezclan campo por campo.

**Idioma.** Interfaz y textos en español (`lang="es"`, `locale: "es_CL"`).

**Next.js 16.** Esta versión trae cambios respecto a versiones anteriores. La
documentación de la versión instalada está en `node_modules/next/dist/docs/`;
consúltala antes de escribir código nuevo (ver [`AGENTS.md`](AGENTS.md)).

---

## Recursos gráficos

La guía completa de marca —paleta, uso del logo, proporciones y exportación— está
en **[`design/README.md`](design/README.md)**.

```tsx
import Image from "next/image";

<Image src="/logo-full.svg" alt="EnergyRex" width={200} height={37} priority />
```

La proporción del logo completo es **5.44:1**; el isotipo es cuadrado. Nunca
escales un PNG hacia arriba: vuelve siempre al SVG.

> `logo-full.svg` es azul marino casi negro y **desaparece sobre fondos
> oscuros**. Por eso navbar y footer usan fondo claro. Donde hace falta sobre
> oscuro se invierte a blanco: el hero con un filtro CSS, la imagen de Open
> Graph dentro de `design/generate-og-image.mjs`.

---

## Próximos pasos

**Alta**
- [ ] Conectar el envío del formulario (Resend o Formspree) y revertir el estado
      deshabilitado siguiendo el `TODO` de
      [`form-contact.tsx`](components/contact/form-contact.tsx). El `TODO` lista
      también las protecciones que faltan: validación en servidor, límite por IP
      y honeypot. Hoy la Server Action es un endpoint público que solo escribe
      en el log, y el `disabled` del formulario no la protege
- [ ] Menú responsive para pantallas pequeñas

**Media**
- [ ] `app/global-error.tsx` con marca. Cuando un Server Component falla en la
      carga inicial, Next devuelve su propio documento de error sin estilos
- [ ] Separar en `components/` los primitivos reutilizables (`backdrop`,
      `active-link`, `electric-border`, `page-header`) de las secciones de una
      sola página (`about-us`, `hero`, `legal`)

**Despliegue**
- [ ] Definir plataforma y documentar el proceso
- [ ] Configurar el dominio y el correo `@energyrex.cl`

---

## Licencia

Proyecto privado. Todos los derechos reservados.
