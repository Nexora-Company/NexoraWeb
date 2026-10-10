# Nexora Web

Sitio oficial de Nexora: silicio, sistema, nube y dispositivos.

![Svelte](https://img.shields.io/badge/Svelte-5-orange) ![SvelteKit](https://img.shields.io/badge/SvelteKit-3-blue) ![Vite](https://img.shields.io/badge/Vite-8-purple) ![Static](https://img.shields.io/badge/Adapter-Static-green)

## Propósito

Responsabilidad única: presentar el catálogo oficial (skill `product-catalog`) con un sistema de diseño propio. Sin textos ni valores hardcodeados: todo copy en `src/lib/content/`, todo estilo en tokens `src/lib/styles/`.

## Estructura

```
src/
  lib/
    components/   Band, Header, Footer, SectionHead, Reveal, ProductArt, ...
    content/      site.js, home.js, explorar.js, plataforma.js, ... (ES + EN)
    data/         catalog.js (catálogo oficial)
    styles/       tokens.css, reset.css, base.css, layout.css, components.css
    pages/        Home, Explorar, Plataforma, Integraciones, Precios, ...
  routes/
    +page.svelte          Gateway de idioma
    [lang]/               Layout con Header/Footer
      +page.svelte        Portada
      explorar/           Catálogo completo
      plataforma/         NCloud, NCode, Nexora One
      integraciones/      API y verticales
      precios/            Planes y hardware
      novedades/          Prensa y changelog
      empresa/            Sobre nosotros, Blog, Empleo, Contacto
      recursos/           Documentación, API, Estado
      comunidad/          Foros, eventos, colaboradores
      legal/              Privacidad, Términos, Cookies
```

## Componentes

- `Band`: sección a sangre completa con tonos `plain | soft | quiet | onyx`.
- `Header`: navegación sticky con menú móvil, toggle de tema y selector de idioma.
- `Footer`: 4 grupos del catálogo oficial + enlaces legales.
- `ProductArt`: dibujos técnicos en línea para las 29 referencias.
- `Reveal`: animación de entrada con IntersectionObserver.
- `Ledger`: tablas de especificaciones en filetes.

## Quick Start

```svelte
<script>
	import Band from '#lib/components/Band.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
</script>

<Band tone="onyx">
	<div class="container container--wide">
		<SectionHead eyebrow="Plataforma" title="La pila es propia." />
	</div>
</Band>
```

## Desarrollo

```
npm install
npm run dev
npm run build
npm run preview
```

Commits: Conventional Commits con `git add <ruta>` explícito (nunca `git add .`).
