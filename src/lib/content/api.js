export default {
	es: {
		meta: {
			title: 'API',
			description: 'Referencia de la API de Nexora: endpoints, autenticación, límites y SDKs.'
		},
		hero: {
			eyebrow: 'API v2026-04',
			title: 'Referencia de la API.',
			lead: 'REST, versionada y documentada. Autenticación por token, límites claros y SDKs oficiales.',
			primary: { label: 'Ver documentación', href: '/recursos/documentacion/' },
			secondary: { label: 'Ver estado', href: '/recursos/estado/' }
		},
		quickstart: {
			eyebrow: 'Inicio rápido',
			title: 'Tu primera petición.',
			lang: 'bash',
			code: `curl https://api.nexora.com/v2026-04/compute/instances \\
  -H "Authorization: Bearer $NEXORA_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "region": "co-bog",
    "shape": "n1-compact",
    "count": 2
  }'`
		},
		resources: {
			eyebrow: 'Recursos',
			title: 'Endpoints principales.',
			items: [
				{ method: 'GET', path: '/compute/instances', desc: 'Lista instancias de cómputo', version: 'v2026-04' },
				{ method: 'POST', path: '/compute/instances', desc: 'Crea una instancia', version: 'v2026-04' },
				{ method: 'GET', path: '/storage/buckets', desc: 'Lista buckets de almacenamiento', version: 'v2026-04' },
				{ method: 'POST', path: '/storage/buckets', desc: 'Crea un bucket', version: 'v2026-04' },
				{ method: 'GET', path: '/devices', desc: 'Lista dispositivos vinculados', version: 'v2026-04' },
				{ method: 'POST', path: '/webhooks', desc: 'Registra un webhook', version: 'v2026-04' },
				{ method: 'GET', path: '/account/usage', desc: 'Uso y facturación', version: 'v2026-04' },
				{ method: 'GET', path: '/status', desc: 'Estado de la API', version: 'v2026-04' }
			]
		},
		auth: {
			eyebrow: 'Autenticación',
			title: 'Cómo autenticarte.',
			items: [
				{ key: 'Método', value: 'Bearer token en el header Authorization' },
				{ key: 'Token', value: 'Se genera desde el panel de control' },
				{ key: 'Permisos', value: 'Lectura, escritura y administración' },
				{ key: 'Rotación', value: 'Tokens con caducidad de 90 días' }
			]
		},
		limits: {
			eyebrow: 'Límites',
			title: 'Límites de tasa y cuotas.',
			items: [
				{ key: 'Límite de tasa', value: '10 000 req/min por token' },
				{ key: 'Tamaño de payload', value: '10 MB por petición' },
				{ key: 'Webhooks', value: 'Reintentos con backoff exponencial' },
				{ key: 'Paginación', value: 'Cursor-based, 100 items por página' }
			]
		},
		sdks: {
			eyebrow: 'SDKs',
			title: 'SDKs oficiales.',
			items: [
				{ name: 'Node.js', version: 'v4.2.0', min: 'Node 18+' },
				{ name: 'Python', version: 'v3.1.0', min: 'Python 3.10+' },
				{ name: 'Go', version: 'v2.0.0', min: 'Go 1.22+' },
				{ name: 'Java', version: 'v1.5.0', min: 'Java 17+' },
				{ name: 'Ruby', version: 'v1.2.0', min: 'Ruby 3.2+' },
				{ name: 'PHP', version: 'v2.1.0', min: 'PHP 8.2+' }
			]
		},
		stats: {
			eyebrow: 'Cifras',
			title: 'La API en números.',
			items: [
				{ value: '2,4 B', label: 'Peticiones/día' },
				{ value: '45 ms', label: 'Latencia p50' },
				{ value: '3', label: 'Regiones activas' },
				{ value: '99,98 %', label: 'Disponibilidad' }
			],
			cta: { label: 'Ver integraciones', href: '/integraciones/' }
		}
	},
	en: {
		meta: {
			title: 'API',
			description: 'Nexora API reference: endpoints, authentication, limits and SDKs.'
		},
		hero: {
			eyebrow: 'API v2026-04',
			title: 'API reference.',
			lead: 'REST, versioned and documented. Token authentication, clear limits and official SDKs.',
			primary: { label: 'See documentation', href: '/recursos/documentacion/' },
			secondary: { label: 'See status', href: '/recursos/estado/' }
		},
		quickstart: {
			eyebrow: 'Quickstart',
			title: 'Your first request.',
			lang: 'bash',
			code: `curl https://api.nexora.com/v2026-04/compute/instances \\
  -H "Authorization: Bearer $NEXORA_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "region": "co-bog",
    "shape": "n1-compact",
    "count": 2
  }'`
		},
		resources: {
			eyebrow: 'Resources',
			title: 'Main endpoints.',
			items: [
				{ method: 'GET', path: '/compute/instances', desc: 'List compute instances', version: 'v2026-04' },
				{ method: 'POST', path: '/compute/instances', desc: 'Create an instance', version: 'v2026-04' },
				{ method: 'GET', path: '/storage/buckets', desc: 'List storage buckets', version: 'v2026-04' },
				{ method: 'POST', path: '/storage/buckets', desc: 'Create a bucket', version: 'v2026-04' },
				{ method: 'GET', path: '/devices', desc: 'List linked devices', version: 'v2026-04' },
				{ method: 'POST', path: '/webhooks', desc: 'Register a webhook', version: 'v2026-04' },
				{ method: 'GET', path: '/account/usage', desc: 'Usage and billing', version: 'v2026-04' },
				{ method: 'GET', path: '/status', desc: 'API status', version: 'v2026-04' }
			]
		},
		auth: {
			eyebrow: 'Authentication',
			title: 'How to authenticate.',
			items: [
				{ key: 'Method', value: 'Bearer token in the Authorization header' },
				{ key: 'Token', value: 'Generated from the control panel' },
				{ key: 'Permissions', value: 'Read, write and administration' },
				{ key: 'Rotation', value: 'Tokens expire after 90 days' }
			]
		},
		limits: {
			eyebrow: 'Limits',
			title: 'Rate limits and quotas.',
			items: [
				{ key: 'Rate limit', value: '10,000 req/min per token' },
				{ key: 'Payload size', value: '10 MB per request' },
				{ key: 'Webhooks', value: 'Retries with exponential backoff' },
				{ key: 'Pagination', value: 'Cursor-based, 100 items per page' }
			]
		},
		sdks: {
			eyebrow: 'SDKs',
			title: 'Official SDKs.',
			items: [
				{ name: 'Node.js', version: 'v4.2.0', min: 'Node 18+' },
				{ name: 'Python', version: 'v3.1.0', min: 'Python 3.10+' },
				{ name: 'Go', version: 'v2.0.0', min: 'Go 1.22+' },
				{ name: 'Java', version: 'v1.5.0', min: 'Java 17+' },
				{ name: 'Ruby', version: 'v1.2.0', min: 'Ruby 3.2+' },
				{ name: 'PHP', version: 'v2.1.0', min: 'PHP 8.2+' }
			]
		},
		stats: {
			eyebrow: 'Figures',
			title: 'The API in numbers.',
			items: [
				{ value: '2.4 B', label: 'Requests/day' },
				{ value: '45 ms', label: 'p50 latency' },
				{ value: '3', label: 'Active regions' },
				{ value: '99.98%', label: 'Availability' }
			],
			cta: { label: 'See integrations', href: '/integraciones/' }
		}
	}
};