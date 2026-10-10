export default {
	es: {
		meta: {
			title: 'Estado del servicio',
			description: 'Disponibilidad actual e histórica de los servicios de Nexora.'
		},
		status: {
			eyebrow: 'Estado del servicio',
			title: 'Todos los sistemas operativos',
			updated: 'Actualizado hace 5 min',
			subscribe: 'Suscribirse a actualizaciones'
		},
		services: {
			eyebrow: 'Servicios',
			title: 'Disponibilidad por servicio.',
			items: [
				{ name: 'NCloud API', status: 'Operativo', uptime: 99.99 },
				{ name: 'NCloud Panel', status: 'Operativo', uptime: 99.98 },
				{ name: 'NCode', status: 'Operativo', uptime: 100.0 },
				{ name: 'Nexora One', status: 'Operativo', uptime: 99.97 },
				{ name: 'Autenticación', status: 'Operativo', uptime: 99.99 },
				{ name: 'Webhooks', status: 'Operativo', uptime: 99.95 },
				{ name: 'Documentación', status: 'Operativo', uptime: 100.0 },
				{ name: 'Tienda', status: 'Operativo', uptime: 99.96 }
			]
		},
		history: {
			eyebrow: 'Historial',
			title: 'Últimos 90 días.',
			items: [
				{ date: '2026-09-11', duration: '23 min', title: 'Degradación de latencia en co-bog', cause: 'Fallo en un switch del data center', resolution: 'Se reemplazó el switch y se restauró la redundancia.' },
				{ date: '2026-08-02', duration: '47 min', title: 'Intermitencia en autenticación', cause: 'Sobrecarga en el servicio de tokens', resolution: 'Se escaló horizontalmente el servicio.' },
				{ date: '2026-06-18', duration: '12 min', title: 'Errores 5xx en webhooks', cause: 'Bug en el retry queue', resolution: 'Se desplegó el fix y se reintentaron los envíos.' }
			]
		},
		subscribe: {
			eyebrow: 'Suscripción',
		 title: 'Recibe alertas de estado.',
			lead: 'Te avisamos por correo cuando haya un incidente o mantenimiento programado.',
			placeholder: 'tu@correo.com',
			button: 'Suscribirse',
			note: 'Solo enviamos alertas de estado. Nada de marketing.'
		}
	},
	en: {
		meta: {
			title: 'Service status',
			description: 'Current and historical availability of Nexora services.'
		},
		status: {
			eyebrow: 'Service status',
			title: 'All systems operational',
			updated: 'Updated 5 min ago',
			subscribe: 'Subscribe to updates'
		},
		services: {
			eyebrow: 'Services',
			title: 'Availability by service.',
			items: [
				{ name: 'NCloud API', status: 'Operational', uptime: 99.99 },
				{ name: 'NCloud Panel', status: 'Operational', uptime: 99.98 },
				{ name: 'NCode', status: 'Operational', uptime: 100.0 },
				{ name: 'Nexora One', status: 'Operational', uptime: 99.97 },
				{ name: 'Authentication', status: 'Operational', uptime: 99.99 },
				{ name: 'Webhooks', status: 'Operational', uptime: 99.95 },
				{ name: 'Documentation', status: 'Operational', uptime: 100.0 },
				{ name: 'Store', status: 'Operational', uptime: 99.96 }
			]
		},
		history: {
			eyebrow: 'History',
			title: 'Last 90 days.',
			items: [
				{ date: '2026-09-11', duration: '23 min', title: 'Latency degradation in co-bog', cause: 'Switch failure in the data center', resolution: 'The switch was replaced and redundancy restored.' },
				{ date: '2026-08-02', duration: '47 min', title: 'Authentication intermittency', cause: 'Token service overload', resolution: 'The service was scaled horizontally.' },
				{ date: '2026-06-18', duration: '12 min', title: '5xx errors in webhooks', cause: 'Bug in the retry queue', resolution: 'The fix was deployed and deliveries retried.' }
			]
		},
		subscribe: {
			eyebrow: 'Subscription',
			title: 'Get status alerts.',
			lead: 'We email you when there is an incident or scheduled maintenance.',
			placeholder: 'you@email.com',
			button: 'Subscribe',
			note: 'We only send status alerts. No marketing.'
		}
	}
};