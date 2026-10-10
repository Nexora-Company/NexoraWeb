---
name: visual-identity
description: Design System de Nexora Web. Paleta, tipografía, componentes base, motion y layout. Usar al crear o revisar cualquier componente, sección o página del sitio.
---

# Identidad Visual de Nexora

Sistema de diseño del sitio de Nexora. Todo valor sale de tokens CSS: **ningún color, tamaño, radio, duración ni easing se escribe literal en un componente**.

Los tokens viven en `src/styles/`, un archivo por superficie:

| Archivo | Superficie |
|---|---|
| `tokens.css` | base: paleta, tema claro/oscuro, tipografía, espaciado, motion |
| `tokens.header.css` | encabezado: vidrio, alturas, iconos |
| `tokens.hero.css` | variantes y tonos del hero |
| `tokens.product.css` | página de producto, bloques, descargas, soporte |
| `tokens.footer.css` | pie |
| `tokens.legal.css` | páginas legales |

Se importan en orden desde `src/index.css`. **Un token nuevo va en el archivo de su módulo**, nunca mezclado en `tokens.css` si pertenece a otra superficie.

---

## 1. Color

### Paleta bruta

Solo estos valores existen. No se inventan colores nuevos sin añadir su token.

```
Neutros    0 #ffffff · 50 #fbfbfd · 100 #f5f5f7 · 150 #eeeef0
           600 #6b6b74 · 750 #42424a · 950 #0a0a0c
           tinta #1d1d1f · niebla #e8e8ed · bruma #d7d7dc · ceniza #a9a9b3 · linea #d9d9de
Superficies 300 #0a0a0c · 400 #141417 · 450 #1c1c21 · 500 #24252a · 600 #2c2d33
Marca      500 #a50021 · 600 #84001a · on-dark #ff453a · velo claro rgb(165 0 33 / 0.08) · velo oscuro rgb(255 69 58 / 0.14)
```

**Nada de azul en el proyecto.** Enlaces, foco y botones usan el brand rojo: `--color-link` y `--color-focus-ring` resuelven a `--palette-brand-500` en claro y `--palette-brand-on-dark` en oscuro. `.btn--primary` es fondo `--color-brand` con texto `--color-text-on-brand`; `.btn--secondary` es texto `--color-brand-text` con borde y velo `--color-brand-veil` al hover.

### Acentos por producto

Cada familia del catálogo oficial y cada software tiene un acento. El acento nunca se escribe en el componente: se declara con un token `--product-*` y el CSS lo resuelve.

```
nphone #a50021   nexabook #6e6e73   nexatab #5856d6
nexawatch #ff9f0a   nexapods #30d158
ncode   #0f766e   ncloud  #0891b2   nexora-one #a50021
```

Queda prohibido usar acentos de productos retirados (NPhotos, NMeet, NChat y similares): todo acento debe existir en el catálogo vigente.

Cada acento tiene su variante `-on-dark`, más clara, para texto sobre superficie oscura.

### Colores semánticos

**Nunca se usa un color bruto en un componente.** Solo tokens semánticos, que ya resuelven el tema:

- Superficie: `--color-background`, `--color-surface`, `--color-surface-muted`, `--color-surface-elevated`, `--color-surface-hover`, `--color-surface-dark`
- Texto: `--color-text-primary`, `--color-text-secondary`, `--color-text-tertiary`
- Sobre color: `--color-text-on-brand`, `--color-text-on-dark`, `--color-text-on-dark-muted`, `--color-text-on-dark-faint`
- Marca: `--color-brand-text`, `--color-brand-text-hover`
- Separadores: `--separator-color`, `--separator-color-strong`

### Reglas de color

1. **El acento es de la familia, no del componente.** Un componente que acepta un color de producto recibe `tone` y lee `--product-accent`; nunca fija `#d94600` en su CSS.
2. **Sobre fondo de color, el texto va con `--color-text-on-dark`**, no con `--color-text-primary`. Es legible sobre cualquier acento.
3. **Texto de color sobre superficie clara** usa `--color-brand-text`, que ya cambia en oscuro a `--brand-on-dark`.
4. **Nada de bordes para separar.** La jerarquía la hacen superficies escalonadas (`--color-surface` → `--color-surface-muted` → `--color-surface-hover`). El borde es para superficie elevada, no para dividir texto.

---

## 2. Tipografía

### Fuentes

```
--font-family-base     Inter (variable, sustituto libre de Google Sans)
--font-family-tight    Inter Tight (titulares)
--font-family-mono     Google Sans Code (variable)
--font-family-display  Gliker (solo la inicial "N" de los titulares de heroe)
```

Base y titulares se cargan desde Google Fonts en `index.html` con `preconnect`. Gliker es una fuente comercial (Studio Sun): se declara con `@font-face` en `tokens.css` esperando el archivo en `/fonts/Gliker-*`, con pila de reserva `Gliker, Arial Rounded MT Bold, Inter Tight, system-ui`. **No se añade otra fuente display sin revisar el peso de la página.**

