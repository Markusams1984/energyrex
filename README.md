# EnergyRex

Sitio web corporativo de **EnergyRex**, servicio de instalaciones eléctricas
certificadas SEC (Chile): proyectos residenciales, comerciales e industriales,
y certificación TE1, TE2 y TE3.

Construido con Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS v4.

> **Estado:** en desarrollo. Este README documenta únicamente lo que ya está
> implementado. La sección [Próximos pasos](#próximos-pasos) queda abierta para
> ir sumando etapas a medida que avance el proyecto.

---

## Tabla de contenidos

1. [Stack tecnológico](#stack-tecnológico)
2. [Requisitos previos](#requisitos-previos)
3. [Puesta en marcha](#puesta-en-marcha)
4. [Scripts disponibles](#scripts-disponibles)
5. [Estructura del proyecto](#estructura-del-proyecto)
6. [Implementación paso a paso](#implementación-paso-a-paso)
7. [Convenciones del código](#convenciones-del-código)
8. [Recursos gráficos](#recursos-gráficos)
9. [Próximos pasos](#próximos-pasos)

---

## Stack tecnológico

| Herramienta | Versión | Rol |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.3.1 | Framework, App Router, SSR |
| [React](https://react.dev) | 19.2.8 | Librería de UI |
| [TypeScript](https://www.typescriptlang.org) | ^5 | Tipado estático (`strict: true`) |
| [Tailwind CSS](https://tailwindcss.com) | ^4 | Estilos utilitarios vía PostCSS |
| [@primer/octicons-react](https://primer.style/octicons) | ^19.33.0 | Íconos de la navegación |
| [ESLint](https://eslint.org) | ^9 | Linting (flat config + `core-web-vitals`) |

Fuentes: **Geist** y **Geist Mono**, cargadas con `next/font/google`.

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

**5. Verificar la build de producción** (opcional, antes de desplegar)

```bash
npm run build
npm start
```

> El proyecto no requiere variables de entorno por ahora. Cuando se agreguen,
> se documentarán en esta sección junto con un archivo `.env.example`.

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
├── app/                          # App Router
│   ├── (general)/                # Grupo de rutas con navegación compartida
│   │   ├── about/page.tsx        # /about   — Nosotros
│   │   ├── contact/page.tsx      # /contact — Contacto
│   │   ├── pricing/page.tsx      # /pricing — Precios
│   │   └── layout.tsx            # Layout con Navbar
│   ├── globals.css               # Estilos globales + tema Tailwind
│   ├── layout.tsx                # Root layout: fuentes y metadata SEO
│   └── page.tsx                  # /        — Home
├── components/
│   ├── active-link/
│   │   ├── ActiveLink.tsx        # Client Component: enlace con estado activo
│   │   └── ActiveLink.module.css # Estilos del enlace (CSS Modules)
│   └── navbar/
│       ├── Navbar.tsx            # Barra de navegación
│       └── index.ts              # Barrel export del módulo
├── design/                       # Archivos fuente de diseño (no se publican)
│   ├── README.md                 # Guía de recursos gráficos y marca
│   └── logo-full-source.jpg      # JPEG original del logo completo
├── public/                       # Assets servidos estáticamente
│   ├── logo.svg                  # Isotipo
│   ├── logo-full.svg             # Logo completo
│   ├── icon.png                  # Favicon 512×512
│   └── apple-icon.png            # Ícono iOS 180×180
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

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

En [`app/globals.css`](app/globals.css) se define el tema con la sintaxis de
Tailwind v4: `@import "tailwindcss"` y un bloque `@theme inline` que expone las
variables de color y de fuente como tokens utilizables desde las clases.

```css
@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

Incluye además soporte de modo oscuro por `prefers-color-scheme`.

---

### Etapa 2 — Metadata SEO, íconos y páginas base

**2.1 Metadata global.** En [`app/layout.tsx`](app/layout.tsx) se configura el
objeto `metadata` del root layout, con plantilla de título para que cada página
hija solo declare su propio nombre:

```tsx
export const metadata: Metadata = {
  title: {
    default: "EnergyRex | Instalaciones Eléctricas Certificadas SEC",
    template: "%s | EnergyRex",
  },
  description: "Instalador eléctrico certificado SEC...",
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  openGraph: { siteName: "EnergyRex", locale: "es_CL", type: "website" },
};
```

El `<html>` declara `lang="es"` y aplica las variables de fuente Geist junto a
las clases de layout base (`h-full`, `antialiased`), mientras que el `<body>`
usa `min-h-full flex flex-col` para permitir un pie de página pegado al fondo
más adelante.

El layout se tipa con el helper global de Next.js 16:

```tsx
export default function RootLayout({ children }: LayoutProps<"/">) { ... }
```

`LayoutProps` y `PageProps` son helpers **globales** —no se importan— generados
al ejecutar `next dev`, `next build` o `next typegen`.

**2.2 Íconos.** Se reemplazó el `favicon.ico` de la plantilla por
`public/icon.png` (512×512, transparente) y `public/apple-icon.png` (180×180,
opaco, requerido por iOS), declarados en el campo `icons` de la metadata.

**2.3 Páginas.** Se crearon tres rutas, cada una con su propia metadata:

| Ruta | Archivo | Título |
|---|---|---|
| `/about` | [`app/(general)/about/page.tsx`](app/(general)/about/page.tsx) | Nosotros |
| `/contact` | [`app/(general)/contact/page.tsx`](app/(general)/contact/page.tsx) | Contacto |
| `/pricing` | [`app/(general)/pricing/page.tsx`](app/(general)/pricing/page.tsx) | Precios y Presupuestos |

Cada página exporta su `metadata` con título y descripción propios; el título
se compone automáticamente con el `template` del root layout.

```tsx
export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce a EnergyRex...",
};
```

> El contenido de estas páginas es todavía un marcador de posición
> (`<span className="text-7xl">`). La maquetación real es trabajo pendiente.

---

### Etapa 3 — Organización de recursos gráficos

Se separaron los archivos de origen de los que consume el sitio:

- **`design/`** guarda el material fuente que no se puede regenerar
  (`logo-full-source.jpg`). Next.js no publica esta carpeta.
- **`public/`** guarda lo que el sitio sirve: `logo.svg` (isotipo),
  `logo-full.svg` (logo completo vectorizado), `icon.png` y `apple-icon.png`.

Se eliminaron los SVG de ejemplo de `create-next-app` (`next.svg`,
`vercel.svg`, `file.svg`, `globe.svg`, `window.svg`).

La documentación de marca —paleta de colores, proporciones del logo, cómo
exportar PNG desde SVG— vive en [`design/README.md`](design/README.md).

---

### Etapa 4 — Grupo de rutas `(general)` y barra de navegación

**4.1 Grupo de rutas.** Las tres páginas se movieron dentro de `app/(general)/`.
Los paréntesis crean un **grupo de rutas**: organiza archivos y permite
compartir un layout **sin** aparecer en la URL. `/about` sigue siendo `/about`.

[`app/(general)/layout.tsx`](app/(general)/layout.tsx) monta la `Navbar` sobre
todas las páginas del grupo:

```tsx
export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">EnergyRex</span>
        {children}
      </main>
    </>
  );
}
```

**4.2 Navbar.** [`components/navbar/Navbar.tsx`](components/navbar/Navbar.tsx)
es un **Server Component**: no lleva estado ni eventos. Define los enlaces en un
arreglo y los recorre, dejando el enlace de Inicio fijo a la izquierda y el
resto empujado a la derecha con un separador flexible.

```tsx
const navItems = [
  { path: '/about', text: 'Nosotros', icon: <AccessibilityInsetIcon className="mr-2" /> },
  { path: '/contact', text: 'Contacto' },
  { path: '/pricing', text: 'Precios' },
]
```

El campo `icon` es opcional: hoy solo lo usa el enlace *Nosotros*.

**4.3 Íconos.** Se agregó `@primer/octicons-react` como dependencia; se usan
`HomeIcon` y `AccessibilityInsetIcon`.

---

### Etapa 5 — Componente `ActiveLink` y CSS Modules

Para resaltar la sección en la que está el usuario se creó
[`components/active-link/ActiveLink.tsx`](components/active-link/ActiveLink.tsx),
un **Client Component** (`'use client'`) porque necesita el hook `usePathname`:

```tsx
'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import style from './ActiveLink.module.css';

export const ActiveLink = ({ path, text, icon }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${style.link} ${(pathName === path) && style['active-link']}`}
      href={path}
    >
      {icon}
      {text}
    </Link>
  )
}
```

Los estilos viven en
[`ActiveLink.module.css`](components/active-link/ActiveLink.module.css) y
combinan CSS Modules con utilidades de Tailwind mediante `@apply`. En Tailwind
v4 esto exige declarar `@reference` al inicio del archivo para que el módulo
conozca el tema del proyecto:

```css
@reference "../../app/globals.css";

.link {
  @apply flex items-center hover:underline hover:text-blue-400 mr-2 transition-all;
}

.active-link {
  @apply text-blue-500;
}
```

La `Navbar` delega en `ActiveLink` cada elemento del arreglo, propagando las
props con spread:

```tsx
{navItems.map(navItem => (
  <ActiveLink key={navItem.path} {...navItem} />
))}
```

Finalmente, [`components/navbar/index.ts`](components/navbar/index.ts) actúa
como *barrel export*, separando explícitamente los componentes de servidor de
los de cliente:

```ts
export * from './Navbar';

//Client components
export { ActiveLink } from '../active-link/ActiveLink';
```

---

## Convenciones del código

**Alias de importación.** `@/*` apunta a la raíz del proyecto
(`tsconfig.json` → `paths`). Usa `@/components/navbar` en vez de rutas
relativas largas.

**Server vs. Client Components.** Todo componente es de servidor por defecto.
Se marca con `'use client'` solo cuando necesita hooks, estado o eventos del
navegador —como `ActiveLink` con `usePathname`—. Mantener la frontera lo más
baja posible en el árbol reduce el JavaScript enviado al cliente.

**Organización de componentes.** Un directorio por componente en
`components/`, en `kebab-case`, con el archivo `.tsx` en `PascalCase` y su
`.module.css` al lado. Los módulos con varios archivos exponen un `index.ts`.

**Estilos.** Tailwind para el grueso de la maquetación; CSS Modules cuando una
clase se reutiliza con lógica de estado. Todo módulo CSS que use `@apply` debe
declarar `@reference "../../app/globals.css"`.

**Metadata.** El root layout define el `template` del título; cada página
exporta solo su propio `title` y `description`.

**Idioma.** La interfaz y los textos del sitio están en español (`lang="es"`,
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

---

## Próximos pasos

Estado del trabajo pendiente. Esta sección se irá actualizando a medida que se
completen las etapas.

**Contenido y maquetación**
- [ ] Diseñar la página de inicio (`app/page.tsx`) con propuesta de valor,
      servicios y llamado a la acción
- [ ] Desarrollar el contenido real de *Nosotros*, *Contacto* y *Precios*
- [ ] Incorporar el logo (`logo-full.svg`) en la barra de navegación
- [ ] Crear el pie de página (el `<body>` ya está preparado con `flex flex-col`)

**Estructura**
- [ ] Decidir si la home entra al grupo `(general)` para heredar la `Navbar`,
      o si mantiene una cabecera propia
- [ ] Menú responsive para pantallas pequeñas

**Estilos**
- [ ] Reemplazar la paleta por defecto de `globals.css` por los colores de marca
      documentados en `design/README.md`
- [ ] Retirar el `font-family: Arial` heredado de la plantilla en el selector
      `body`, que hoy anula las fuentes Geist cargadas en el root layout

**SEO y despliegue**
- [ ] Generar `og-image.png` (1200×630) para compartir por WhatsApp y redes
- [ ] Agregar `metadataBase` y URLs canónicas
- [ ] Definir plataforma de despliegue y documentar el proceso

---

## Licencia

Proyecto privado. Todos los derechos reservados.
