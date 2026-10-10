export default {
	es: {
		meta: {
			title: 'Integraciones',
			description: 'Conecta Nexora con tu stack actual: API REST, SDKs, webhooks y verticales sectoriales.'
		},
		hero: {
			eyebrow: 'Integraciones',
			title: 'Se conecta con lo que ya usas.',
			lead: 'Una API estable, documentada y versionada. Sin listas de excepción en los términos y sin cambios incompatibles sin avisar con meses de antelación.',
			primary: { label: 'Ver la API', href: '/recursos/api/' },
			secondary: { label: 'Documentación', href: '/recursos/documentacion/' }
		},
		industries: {
			eyebrow: 'Verticales',
			title: 'Dónde se usa Nexora hoy.',
			items: [
				{ name: 'Banca y pagos', desc: 'Pagos P2P, conciliación y análisis de fraude en tiempo real con procesamiento on-device.' },
				{ name: 'Logística', desc: 'Rastreo en tiempo real, optimización de rutas y gestión de flotas con NexaHub.' },
				{ name: 'Salud', desc: 'Telemonitoreo, historias clínicas sincronizadas y dispositivos wearables para pacientes.' },
				{ name: 'Gobierno', desc: 'Infraestructura soberana, trámites digitales y servicios ciudadanos con datos en Colombia.' },
				{ name: 'Educación', desc: 'Dispositivos para aulas, laboratorios y campus con NexaTab y NexaBook.' },
				{ name: 'Retail', desc: 'POS, inventario y experiencia omnicanal con NexaOne y NexaCam.' }
			]
		},
		code: {
			eyebrow: 'Ejemplo',
			title: 'Primer petición en 30 segundos.',
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
		contract: {
			eyebrow: 'Contrato',
			title: 'Reglas claras, sin letra chica.',
			items: [
				{ key: 'Versionado', value: 'URI con fecha (v2026-04). Las versiones activas conviven 24 meses.' },
				{ key: 'SLA', value: '99,98 % mensual. Crédito automático si no se cumple.' },
				{ key: 'Límites de tasa', value: '10 000 req/min por token. Escalado bajo acuerdo.' },
				{ key: 'Entorno de pruebas', value: 'Sandbox gratuito con datos sintéticos y límites separados.' },
				{ key: 'Webhooks', value: 'Firma HMAC-SHA256, reintentos con backoff y retención de 7 días.' },
				{ key: 'Cambios', value: 'Aviso de 60 días. Las deprecaciones se publican en el changelog.' }
			],
			cta: { label: 'Ver la referencia completa', href: '/recursos/api/' }
		}
	},
	en: {
		meta: {
			title: 'Integrations',
			description: 'Connect Nexora to your current stack: REST API, SDKs, webhooks and industry verticals.'
		},
		hero: {
			eyebrow: 'Integrations',
			title: 'It connects to what you already use.',
			lead: 'A stable, documented, versioned API. No exception lists in the terms and no breaking changes without months of notice.',
			primary: { label: 'See the API', href: '/recursos/api/' },
			secondary: { label: 'Documentation', href: '/recursos/documentacion/' }
		},
		industries: {
			eyebrow: 'Verticals',
			title: 'Where Nexora is used today.',
			items: [
				{ name: 'Banking and payments', desc: 'P2P payments, reconciliation and real-time fraud analytics with on-device processing.' },
				{ name: 'Logistics', desc: 'Real-time tracking, route optimization and fleet management with NexaHub.' },
				{ name: 'Health', desc: 'Remote monitoring, synced medical records and wearable devices for patients.' },
				{ name: 'Government', desc: 'Sovereign infrastructure, digital procedures and citizen services with data in Colombia.' },
				{ name: 'Education', desc: 'Classroom, lab and campus devices with NexaTab and NexaBook.' },
				{ name: 'Retail', desc: 'POS, inventory and omnichannel experience with NexaOne and NexaCam.' }
			]
		},
		code: {
			eyebrow: 'Example',
			title: 'First request in 30 seconds.',
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
		contract: {
			eyebrow: 'Contract',
			title: 'Clear rules, no fine print.',
			items: [
				{ key: 'Versioning', value: 'Dated URI (v2026-04). Active versions coexist for 24 months.' },
				{ key: 'SLA', value: '99.98% monthly. Automatic credit if not met.' },
				{ key: 'Rate limits', value: '10,000 req/min per token. Scaling under agreement.' },
				{ key: 'Test environment', value: 'Free sandbox with synthetic data and separate limits.' },
				{ key: 'Webhooks', value: 'HMAC-SHA256 signature, backoff retries and 7-day retention.' },
				{ key: 'Changes', value: '60-day notice. Deprecations are published in the changelog.' }
			],
			cta: { label: 'See the full reference', href: '/recursos/api/' }
		}
	}
};