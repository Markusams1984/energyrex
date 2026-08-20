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

Es el único archivo que no se puede regenerar desde ningún otro, y por eso
vive aquí. Todo lo demás sale de él o de los SVG.

Esta carpeta **no se sirve al público**: Next solo publica lo que está en
`public/`.

## `public/` — lo que usa el sitio

| Archivo | Qué es | Para qué |
|---|---|---|
| `logo.svg` | Isotipo (la S), vectorial | Usos sueltos dentro del sitio |
| `logo-full.svg` | Logo completo, vectorial, 13 KB | Cabecera, pie de página |
| `icon.png` | 512×512, transparente | Ícono de la pestaña del navegador |
| `apple-icon.png` | 180×180, fondo blanco | Pantalla de inicio en iOS |

Los SVG son los maestros: el mismo archivo sirve para 200 px o para 2000 px,
sin exportar nada. Los PNG existen solo porque el favicon y iOS exigen ese
formato.

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
rsvg-convert -w 512 -h 512 public/logo.svg -o public/icon.png
```

`apple-icon.png` debe quedar **opaco** — iOS rellena la transparencia con
negro. Ponle fondo blanco después de exportarlo.

## Regla

Nunca escales hacia arriba un PNG. Si necesitas el logo en un tamaño nuevo,
vuelve siempre al SVG.

## Pendientes

**Versión para fondos oscuros.** El logo completo es azul marino casi negro,
así que desaparece sobre fondos oscuros y solo se ve la mitad verde de la S.
Si el sitio va a tener secciones oscuras, hace falta una variante con el
texto en blanco.

**Calidad del trazo.** `logo-full.svg` se vectorizó desde un JPEG de 708 px,
poca resolución para las letras. A tamaño de cabecera se ve limpio, pero de
cerca las curvas tienen ondulaciones. Si consigues el archivo original del
diseñador (`.ai`, `.eps` o `.svg`), reemplaza `logo-full.svg` por ese y no
hay que cambiar nada más.

**`og-image.png`** (1200×630) — la miniatura que aparece cuando alguien
comparte el link por WhatsApp. Para un negocio que se mueve por WhatsApp
importa más que el favicon. Se exporta desde `logo-full.svg`.
