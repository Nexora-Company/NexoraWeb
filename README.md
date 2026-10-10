# Nexora Web

Sitio oficial de Nexora: portada estilo Apple con NPhone, NexaBook, NexaTab, NexaWatch y NexaPods.

![React](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-7-purple) ![Lucide](https://img.shields.io/badge/Icons-Lucide-green)

## Propósito

Responsabilidad única: presentar el catálogo oficial (skill `product-catalog`) con el sistema de diseño (`visual-identity`). Sin textos ni valores hardcodeados: todo copy en `src/content/`, todo estilo en tokens `src/styles/`.

## Estructura

```
src/
  components/  Header/ Hero/ BrandTitle/ Footer/
  content/     site/ home/
  hooks/       useTheme.js
  pages/       Home/
  styles/      tokens.css tokens.hero.css tokens.header.css tokens.footer.css base.css
```

## Componentes

- `Header`: logo izq. · enlaces centro · lupa/bolsa/toggle der. (lucide-react).
- `Hero`: variantes `classic` / `upcoming` / `watch`; `BrandTitle` pone la `N` inicial en Gliker.
- `Footer`: notas legales + columnas + acordeón móvil.

## Quick Start

```jsx
import { Hero } from "./components/Hero/Hero.jsx";
import { heroNPhoneContent } from "./content/home/heroNPhone.content.js";

<Hero content={heroNPhoneContent} headingLevel={1} />;
```

## Desarrollo

```
npm install
npm run dev
npm run build
```

Commits: Conventional Commits con `git add <ruta>` explícito (nunca `git add .`).