### La "N" en Gliker

Todo titular de heroe cuyo producto empiece por `N` (NPhone, NexaBook, NexaTab, NexaWatch, NexaPods) envuelve su primera letra en `.brand-title__initial`, que usa `--font-family-display`. Las palabras `Ultra`, `Max` y `Plus` (lista en `src/content/site/brandTitle.content.js`) van en `.brand-title__display`, también Gliker. El resto del titular sigue en `--font-family-tight`. Componente `BrandTitle`: recibe `text` y decide solo; el JSX nunca parte el texto a mano.

### Escala

De `--font-size-2xs` a `--font-size-7xl`, en pasos de 13. El cuerpo es `--font-size-base` (1rem).

Shorthands que ya existen y hay que preferir a escribir `font` a mano:

```
--text-caption  --text-body-lg  --text-body-strong
--text-heading-md  --text-heading-lg  --text-display
```

### Escala responsive

Los títulos que dependen del ancho usan `clamp()` con dos límites y un término fluido. El patrón del proyecto:

```css
--product-heading-size: clamp(1.5rem, 1.1rem + 1.6vw, var(--font-size-3xl));
```

- El mínimo se expresa en `rem` fijo: es el tamaño en móvil.
- El máximo es un token de la escala: es el techo en escritorio.
- El término fluido usa `vw` mezclado con un `rem` de arranque para no arrancar en cero.

**Nunca** se sube el tamaño de fuente con `vw` a secas: produce tipografía ilegible a 320px.

### Reglas tipográficas

1. `line-height` sale de `--line-height-*` (`tight` para titulares, `normal` para cuerpo, `relaxed` para prosa larga).
2. Los titulares llevan `letter-spacing: var(--letter-spacing-tight)`.
3. `text-wrap: balance` en titulares, `text-wrap: pretty` en párrafos. Evita líneas huérfanas sin romper el interlineado.
4. Los titulares **no** llevan `text-transform: uppercase` salvo que el diseño lo pida de forma explícita (lo usan los eyebrows de sección).

---

## 3. Componentes base

### Botones

Clase `.btn` en `src/styles/base.css`. Variantes: `.btn--primary` (marca) y `.btn--secondary` (superficie con borde interior).

- **Microinteracción**: `transform: scale(0.98)` en `:active`, con `--duration-fast`.
- Altura mínima **44px** (`2.75rem`): objetivo táctil mínimo.
- `border-radius: var(--radius-full)` (píldora).
- El foco lo aporta `:focus-visible` global, no cada botón.

**Regla anti-conflicto:** un componente que redefina el color de `.btn` debe usar un selector de **dos clases** (`.hero--apps .hero__cta`), no uno. `.btn--primary` también es una clase: con la misma especificidad, el color dependería del orden de importación.

### Tarjetas

```
superficie  --color-surface
borde       1px solid var(--separator-color)
radio       --radius-xl o --radius-2xl
relleno     --space-6 a --space-8
```

Escalonado, sin sombra dura. La separación entre tarjetas es `--space-6` o `--space-8`.

### Vidrio esmerilado

Para superficies flotantes (navegación, paneles que se superponen a contenido). La receta:

```css
background-color: rgb(var(--glass-tint) / var(--glass-alpha));
backdrop-filter: blur(var(--blur-lg)) saturate(180%);
border-bottom: 1px solid var(--separator-color);
```

Reglas: el desenfoque va entre **16 y 24px** (`--blur-lg: 20px`); el `saturate` sube el croma de lo que hay detrás para que no se enturbie; el alpha va del **60 al 80%**, por debajo el texto pierde legibilidad sobre foto. **Todo cristal necesita un opaco detrás cuando hay texto encima**: el desenfoque no garantiza contraste, y el texto sobre foto sin velo falla WCAG.

### Navegación flotante

`--header-height` (64px). La topbar es sólida (`--color-surface`), sin blur ni translucidez. El inner está centrado con `max-width: var(--header-inner-max)` y en escritorio todo el conjunto (logo + nav + acciones) va centrado con `justify-content: center`; en móvil, logo a la izquierda y acciones a la derecha con `justify-content: space-between`.

- Izquierda: logotipo Nexora con solo el icono `Hexagon` de lucide-react en brand, sin texto.
- Centro: enlaces directos (`<a>`) a las páginas de producto por hash (`#/nphone`, `#/nexabook`, `#/nexatab`, `#/nexawatch`, `#/nexapods`) más Accesorios y Soporte. Sin mega-panel ni hover desplegable en escritorio.
- Derecha: lupa (buscar) + bolsa (compra) + toggle de tema (Sol/Luna). Iconos siempre de `lucide-react` (`Search`, `ShoppingBag`, `Sun`, `Moon`, `Menu`, `X`, `ChevronLeft`, `Hexagon`).

