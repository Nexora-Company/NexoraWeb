/** Idiomas y utilidades de ruta. Trailing slash fijo para salida estática. */

export const LANGS = ['es', 'en'];
export const DEFAULT_LANG = 'es';

export const isLang = (v) => LANGS.includes(v);

/** `/es` + `plataforma/` -> `/es/plataforma/` · `/explorar/#pc` -> `/es/explorar/#pc` */
export function url(lang, path = '') {
	const hashAt = path.indexOf('#');
	if (hashAt !== -1) {
		const base = path.slice(0, hashAt).replace(/^\/+|\/+$/g, '');
		const hash = path.slice(hashAt + 1);
		return `/${lang}${base ? `/${base}` : ''}#${hash}`;
	}
	const clean = path.replace(/^\/+|\/+$/g, '');
	return `/${lang}${clean ? `/${clean}/` : '/'}`;
}

/** Ruta equivalente en el otro idioma. */
export function swapLang(pathname, lang) {
	const next = lang === 'es' ? 'en' : 'es';
	const parts = pathname.split('/').filter(Boolean);
	if (parts.length && isLang(parts[0])) parts[0] = next;
	else parts.unshift(next);
	return `/${parts.join('/')}/`;
}