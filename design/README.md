# Recursos gráficos — EnergyRex

## Maestros (no tocar, no servir al público)

| Archivo | Qué es |
|---|---|
| `logo.svg` | **Maestro oficial.** Vectorial, fondo transparente, 2 colores planos. Escala a cualquier tamaño sin perder calidad. |
| `logo-master.png` | Respaldo raster de 2048×2048 con transparencia, por si algún programa no acepta SVG. |

Colores de marca:

- Azul: `#0F3D85`
- Verde: `#069D5D`

## Derivados (los que sí se sirven, viven en `public/`)

| Archivo | Tamaño | Para qué |
|---|---|---|
| `public/icon.png` | 512×512, transparente | Ícono de la pestaña del navegador |
| `public/apple-icon.png` | 180×180, fondo blanco | Pantalla de inicio en iOS |

## Cómo regenerar los derivados

Desde la raíz del proyecto, con `rsvg-convert` (`brew install librsvg`):

```bash
rsvg-convert -w 512 -h 512 design/logo.svg -o public/icon.png
rsvg-convert -w 180 -h 180 design/logo.svg -o public/apple-icon.png
```

Sin instalar nada, partiendo del PNG maestro:

```bash
sips -Z 512 design/logo-master.png --out public/icon.png
sips -Z 180 design/logo-master.png --out public/apple-icon.png
```

`apple-icon.png` debe quedar **opaco** — iOS no maneja bien la transparencia y
la rellena de negro. Si lo regeneras desde el SVG, ponle fondo blanco después.

## Regla

Nunca escales hacia arriba un derivado. Si necesitas el logo en un tamaño
nuevo, vuelve siempre a `logo.svg`.

## Pendiente

`og-image.png` (1200×630) — es la miniatura que aparece cuando alguien comparte
el link por WhatsApp. Debería llevar el logo completo con la palabra
"EnergyRex" y el eslogan, no solo la S.