En móvil (< `--header-mobile-breakpoint`): botón hamburguesa abre overlay a pantalla completa (`position: fixed`, `role="dialog"`) con topbar propia (solo icono o atrás + cerrar), enlaces en grande sin líneas separadoras y subvista por producto desde `src/content/site/navMenus.content.js`. Bloquea el scroll con `body overflow hidden`.

**Prohibido `filter`, `backdrop-filter` o `transform` en ancestros de un `fixed`**: crean bloque contenedor y rompen el overlay móvil. Por eso la topbar es sólida.

### Hero de portada (estética Nexora, referencia Apple)

Tres variantes, todas en `src/sections/Hero/`:

- `.hero--classic` (título + descripción + botones + imagen): **sin margin ni padding inferior** (`--hero-classic-padding-bottom: 0`), solo lados y arriba. Para NPhone, NexaBook, NexaTab y NexaPods.
- `.hero--upcoming` (título + descripción + nota de lanzamiento + botones + imagen). Usa el mismo fondo que las demás (`--hero-upcoming-bg: var(--color-surface)`); no hay variante clara/oscura por contenido.
- `.hero--watch` (título + imagen + descripción + botones).

Entre heroes hay una mini separación con **margin** (`.home > .hero + .hero { margin-top: var(--hero-stack-gap) }`), nunca con `gap`, para distinguir cada hero.

Los tres responden al tema global mediante tokens semánticos (`--hero-*-bg`, `--hero-*-title`, etc. en `tokens.hero.css`): nada de fondos fijos oscuros/claros.

Imágenes: hasta tener activos propios, solo Unsplash (`images.unsplash.com` con `?q=80&w=1800&auto=format&fit=crop`) con `alt` descriptivo en español desde el content. Nada de Pinterest con hotlink inestable.

### Páginas de producto (referencia Apple/Mac)

Cada familia (NPhone, NexaBook, NexaTab, NexaWatch, NexaPods) tiene su página base en `src/pages/Product/`, con routing por hash (`#/nphone`, etc. resuelto en `App.jsx` con `getRouteProductId`). Lo primero que se ve es el selector de familia `src/sections/FamilyNav/`: título grande a la izquierda + tira horizontal con scroll (`overflow-x: auto`, `scroll-snap`) de modelos del catálogo (base, Plus, Ultra, Max donde aplique) más Comparar, Ayuda para elegir y Accesorios. Iconos lucide mapeados por clave (`smartphone`, `laptop`, `tablet`, `watch`, `headphones`, `compare`, `help`, `bag`); etiqueta `Nuevo` en `--family-nav-tag`. Tokens en `tokens.family-nav.css`.

### Pie (estética Nexora, referencia Apple)

`tokens.footer.css`. Estructura: notas legales → columnas de enlaces → formas de comprar → copyright + enlaces legales. Sin selector de país: Nexora es una empresa colombiana (precios en COP, teléfono 01 8000, copyright `Nexora S.A.S.`). Columnas adaptadas a Nexora (Explorar, Soporte, Compañía, Para empresas y educación, Valores de Nexora, Cuenta): nada de items open-source (API, Estado, Comunidad). El bloque legal muestra solo Política de privacidad, Términos de uso y Ventas y reembolsos. En móvil (< `--footer-accordion-breakpoint`) cada columna es un acordeón con `aria-expanded`; en escritorio, rejilla `auto-fit minmax(10rem, 1fr)`.

### Foco y estados

- `:focus-visible` global: `outline: var(--focus-ring-width) solid var(--color-focus-ring)` con `outline-offset: 3px`.
- **Nunca** `outline: none` sin reemplazo. El anillo de foco es la accesibilidad del teclado, no decoración.
- `--focus-ring-width: 2px`.

### Reglas de accesibilidad (WCAG 2.1 AA)

1. **Contraste 4.5:1** en texto normal, **3:1** en texto grande (≥18.66px bold o ≥24px). Sobre acento de producto, el texto va con `--color-text-on-dark`.
2. **Objetivo táctil mínimo 44×44px**, con separación de al menos 8px entre controles.
3. **`<button>` para acciones, `<a>` para destinos.** Un botón que navega es un enlace; un enlace que actúa es un botón.
4. **Nada de información solo por color.** Un canal de descarga disponible se distingue por su texto, no solo por el tono.
5. **Todo elemento interactivo es alcanzable por teclado** y visible al enfocarse.
6. **`<html lang="es">`** y jerarquía de encabezados sin saltos: una sola `h1` por ruta.
7. `prefers-reduced-motion: reduce` desactiva transiciones y animaciones.

---

## 4. Motion

### Tokens

