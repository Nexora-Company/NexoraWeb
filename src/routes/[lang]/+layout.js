import { error } from '@sveltejs/kit';
import { LANGS, isLang } from '#lib/i18n.js';

export function load({ params }) {
	if (!isLang(params.lang)) {
		error(404, 'Idioma no disponible');
	}
	return { lang: params.lang, langs: LANGS };
}