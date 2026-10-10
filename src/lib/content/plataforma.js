export default {
	es: {
		meta: {
			title: 'Plataforma',
			description: 'Nexora One, NCloud y NCode: una plataforma propia que conecta silicio, nube y herramientas.'
		},
		hero: {
			eyebrow: 'Plataforma Nexora',
			title: 'La pila es propia, de extremo a extremo.',
			lead: 'Nexora One agrupa los servicios. NCloud los ejecuta. NCode los construye. Ninguno funciona del todo sin los otros dos.',
			primary: { label: 'Ver precios', href: '/precios/' },
			secondary: { label: 'Ver integraciones', href: '/integraciones/' }
		},
		layers: {
			items: [
				{
					id: 'one',
					n: '01',
					name: 'Nexora One',
					kind: 'Suscripción',
					text: 'Un solo plan para almacenamiento, respaldo, herramientas y soporte. Se activa desde cualquier dispositivo Nexora.',
					cta: { label: 'Ver Nexora One', href: '/precios/' },
					specs: [
						{ key: 'includes', value: 'Core' },
						{ key: 'devices', value: '10' },
						{ key: 'support', value: '24/7' },
						{ key: 'regions', value: 'Global' }
					]
				},
				{
					id: 'ncloud',
					n: '02',
					name: 'NCloud',
					kind: 'Infraestructura',
					text: 'Centro de datos propio en Colombia, SLA del 99,98 % y una API REST y CLI documentada como producto de primera clase.',
					cta: { label: 'Ver documentación', href: '/recursos/documentacion/' },
					specs: [
						{ key: 'region', value: 'Colombia' },
						{ key: 'compute', value: 'N1 / N2 X' },
						{ key: 'api', value: 'REST + CLI' },
						{ key: 'support', value: '24/7' }
					]
				},
				{
					id: 'ncode',
					n: '03',
					name: 'NCode',
					kind: 'Herramientas',
					text: 'Editor oficial con catorce lenguajes, integración directa con NCloud y una tienda de extensiones auditadas.',
					cta: { label: 'Ver NCode', href: '/recursos/documentacion/' },
					specs: [
						{ key: 'languages', value: '14' },
						{ key: 'ext', value: 'Mercado' },
						{ key: 'license', value: 'Nexora One' }
					]
				}
			]
		},
		impact: {
			eyebrow: 'Impacto',
			title: 'Números que no dependen de terceros.',
			items: [
				{ value: '99,98 %', label: 'Disponibilidad de NCloud' },
				{ value: '4', label: 'Centros de datos' },
				{ value: '3', label: 'Regiones activas' },
				{ value: '14', label: 'Lenguajes en NCode' }
			]
		}
	},
	en: {
		meta: {
			title: 'Platform',
			description: 'Nexora One, NCloud and NCode: a proprietary platform connecting silicon, cloud and tooling.'
		},
		hero: {
			eyebrow: 'Nexora Platform',
			title: 'The stack is proprietary, end to end.',
			lead: 'Nexora One bundles the services. NCloud runs them. NCode builds them. None of them is complete without the other two.',
			primary: { label: 'See pricing', href: '/precios/' },
			secondary: { label: 'See integrations', href: '/integraciones/' }
		},
		layers: {
			items: [
				{
					id: 'one',
					n: '01',
					name: 'Nexora One',
					kind: 'Subscription',
					text: 'One plan for storage, backup, tooling and support. Activates from any Nexora device.',
					cta: { label: 'See Nexora One', href: '/precios/' },
					specs: [
						{ key: 'includes', value: 'Core' },
						{ key: 'devices', value: '10' },
						{ key: 'support', value: '24/7' },
						{ key: 'regions', value: 'Global' }
					]
				},
				{
					id: 'ncloud',
					n: '02',
					name: 'NCloud',
					kind: 'Infrastructure',
					text: 'Our own data center in Colombia, a 99.98% SLA and a REST and CLI API treated as a first-class product.',
					cta: { label: 'See documentation', href: '/recursos/documentacion/' },
					specs: [
						{ key: 'region', value: 'Colombia' },
						{ key: 'compute', value: 'N1 / N2 X' },
						{ key: 'api', value: 'REST + CLI' },
						{ key: 'support', value: '24/7' }
					]
				},
				{
					id: 'ncode',
					n: '03',
					name: 'NCode',
					kind: 'Tooling',
					text: 'The official editor with fourteen languages, direct NCloud integration and a curated extension store.',
					cta: { label: 'See NCode', href: '/recursos/documentacion/' },
					specs: [
						{ key: 'languages', value: '14' },
						{ key: 'ext', value: 'Marketplace' },
						{ key: 'license', value: 'Nexora One' }
					]
				}
			]
		},
		impact: {
			eyebrow: 'Impact',
			title: 'Numbers that do not depend on anyone else.',
			items: [
				{ value: '99.98%', label: 'NCloud availability' },
				{ value: '4', label: 'Data centers' },
				{ value: '3', label: 'Active regions' },
				{ value: '14', label: 'Languages in NCode' }
			]
		}
	}
};