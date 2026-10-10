/** Navegación, pie y etiquetas comunes del sitio. ES junto a EN para facilitar revisión. */

export const site = {
	es: {
		localeName: 'Español',
		langName: 'ES',
		country: 'Colombia',
		region: 'América Latina',
		tagline: 'Diseñamos el silicio, el sistema, la nube y los dispositivos.',
		nav: [
			{ label: 'Explorar', href: '/explorar/' },
			{ label: 'Plataforma', href: '/plataforma/' },
			{ label: 'Integraciones', href: '/integraciones/' },
			{ label: 'Precios', href: '/precios/' },
			{ label: 'Novedades', href: '/novedades/' }
		],
		menus: [
			{
				label: 'Compañía',
				items: [
					{ label: 'Sobre nosotros', href: '/empresa/sobre-nosotros/', note: 'Quiénes somos' },
					{ label: 'Blog', href: '/empresa/blog/', note: 'Notas del equipo' },
					{ label: 'Empleo', href: '/empresa/empleo/', note: 'Puestos abiertos' },
					{ label: 'Contacto', href: '/empresa/contacto/', note: 'Escríbenos' }
				]
			},
			{
				label: 'Recursos',
				items: [
					{ label: 'Documentación', href: '/recursos/documentacion/', note: 'Guías y referencias' },
					{ label: 'API', href: '/recursos/api/', note: 'Referencia y SDK' },
					{ label: 'Estado', href: '/recursos/estado/', note: 'Disponibilidad' },
					{ label: 'Comunidad', href: '/comunidad/', note: 'Foros y eventos' }
				]
			}
		],
		actions: { search: 'Buscar', menu: 'Menú', close: 'Cerrar' },
		footer: [
			{
				title: 'Comprar',
				items: [
					{ label: 'Explorar el catálogo', href: '/explorar/' },
					{ label: 'Nexora PC', href: '/explorar/#pc' },
					{ label: 'Nexora Mobile', href: '/explorar/#mobile' },
					{ label: 'Nexora Audio', href: '/explorar/#audio' },
					{ label: 'Nexora Wearables', href: '/explorar/#wearables' },
					{ label: 'Nexora Home', href: '/explorar/#home' }
				]
			},
			{
				title: 'Software',
				items: [
					{ label: 'Nexora One', href: '/plataforma/#one' },
					{ label: 'NCloud', href: '/plataforma/#ncloud' },
					{ label: 'NCode', href: '/plataforma/#ncode' },
					{ label: 'Precios', href: '/precios/' },
					{ label: 'Estado del servicio', href: '/recursos/estado/' }
				]
			},
			{
				title: 'Soporte',
				items: [
					{ label: 'Documentación', href: '/recursos/documentacion/' },
					{ label: 'API', href: '/recursos/api/' },
					{ label: 'Estado', href: '/recursos/estado/' },
					{ label: 'Comunidad', href: '/comunidad/' },
					{ label: 'Contacto', href: '/empresa/contacto/' }
				]
			},
			{
				title: 'Compañía',
				items: [
					{ label: 'Sobre nosotros', href: '/empresa/sobre-nosotros/' },
					{ label: 'Blog', href: '/empresa/blog/' },
					{ label: 'Empleo', href: '/empresa/empleo/' },
					{ label: 'Contacto', href: '/empresa/contacto/' },
					{ label: 'Novedades', href: '/novedades/' }
				]
			}
		],
		legal: [
			{ label: 'Privacidad', href: '/legal/privacidad/' },
			{ label: 'Términos', href: '/legal/terminos/' },
			{ label: 'Cookies', href: '/legal/cookies/' }
		],
		note: 'Nexora es una marca comercial de Nexora S.A. Productos, marcas y nombres citados pertenecen a sus respectivos titulares.',
		rights: 'Todos los derechos reservados.'
	},

	en: {
		localeName: 'English',
		langName: 'EN',
		country: 'Colombia',
		region: 'Latin America',
		tagline: 'We design the silicon, the system, the cloud and the devices.',
		nav: [
			{ label: 'Explore', href: '/explorar/' },
			{ label: 'Platform', href: '/plataforma/' },
			{ label: 'Integrations', href: '/integraciones/' },
			{ label: 'Pricing', href: '/precios/' },
			{ label: 'Newsroom', href: '/novedades/' }
		],
		menus: [
			{
				label: 'Company',
				items: [
					{ label: 'About us', href: '/empresa/sobre-nosotros/', note: 'Who we are' },
					{ label: 'Blog', href: '/empresa/blog/', note: 'Notes from the team' },
					{ label: 'Careers', href: '/empresa/empleo/', note: 'Open roles' },
					{ label: 'Contact', href: '/empresa/contacto/', note: 'Talk to us' }
				]
			},
			{
				label: 'Resources',
				items: [
					{ label: 'Documentation', href: '/recursos/documentacion/', note: 'Guides and references' },
					{ label: 'API', href: '/recursos/api/', note: 'Reference and SDK' },
					{ label: 'Status', href: '/recursos/estado/', note: 'Availability' },
					{ label: 'Community', href: '/comunidad/', note: 'Forums and events' }
				]
			}
		],
		actions: { search: 'Search', menu: 'Menu', close: 'Close' },
		footer: [
			{
				title: 'Buy',
				items: [
					{ label: 'Explore the catalog', href: '/explorar/' },
					{ label: 'Nexora PC', href: '/explorar/#pc' },
					{ label: 'Nexora Mobile', href: '/explorar/#mobile' },
					{ label: 'Nexora Audio', href: '/explorar/#audio' },
					{ label: 'Nexora Wearables', href: '/explorar/#wearables' },
					{ label: 'Nexora Home', href: '/explorar/#home' }
				]
			},
			{
				title: 'Software',
				items: [
					{ label: 'Nexora One', href: '/plataforma/#one' },
					{ label: 'NCloud', href: '/plataforma/#ncloud' },
					{ label: 'NCode', href: '/plataforma/#ncode' },
					{ label: 'Pricing', href: '/precios/' },
					{ label: 'Service status', href: '/recursos/estado/' }
				]
			},
			{
				title: 'Support',
				items: [
					{ label: 'Documentation', href: '/recursos/documentacion/' },
					{ label: 'API', href: '/recursos/api/' },
					{ label: 'Status', href: '/recursos/estado/' },
					{ label: 'Community', href: '/comunidad/' },
					{ label: 'Contact', href: '/empresa/contacto/' }
				]
			},
			{
				title: 'Company',
				items: [
					{ label: 'About us', href: '/empresa/sobre-nosotros/' },
					{ label: 'Blog', href: '/empresa/blog/' },
					{ label: 'Careers', href: '/empresa/empleo/' },
					{ label: 'Contact', href: '/empresa/contacto/' },
					{ label: 'Newsroom', href: '/novedades/' }
				]
			}
		],
		legal: [
			{ label: 'Privacy', href: '/legal/privacidad/' },
			{ label: 'Terms', href: '/legal/terminos/' },
			{ label: 'Cookies', href: '/legal/cookies/' }
		],
		note: 'Nexora is a trademark of Nexora S.A. Products, brands and names mentioned belong to their respective owners.',
		rights: 'All rights reserved.'
	}
};

export const siteFor = (lang) => site[lang] ?? site.es;