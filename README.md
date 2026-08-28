# EnergyRex

Sitio web corporativo de **EnergyRex**, servicio de instalaciones eléctricas
certificadas SEC (Chile): proyectos residenciales, comerciales e industriales,
energía solar fotovoltaica y regularizaciones.

Construido con Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS v4.

> **Estado:** en desarrollo. Este README documenta únicamente lo que ya está
> implementado. La sección [Próximos pasos](#próximos-pasos) lista lo que falta,
> con su prioridad.

---

## Tabla de contenidos

1. [Stack tecnológico](#stack-tecnológico)
2. [Requisitos previos](#requisitos-previos)
3. [Puesta en marcha](#puesta-en-marcha)
4. [Scripts disponibles](#scripts-disponibles)
5. [Estructura del proyecto](#estructura-del-proyecto)
6. [Rutas](#rutas)
7. [Configuración de contenido](#configuración-de-contenido)
8. [Sistema de diseño](#sistema-de-diseño)
9. [Implementación paso a paso](#implementación-paso-a-paso)
10. [Convenciones del código](#convenciones-del-código)
11. [Recursos gráficos](#recursos-gráficos)
12. [Próximos pasos](#próximos-pasos)

---

## Stack tecnológico

| Herramienta | Rol |
|---|---|
| [Next.js](https://nextjs.org) | Framework, App Router, RSC |
| [React](https://react.dev) | Librería de UI |
| [TypeScript](https://www.typescriptlang.org) | Tipado estático (`strict: true`) |
| [Tailwind CSS](https://tailwindcss.com) | Estilos utilitarios vía PostCSS |
| [lucide-react](https://lucide.dev) | Íconos del footer y del formulario |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Helper `cn()` para componer clases |
| [ESLint](https://eslint.org) | Linting (flat config + `core-web-vitals`) |

Las versiones vigentes están en `package.json`.

El proyecto **no usa** librerías de componentes, de animación ni de estado:
todo el UI es propio.

Fuente: **Geist**, cargada con `next/font/google`.

---

## Requisitos previos

- **Node.js** 20 o superior (desarrollado sobre v24.16.0)
- **npm** 10 o superior (desarrollado sobre v11.13.0)

Verifica tu entorno:

```bash
node -v
npm -v
```

---

## Puesta en marcha

**1. Clonar el repositorio**

```bash
git clone <url-del-repositorio> energyrex
cd energyrex
```

**2. Instalar dependencias**

```bash
npm install
```

**3. Levantar el servidor de desarrollo**

```bash
npm run dev
```

**4. Abrir el sitio**

Visita [http://localhost:3000](http://localhost:3000). Los cambios en los
archivos se reflejan automáticamente sin reiniciar el servidor.

**5. Verificar la build de producción** (obligatorio antes de desplegar)

```bash
npx tsc --noEmit && npm run lint && npm run build
```

> El proyecto no requiere variables de entorno por ahora. Cuando se conecte el
> envío del formulario harán falta credenciales del proveedor de correo; se
> documentarán aquí junto con un archivo `.env.example`.

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo en `localhost:3000` |
| `npm run build` | Compila la aplicación para producción |
| `npm start` | Sirve la build de producción |
| `npm run lint` | Ejecuta ESLint sobre el proyecto |

---

## Estructura del proyecto

```
energyrex/
├── app/                                # App Router
│   ├── (general)/                      # Grupo de rutas con fondo compartido
│   │   ├── about/page.tsx              # /about      — Nosotros
│   │   ├── contact/page.tsx            # /contact    — Contacto
│   │   ├── privacidad/page.tsx         # /privacidad — Política de Privacidad
│   │   └── layout.tsx                  # Envuelve el grupo en <Backdrop>
│   ├── globals.css                     # Tema Tailwind v4 y paleta de marca
│   ├── layout.tsx                      # Root layout: fuente, metadata, Navbar y Footer
│   └── page.tsx                        # /           — Home
├── components/                         # Un directorio por componente + barrel
│   ├── about-us/                       # Sección de la página Nosotros
│   ├── active-link/                    # Client Component: enlace con estado activo
│   ├── backdrop/                       # Fondo de marca (degradado + rejilla)
│   ├── contact/                        # Ficha de contacto y formulario
│   ├── electric-border/                # Client Component: borde animado en canvas
│   ├── footer/                         # Pie de página global
│   ├── hero/                           # Portada de la home
│   ├── legal/                          # Contenido de la política de privacidad
│   └── navbar/                         # Barra de navegación
├── lib/
│   ├── site-config.ts                  # Datos públicos: contacto, legal, servicios
│   └── utils.ts                        # Helper cn()
├── design/                             # Archivos fuente de diseño (no se publican)
│   ├── README.md                       # Guía de recursos gráficos y marca
│   └── logo-full-source.jpg            # JPEG original del logo completo
├── public/                             # Assets servidos estáticamente
│   ├── logo.svg                        # Isotipo
│   ├── logo-full.svg                   # Logo completo
│   ├── icon.png                        # Favicon 512×512
│   └── apple-icon.png                  # Ícono iOS 180×180
├── AGENTS.md                           # Instrucciones para agentes de IA
├── components.json                     # Config de shadcn (ver nota abajo)
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

> **`components.json`** quedó como configuración de recuperación: shadcn/ui se
> desinstaló (ver [Etapa 7](#etapa-7--limpieza-de-dependencias)), pero el archivo
> permite reinstalarlo con `npx shadcn@latest init` conservando estilo y alias.

---

## Rutas

Todas las rutas se prerenderizan como contenido estático en el build.

| Ruta | Página | Título | Componentes |
|---|---|---|---|
| `/` | [`app/page.tsx`](app/page.tsx) | *(por defecto)* | `HeroElectric`, `Hero` |
| `/about` | [`app/(general)/about/page.tsx`](app/(general)/about/page.tsx) | Nosotros | `AboutUs` |
| `/contact` | [`app/(general)/contact/page.tsx`](app/(general)/contact/page.tsx) | Contacto | `InfoContact`, `FormContact` |
| `/privacidad` | [`app/(general)/privacidad/page.tsx`](app/(general)/privacidad/page.tsx) | Política de Privacidad | `PrivacyPolicy` |

El grupo `(general)` no aparece en la URL: solo envuelve sus páginas en
`<Backdrop as="main">`. La home aplica el mismo `Backdrop` por su cuenta.

---

## Configuración de contenido

[`lib/site-config.ts`](lib/site-config.ts) es la **fuente única de verdad** de
los datos públicos. Ningún componente escribe un teléfono, un correo ni un
enlace a mano: si un dato aparece en dos páginas, sale de aquí.

```ts
export const siteConfig = {
  name, tagline, responsable,
  certification: { short, full, organismo },
  legal:         { razonSocial, rut, politicaActualizada },
  contact:       { phone, phoneE164, whatsapp, email },
};

export const navItems       // menú del navbar
export const footerNavItems // navItems + Inicio
export const services       // servicios, con slug para anclas en /about
```

Detalles que conviene conocer antes de editarlo:

- **`certification` tiene dos redacciones a propósito.** `short` va en el badge
  del footer; `full` en la ficha formal de `/contact`. Ambas son correctas y
  **no deben unificarse**.
- **`phone` y `phoneE164` son el mismo número.** El primero es legible; el
  segundo alimenta `href="tel:"`, que no admite espacios.
- **`services[].slug`** hace doble trabajo: es el `id` de la tarjeta en `/about`
  y el ancla del enlace del footer (`/about#energia-solar`).
- **`legal.politicaActualizada`** es la fecha que muestra el pie de la política.
  Actualízala cada vez que cambie el texto legal.

---

## Sistema de diseño

[`app/globals.css`](app/globals.css) es deliberadamente corto: define solo lo
que el sitio usa. La paleta de marca vive en un bloque `@theme`, lo que
convierte cada color en una utilidad de Tailwind (`text-brand-mint`,
`bg-brand-navy`):

```css
@theme {
  --color-brand-ink: #131f3c;
  --color-brand-navy: #0c1a2b;
  --color-brand-navy-mid: #10243b;
  --color-brand-forest: #0b4b3a;
  --color-brand-green: #0e7a4f;
  --color-brand-mint: #35d08c;
  --color-brand-logo: #0a6647;  /* verde exacto del logo-full.svg */
  --color-brand-mist: #ecefee;
}
```

Los tokens restantes (`--background`, `--foreground`, `--border`, `--ring`)
existen porque los consume `@layer base`. **El sitio tiene un solo tema:** no
hay bloque `.dark` ni variante `dark:`.

El contraste visual lo da [`Backdrop`](components/backdrop/backdrop.tsx):
degradado navy → verde con una rejilla enmascarada encima. Navbar y footer usan
en cambio el degradado claro `brand-mist`, así la página queda encuadrada —
claro arriba, oscuro al medio, claro abajo.

---

## Implementación paso a paso

Las etapas siguen el orden real de desarrollo y corresponden al historial de
commits del repositorio.

### Etapa 1 — Base del proyecto

Proyecto inicializado con `create-next-app`, configurado con:

- **App Router** (directorio `app/`)
- **TypeScript** en modo estricto, con alias `@/*` apuntando a la raíz
- **Tailwind CSS v4** integrado vía `@tailwindcss/postcss` en `postcss.config.mjs`
- **ESLint 9** con flat config, extendiendo `core-web-vitals` y `typescript`

### Etapa 2 — Metadata SEO, íconos y páginas base

En [`app/layout.tsx`](app/layout.tsx) se configura el `metadata` del root
layout, con plantilla de título para que cada página hija solo declare su
propio nombre:

```tsx
export const metadata: Metadata = {
  title: {
    default: "EnergyRex | Instalaciones Eléctricas Certificadas SEC",
    template: "%s | EnergyRex",
  },
  ...
};
```

El layout se tipa con el helper global de Next.js 16:

```tsx
export default function RootLayout({ children }: LayoutProps<"/">) { ... }
```

`LayoutProps` y `PageProps` son helpers **globales** —no se importan— generados
al ejecutar `next dev`, `next build` o `next typegen`.

El `<html>` declara `lang="es"`; el `<body>` usa `min-h-full flex flex-col`
para que el footer quede pegado al fondo.

### Etapa 3 — Organización de recursos gráficos

Se separaron los archivos de origen de los que consume el sitio: **`design/`**
guarda el material fuente no regenerable; **`public/`** lo que el sitio sirve.
La documentación de marca vive en [`design/README.md`](design/README.md).

### Etapa 4 — Grupo de rutas `(general)`, navbar y `ActiveLink`

Los paréntesis crean un **grupo de rutas**: organiza archivos y comparte layout
**sin** aparecer en la URL.

[`components/navbar/navbar.tsx`](components/navbar/navbar.tsx) es un **Server
Component** y delega cada enlace en
[`ActiveLink`](components/active-link/active-link.tsx), que sí es Client
Component porque necesita `usePathname` para resaltar la sección actual.

### Etapa 5 — Home: `Backdrop`, `Hero` y `ElectricBorder`

Se implementó la portada con el fondo de marca y un borde animado dibujado en
`<canvas>` con React puro, sin librerías de animación.

### Etapa 6 — Contenido, `site-config` y footer

Se maquetaron *Nosotros* y *Contacto*, se creó el footer global y se centralizó
todo el contenido variable en [`lib/site-config.ts`](lib/site-config.ts).

### Etapa 7 — Limpieza de dependencias

Se desinstaló shadcn/ui junto a los paquetes que ningún archivo importaba
(`@base-ui/react`, `gsap`, `@gsap/react`, `@primer/octicons-react`,
`class-variance-authority`, `tw-animate-css`): **−239 paquetes, −88 MB**.

`globals.css` se recortó al retirar los tokens de shadcn sin consumidor y el
bloque `.dark`. Se eliminó también `Geist_Mono`, que se descargaba en cada
visita sin que ninguna clase `font-mono` la usara.

> Para reinstalar shadcn: `npx shadcn@latest init` (restaura los tokens en
> `globals.css`) y luego `npx shadcn@latest add <componente>`, que reinstala
> por su cuenta las dependencias npm que el componente necesite.

### Etapa 8 — Corrección de casing para deploy

`components/hero/Hero.tsx` estaba commiteado con mayúscula mientras el barrel
importaba `'./hero'`. En macOS el sistema de archivos no distingue mayúsculas y
el error era invisible; en el Linux del deploy habría fallado con
`Module not found`. Se corrigió con `git mv` en dos pasos.

### Etapa 9 — Cumplimiento de protección de datos

Se publicó `/privacidad` con las secciones que exige la **Ley N° 19.628**,
se agregó la identificación legal (razón social y RUT) al footer, y el
formulario de contacto quedó **visible pero deshabilitado** con alternativas de
contacto directo.

El motivo: la Server Action `enviarMensaje` nunca envió correo — solo imprimía
en el log del servidor. El formulario fallaba en silencio y el visitante creía
haber escrito. Ver el `TODO` en
[`form-contact.tsx`](components/contact/form-contact.tsx) para conectarlo.

---

## Convenciones del código

**Alias de importación.** `@/*` apunta a la raíz del proyecto
(`tsconfig.json` → `paths`). Usa `@/components/navbar` en vez de rutas
relativas largas.

**Nombres de archivo en `kebab-case` minúscula**, siempre. El componente
exportado va en `PascalCase`:

```
components/active-link/active-link.tsx  →  export const ActiveLink
```

Esto no es cosmético: macOS no distingue mayúsculas y Linux sí, así que un
archivo con casing inconsistente compila en local y rompe el deploy
(ver [Etapa 8](#etapa-8--corrección-de-casing-para-deploy)).

**Organización de componentes.** Un directorio por componente en `components/`,
con un `index.ts` que reexporta:

```ts
export * from './navbar';
```

**Server vs. Client Components.** Todo componente es de servidor por defecto.
Se marca con `'use client'` solo cuando necesita hooks, estado o eventos del
navegador. Hoy lo son `ActiveLink` (necesita `usePathname`) y `ElectricBorder`
(dibuja en `<canvas>`).

**Estilos.** Tailwind exclusivamente; **no se usan CSS Modules**. Cuando una
clase se repite dentro de un archivo, se extrae a una constante al inicio:

```tsx
const columnLink = "text-sm text-slate-600 transition-colors hover:text-brand-green";
```

Para componer clases condicionales existe `cn()` en
[`lib/utils.ts`](lib/utils.ts) (`clsx` + `tailwind-merge`).

**Contenido.** Ningún dato de la empresa se escribe a mano en un componente.
Teléfonos, correos, servicios y textos legales salen de
[`lib/site-config.ts`](lib/site-config.ts).

**Metadata.** El root layout define el `template` del título; cada página
exporta solo su propio `title` y `description`.

**Idioma.** La interfaz y los textos están en español (`lang="es"`,
`locale: "es_CL"`).

**Nota sobre Next.js 16.** Esta versión introduce cambios respecto a versiones
anteriores. La documentación oficial de la versión instalada está disponible
localmente en `node_modules/next/dist/docs/` — consúltala antes de escribir
código nuevo (ver [`AGENTS.md`](AGENTS.md)).

---

## Recursos gráficos

La guía completa de marca —paleta de colores, uso del logo, proporciones y
exportación de formatos— está en **[`design/README.md`](design/README.md)**.

Resumen de uso:

```tsx
import Image from "next/image";

<Image src="/logo-full.svg" alt="EnergyRex" width={200} height={37} priority />
```

La proporción del logo completo es **5.44:1**; el isotipo es cuadrado. Nunca
escales un PNG hacia arriba: vuelve siempre al SVG.

> `logo-full.svg` es azul marino casi negro, así que **desaparece sobre fondos
> oscuros**. Por eso navbar y footer usan fondo claro. Si se necesita el logo
> sobre el `Backdrop`, hace falta una variante con el texto en blanco.

---

## Próximos pasos

Ordenado por prioridad.

**Alta — el sitio funciona sin esto, pero se nota**
- [ ] Conectar el envío del formulario (Resend o Formspree) y revertir el estado
      deshabilitado siguiendo el `TODO` de `form-contact.tsx`
- [ ] `app/not-found.tsx` — hoy el 404 no lleva navbar ni footer
- [ ] `app/error.tsx` — sin error boundary, un fallo tumba la ruta completa
- [ ] `og-image.png` (1200×630): el negocio se mueve por WhatsApp y hoy el link
      se comparte sin miniatura

**Media — SEO**
- [ ] `app/sitemap.ts` y `app/robots.ts`
- [ ] `metadataBase` en el root layout, hoy ausente: sin él las URLs de Open
      Graph no se resuelven a absolutas
- [ ] Mover `icon.png` y `apple-icon.png` de `public/` a `app/`, donde Next 16
      los detecta por convención y les agrega hash de caché
- [ ] Unificar el idioma de las URLs: hoy conviven `/about` y `/contact` en
      inglés con `/privacidad` en español

**Baja — deuda técnica**
- [ ] El grupo `(general)` solo aplica `Backdrop`, y la home lo repite a mano.
      O `Backdrop` sube al root layout y el grupo desaparece, o la home entra
      al grupo
- [ ] Menú responsive para pantallas pequeñas
- [ ] Separar en `components/` los primitivos reutilizables (`backdrop`,
      `active-link`, `electric-border`) de las secciones de una sola página
      (`about-us`, `hero`, `legal`)

**Despliegue**
- [ ] Definir plataforma y documentar el proceso
- [ ] Configurar el dominio y el correo `@energyrex.cl`

---

## Licencia

Proyecto privado. Todos los derechos reservados.
