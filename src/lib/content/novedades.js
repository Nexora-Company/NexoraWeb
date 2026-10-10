export default {
	es: {
		meta: {
			title: 'Novedades',
			description: 'Comunicados de prensa, lanzamientos de producto y registro de cambios de Nexora.'
		},
		hero: {
			eyebrow: 'Sala de prensa',
			title: 'Lo último en Nexora.',
			lead: 'Comunicados oficiales, lanzamientos de producto y el registro de cambios de nuestro software.',
			primary: { label: 'Ver estado del servicio', href: '/recursos/estado/' },
			secondary: { label: 'Contacto de prensa', href: '/empresa/contacto/' }
		},
		press: {
			eyebrow: 'Comunicados',
			title: 'Notas de prensa.',
			items: [
				{ date: '2026-09-24', kind: 'Producto', title: 'NPhone 27 Ultra ya disponible en toda la región', text: 'Chip N2 X, cámara de 200 MP y batería de 5.400 mAh. Reserva desde el 1 de octubre.' },
				{ date: '2026-09-11', kind: 'Plataforma', title: 'NCloud abre su región de Colombia al público', text: 'Cómputo, almacenamiento y procesamiento en el borde desde un centro de datos en Cundinamarca.' },
				{ date: '2026-08-30', kind: 'Compañía', title: 'Nexora alcanza 4.100 empleados en 19 países', text: 'La compañía abre 300 puestos en ingeniería de silicio, seguridad e infraestructura.' },
				{ date: '2026-08-15', kind: 'Seguridad', title: 'Actualización de seguridad para NPhone 26 y 27', text: 'Parches para vulnerabilidades críticas en el stack de conectividad. Actualización recomendada.' },
				{ date: '2026-07-22', kind: 'Producto', title: 'NexaPods Max llega a Colombia', text: 'Auriculares over-ear con ANC adaptativa y 40 horas de batería.' },
				{ date: '2026-06-10', kind: 'Plataforma', title: 'NCode 4.0 con soporte para 14 lenguajes', text: 'El editor oficial de Nexora añade Rust, Go y TypeScript nativo.' }
			]
		},
		changelog: {
			eyebrow: 'Registro de cambios',
			title: 'Versiones de software.',
			items: [
				{ version: 'NCloud 2026.09', date: '2026-09-11', notes: 'Nueva región co-bog. Mejora del 40 % en latencia p50. Nuevo endpoint /compute/instances.' },
				{ version: 'NCode 4.0', date: '2026-06-10', notes: 'Soporte para 14 lenguajes. Integración nativa con NCloud. Nuevo sistema de extensiones.' },
				{ version: 'Nexora One 3.2', date: '2026-05-01', notes: 'Controles parentales. Compartición de almacenamiento familiar. Mejoras en facturación.' },
				{ version: 'NPhone 27 1.0', date: '2026-04-15', notes: 'Primera versión estable. Chip N2 X. Cámara de 200 MP. Batería de 5.400 mAh.' }
			]
		},
		stats: {
			eyebrow: 'La compañía',
			title: 'Números que no dependen de terceros.',
			items: [
				{ value: '4.100', label: 'Personas en 19 países' },
				{ value: '29', label: 'Referencias en catálogo' },
				{ value: '68 %', label: 'Componentes de diseño interno' },
				{ value: '99,98 %', label: 'Disponibilidad de NCloud' }
			]
		}
	},
	en: {
		meta: {
			title: 'Newsroom',
			description: 'Press releases, product launches and the Nexora changelog.'
		},
		hero: {
			eyebrow: 'Newsroom',
			title: 'Latest from Nexora.',
			lead: 'Official press releases, product launches and our software changelog.',
			primary: { label: 'See service status', href: '/recursos/estado/' },
			secondary: { label: 'Press contact', href: '/empresa/contacto/' }
		},
		press: {
			eyebrow: 'Press releases',
			title: 'Press notes.',
			items: [
				{ date: '2026-09-24', kind: 'Product', title: 'NPhone 27 Ultra is available across the region', text: 'N2 X chip, 200 MP camera and a 5,400 mAh battery. Preorders open October 1.' },
				{ date: '2026-09-11', kind: 'Platform', title: 'NCloud opens its Colombia region to the public', text: 'Compute, storage and edge processing in a data center in Cundinamarca.' },
				{ date: '2026-08-30', kind: 'Company', title: 'Nexora reaches 4,100 employees in 19 countries', text: 'The company opens 300 roles in silicon engineering, security and infrastructure.' },
				{ date: '2026-08-15', kind: 'Security', title: 'Security update for NPhone 26 and 27', text: 'Patches for critical vulnerabilities in the connectivity stack. Recommended update.' },
				{ date: '2026-07-22', kind: 'Product', title: 'NexaPods Max arrives in Colombia', text: 'Over-ear headphones with adaptive ANC and 40 hours of battery.' },
				{ date: '2026-06-10', kind: 'Platform', title: 'NCode 4.0 with support for 14 languages', text: 'The official Nexora editor adds Rust, Go and native TypeScript.' }
			]
		},
		changelog: {
			eyebrow: 'Changelog',
			title: 'Software versions.',
			items: [
				{ version: 'NCloud 2026.09', date: '2026-09-11', notes: 'New co-bog region. 40% improvement in p50 latency. New /compute/instances endpoint.' },
				{ version: 'NCode 4.0', date: '2026-06-10', notes: 'Support for 14 languages. Native NCloud integration. New extension system.' },
				{ version: 'Nexora One 3.2', date: '2026-05-01', notes: 'Parental controls. Family storage sharing. Billing improvements.' },
				{ version: 'NPhone 27 1.0', date: '2026-04-15', notes: 'First stable version. N2 X chip. 200 MP camera. 5,400 mAh battery.' }
			]
		},
		stats: {
			eyebrow: 'The company',
			title: 'Numbers that do not depend on anyone else.',
			items: [
				{ value: '4,100', label: 'People across 19 countries' },
				{ value: '29', label: 'References in the catalog' },
				{ value: '68%', label: 'Components designed in-house' },
				{ value: '99.98%', label: 'NCloud availability' }
			]
		}
	}
};