```
--duration-fast    150ms   hover, feedback inmediato
--duration-normal  250ms   transiciones de superficie y color
--ease-standard    cubic-bezier(0.4, 0, 0.2, 1)
```

Regla: **el timing sigue a la distancia.** Un cambio de color a 150ms; un panel que entra desde un lateral, a 250ms.

### Curvas

```
--ease-standard  cubic-bezier(0.4, 0, 0.2, 1)   entrada y salida general
```

Cuando una animación requiera sensation de peso (un hero que escala al hacer scroll), se declara su propia curva en el token del componente, nunca en el JSX.

### Qué se anima

Solo dos propiedades, por rendimiento:

```css
transition:
  background-color var(--duration-fast) var(--ease-standard),
  color var(--duration-fast) var(--ease-standard),
  transform var(--duration-fast) var(--ease-standard);
```

**No se anima `width`, `height`, `top` o `left`.** Provocan reflow. Para elementos que cambian de tamaño se usa `transform: scale()`.

### Interacciones

- **Hover**: cambio de superficie o de color a `--duration-fast`.
- **Activo**: `scale(0.98)` en botones y tarjetas pulsables.
- **Entrada de sección**: desplazamiento vertical corto con opacidad, a `--duration-normal`.
- **Sticky/blur**: sin animación; cambia de estado al cruzar el scroll.

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 5. Layout

### Contenedores

```css
.container             max-width: var(--container-wide)   (1280px)
.container--narrow     max-width: var(--container-desktop) (1024px)
.container--prose      max-width: var(--max-width-prose)
```

`--gutter-mobile: 1rem`, `--gutter-desktop: 2rem`.

### Espaciado

Escala `--space-1` a `--space-24`, base 0.25rem. **Se usa la escala, no un valor arbitrario.**

Ritmo vertical por sección: `--space-16` móvil, `--space-20` o `--space-24` escritorio.

### Cuadrícula fluida

```css
grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
```

El número de columnas sale de un token (`--product-features-columns-tablet`) y el breakpoint se declara literal en el `@media`, porque **CSS no admite `var()` dentro de `@media`**: usarla rompe el build.

### Layout asimétrico

El diseño evita la columna centrada de ancho fijo. Se compone con:

- `grid-template-columns: 1fr auto 1fr` para centrar elementos con peso a los lados.
- Contenido a un lado y visual a otro, con el peso visual en la diagonal.
- Anchos de lectura acotados (`--product-measure: 68ch`) para prosa, pero no siempre centrados.

### Capas (`z-index`)

```
--z-raised 10 · --z-sticky 200 · --z-overlay 300 · --z-modal 400
--z-popover 500 · --z-tooltip 700
```

**Trampa del proyecto, ya resuelta:** un posicionado con `z-index` distinto de `auto` **crea contexto de apilamiento** y encerra a sus hijos aunque tengan un `z-index` mayor. Por eso `.hero__panel` no lleva `z-index`: la imagen se solapa con el título solo desde dentro de un `isolation: isolate` en el contenedor.

---

## 6. Contenido

1. **Ningún texto visible en el JSX.** Todo el copy vive en `src/content/`, organizado por dominio (`site/`, `home/`, y un directorio por página nueva). **Cada sección, layout y componente tiene su propio `.js` de contenido** (p. ej. `header.content.js`, `navMenus.content.js`, `footer.content.js`, `heroNPhone.content.js`): el JSX solo importa y renderiza.
2. Estructura de carpetas: `src/components/` (piezas: BrandTitle), `src/layouts/` (Header, Footer), `src/sections/` (Hero, FamilyNav), `src/pages/` (Home, Product), `src/content/products/` (un `.content.js` por familia: base/Plus/Ultra/Max según catálogo). Nada de layouts dentro de `components/`.
2. Los iconos vienen de `lucide-react`. Los logotipos de marca (redes sociales) siguen siendo SVG en línea porque la librería los retiró.
3. Los datos de producto (versión, estado, gamas) son declarativos y se derivan, no se repiten en varios sitios.
4. Todo texto de interfaz, **en español**.

---

## 7. Antes de dar por terminado un componente

- [ ] Ningún valor literal de color, tamaño, radio, duración ni easing: todo por token.
- [ ] El color viene de `--color-*` o `--product-*`, nunca de la paleta bruta.
- [ ] `:focus-visible` visible y `:active` con realimentación.
- [ ] Contraste 4.5:1 verificado sobre el color de fondo real.
- [ ] Se lee bien en claro y en oscuro.
- [ ] `prefers-reduced-motion` respetado.
- [ ] Alcanzable por teclado, con etiquetas accesibles donde el texto visible no basta.
- [ ] Sin desbordamiento horizontal a 320px.
- [ ] Copy desde `src/content/`, en español.
- [ ] Funciona en móvil: una columna donde el escritorio tiene varias.