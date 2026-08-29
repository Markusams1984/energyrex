# Recursos gráficos — EnergyRex

## Colores de marca

| | Isotipo (la S) | Logo completo |
|---|---|---|
| Azul | `#0F3D85` | `#131F3C` |
| Verde | `#069D5D` | `#0A6647` |

Los dos originales venían con tonos distintos, así que cada versión conserva
los suyos. Si algún día unificas la paleta, este es el lugar donde anotarlo.

## `design/` — el origen

| Archivo | Qué es |
|---|---|
| `logo-full-source.jpg` | JPEG de 708×298 del que se vectorizó el logo completo |
| `generate-og-image.mjs` | Genera `app/opengraph-image.png` (ver abajo) |

`logo-full-source.jpg` es el único archivo que no se puede regenerar desde
ningún otro, y por eso vive aquí. Todo lo demás sale de él o de los SVG.

Esta carpeta **no se sirve al público**: Next solo publica lo que está en
`public/`.

## `public/` — lo que usa el sitio

| Archivo | Qué es | Para qué |
|---|---|---|
| `logo.svg` | Isotipo (la S), vectorial | Usos sueltos dentro del sitio |
| `logo-full.svg` | Logo completo, vectorial, 13 KB | Cabecera, pie de página |

Los SVG son los maestros: el mismo archivo sirve para 200 px o para 2000 px,
sin exportar nada.

## `app/` — los que Next detecta por convención

No van en `public/`. Next los descubre por su nombre de archivo, genera las
etiquetas del `<head>` solo y les agrega un hash de caché a la URL, así que
tampoco se declaran en `metadata`.

| Archivo | Qué es | Para qué |
|---|---|---|
| `icon.png` | 512×512, transparente | Ícono de la pestaña del navegador |
| `apple-icon.png` | 180×180, fondo blanco | Pantalla de inicio en iOS |
| `opengraph-image.png` | 1200×630 | Miniatura al compartir el link (ver abajo) |

Los PNG existen solo porque el favicon y iOS exigen ese formato.

## Cómo usar el logo en el sitio

```tsx
import Image from "next/image";

<Image src="/logo-full.svg" alt="EnergyRex" width={200} height={37} priority />
```

La proporción del logo completo es **5.44:1** (2400×441). Respétala al elegir
`width` y `height` para que no se deforme. El isotipo suelto es cuadrado.

## Cómo exportar un PNG desde un SVG

Con `rsvg-convert` (`brew install librsvg`):

```bash
rsvg-convert -w 512 -h 512 public/logo.svg -o app/icon.png
```

Ojo con el destino: el SVG de origen vive en `public/`, pero el ícono de salida
va en `app/`. Si lo escribes en `public/` queda un archivo muerto y la pestaña
sigue mostrando el anterior.

`apple-icon.png` debe quedar **opaco** — iOS rellena la transparencia con
negro. Ponle fondo blanco después de exportarlo.

## La imagen de Open Graph

`app/opengraph-image.png` (1200×630) es la miniatura que aparece cuando alguien
comparte el link por WhatsApp o redes. Vive en `app/` y no en `public/` porque
Next la detecta por **convención de nombre**: no se declara en `metadata`.

Se genera, no se edita a mano:

```bash
node design/generate-og-image.mjs
```

No instala nada: usa `next/og`, el renderizador que ya viene dentro del paquete
`next`, con su Satori y su copia de la fuente Geist.

Vuelve a correrlo si cambia `public/logo-full.svg`, si cambian los colores de
marca en `app/globals.css`, o si cambia el degradado de
`components/backdrop/backdrop.tsx`. Esos valores están copiados dentro del
script porque corre fuera de Next y no puede leer el CSS.

## Regla

Nunca escales hacia arriba un PNG. Si necesitas el logo en un tamaño nuevo,
vuelve siempre al SVG.

## Pendientes

**Versión para fondos oscuros.** El logo completo es azul marino casi negro,
así que desaparece sobre fondos oscuros y solo se ve la mitad verde de la S.
`generate-og-image.mjs` lo resuelve reemplazando los dos `fill` por blanco al
vuelo, pero eso vive dentro del script. Si el sitio necesita el logo claro en
más lugares, conviene un `logo-full-inverso.svg` de verdad en `public/`.

**Calidad del trazo.** `logo-full.svg` se vectorizó desde un JPEG de 708 px,
poca resolución para las letras. A tamaño de cabecera se ve limpio, pero de
cerca las curvas tienen ondulaciones. Si consigues el archivo original del
diseñador (`.ai`, `.eps` o `.svg`), reemplaza `logo-full.svg` por ese y no
hay que cambiar nada más.
