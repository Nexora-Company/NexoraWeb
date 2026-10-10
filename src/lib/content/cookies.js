export default {
	es: {
		meta: {
			title: 'Cookies',
			description: 'Política de cookies de Nexora: qué cookies usamos y cómo configurarlas.'
		},
		header: {
			eyebrow: 'Política de cookies',
			title: 'Cookies',
			updated: 'Última actualización: 15 de septiembre de 2026',
			intro: 'Usamos cookies necesarias para que el sitio funcione y, con tu consentimiento, cookies analíticas y de preferencia.'
		},
		sections: [
			{ title: '¿Qué son las cookies?', body: ['Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.', 'Nos permiten recordar tus preferencias, mantener tu sesión y entender cómo se usa el sitio.'] },
			{ title: 'Tipos de cookies que usamos', body: ['Necesarias: imprescindibles para el funcionamiento del sitio. No se pueden desactivar.', 'Analíticas: nos ayudan a entender cómo se usa el sitio para mejorarlo.', 'De preferencia: recuerdan tus ajustes como idioma y tema.'] },
			{ title: 'Cookies de terceros', body: ['No usamos cookies de publicidad de terceros.', 'Los proveedores de pago y facturación usan sus propias cookies durante el proceso de compra.'] },
			{ title: 'Cómo desactivarlas', body: ['Puedes desactivar las cookies no necesarias desde la configuración de tu navegador.', 'Ten en cuenta que el sitio puede no funcionar correctamente sin las cookies necesarias.'] }
		],
		table: {
			eyebrow: 'Detalle de cookies',
			title: 'Cookies que usamos.',
			items: [
				{ name: 'nexora_session', purpose: 'Mantener tu sesión activa', duration: 'Sesión', category: 'Necesaria' },
				{ name: 'nexora_theme', purpose: 'Recordar tu tema (claro/oscuro)', duration: '1 año', category: 'Preferencia' },
				{ name: 'nexora_lang', purpose: 'Recordar tu idioma', duration: '1 año', category: 'Preferencia' },
				{ name: 'nexora_consent', purpose: 'Guardar tus preferencias de cookies', duration: '1 año', category: 'Necesaria' },
				{ name: '_ga', purpose: 'Analítica de visitas', duration: '2 años', category: 'Analítica' },
				{ name: '_gid', purpose: 'Analítica de visitas', duration: '24 horas', category: 'Analítica' },
				{ name: 'Nexora_app_id', purpose: 'Identificar tu dispositivo para sincronización', duration: '90 días', category: 'Necesaria' },
				{ name: 'Nexora_api_token', purpose: 'Mantener la sesión en la API', duration: '90 días', category: 'Necesaria' }
			]
		},
		preferences: {
			eyebrow: 'Preferencias',
			title: 'Configura tus cookies.',
			lead: 'Puedes activar o desactivar las cookies no necesarias. Las necesarias siempre están activas.',
			items: [
				{ key: 'necessary', label: 'Cookies necesarias', desc: 'Imprescindibles para el funcionamiento', enabled: true },
				{ key: 'analytics', label: 'Cookies analíticas', desc: 'Nos ayudan a mejorar el sitio', enabled: false },
				{ key: 'preferences', label: 'Cookies de preferencia', desc: 'Recuerdan tus ajustes', enabled: false }
			],
			save: 'Guardar preferencias'
		},
		closing: {
			title: '¿Más información?',
			lead: 'Consulta nuestra política de privacidad o escríbenos a privacidad@nexora.com.'
		}
	},
	en: {
		meta: {
			title: 'Cookies',
			description: 'Nexora cookie policy: what cookies we use and how to configure them.'
		},
		header: {
			eyebrow: 'Cookie policy',
			title: 'Cookies',
			updated: 'Last updated: September 15, 2026',
			intro: 'We use necessary cookies for the site to work and, with your consent, analytics and preference cookies.'
		},
		sections: [
			{ title: 'What are cookies?', body: ['Cookies are small text files stored on your device when you visit a website.', 'They allow us to remember your preferences, keep you logged in and understand how the site is used.'] },
			{ title: 'Types of cookies we use', body: ['Necessary: essential for the site to work. Cannot be disabled.', 'Analytics: help us understand how the site is used to improve it.', 'Preferences: remember your settings like language and theme.'] },
			{ title: 'Third-party cookies', body: ['We do not use third-party advertising cookies.', 'Payment and billing providers use their own cookies during the purchase process.'] },
			{ title: 'How to disable them', body: ['You can disable non-necessary cookies from your browser settings.', 'Note that the site may not work properly without necessary cookies.'] }
		],
		table: {
			eyebrow: 'Cookie details',
			title: 'Cookies we use.',
			items: [
				{ name: 'nexora_session', purpose: 'Keep you logged in', duration: 'Session', category: 'Necessary' },
				{ name: 'nexora_theme', purpose: 'Remember your theme (light/dark)', duration: '1 year', category: 'Preference' },
				{ name: 'nexora_lang', purpose: 'Remember your language', duration: '1 year', category: 'Preference' },
				{ name: 'nexora_consent', purpose: 'Save your cookie preferences', duration: '1 year', category: 'Necessary' },
				{ name: '_ga', purpose: 'Visit analytics', duration: '2 years', category: 'Analytics' },
				{ name: '_gid', purpose: 'Visit analytics', duration: '24 hours', category: 'Analytics' },
				{ name: 'nexora_app_id', purpose: 'Identify your device for sync', duration: '90 days', category: 'Necessary' },
				{ name: 'nexora_api_token', purpose: 'Keep your API session', duration: '90 days', category: 'Necessary' }
			]
		},
		preferences: {
			eyebrow: 'Preferences',
			title: 'Configure your cookies.',
			lead: 'You can enable or disable non-necessary cookies. Necessary cookies are always on.',
			items: [
				{ key: 'necessary', label: 'Necessary cookies', desc: 'Essential for functionality', enabled: true },
				{ key: 'analytics', label: 'Analytics cookies', desc: 'Help us improve the site', enabled: false },
				{ key: 'preferences', label: 'Preference cookies', desc: 'Remember your settings', enabled: false }
			],
			save: 'Save preferences'
		},
		closing: {
			title: 'More information?',
			lead: 'See our privacy policy or write to us at privacy@nexora.com.'
		}
	}
};