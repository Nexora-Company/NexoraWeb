import { LANGS } from './i18n.js';

/**
 * Entradas de prerender. El idioma es el único segmento dinámico del sitio,
 * así que todas las páginas comparten la misma lista de entradas.
 */
export function entries() {
	return LANGS.map((lang) => ({ lang }));
}