/** Portada. ES y EN en el mismo archivo para que la traducción se revise en paralelo. */

export default {
	es: {
		meta: {
			title: 'Nexora',
			description:
				'Diseñamos silicio, sistema, nube y dispositivos. Veintinueve productos, seis familias y una sola compañía.'
		},
		hero: {
			eyebrow: 'Nexora · Colombia · Desde 2016',
			title: 'Construimos la pila entera.',
			lead: 'Diseñamos nuestros propios chips, el sistema que corre sobre ellos, la nube que los sostiene y los dispositivos que la gente usa cada día.',
			primary: { label: 'Explorar el catálogo', href: '/explorar/' },
			secondary: { label: 'Conoce la plataforma', href: '/plataforma/' },
			note: 'Veintinueve productos · Seis familias · Un solo lenguaje de diseño'
		},
		statement: {
			eyebrow: 'Qué somos',
			title: 'No ensamblamos. Integramos.',
			lead: 'La mayoría de las compañías se contenta con diseñar la carcasa. Nosotros usamos el orden inverso: primero el chip, después el sistema, y al final el objeto que la gente toca.',
			items: [
				{
					n: '01',
					title: 'Silicio propio',
					text: 'N1, N1 Pro y N2 X se diseñan en Bogotá y se producen en una línea propia. Cada decisión de consumo, temperatura y área es nuestra.'
				},
				{
					n: '02',
					title: 'Software propio',
					text: 'NCode, NCloud y Nexora One. El sistema y las herramientas los escribe el mismo equipo que diseña el hardware que los corre.'
				},
				{
					n: '03',
					title: 'Diseño propio',
					text: 'Veintinueve referencias, seis familias y una única gramática industrial: mismo radio, mismo filo, mismo peso en la mano.'
				},
				{
					n: '04',
					title: 'Escala real',
					text: 'Tres fábricas, cuatro centros de datos y 4.100 personas en diecinueve países trabajando sobre la misma pila.'
				}
			]
		},
		platform: {
			eyebrow: 'Plataforma',
			title: 'Tres piezas que se sostienen entre sí.',
			lead: 'Nexora One agrupa los servicios. NCloud los ejecuta. NCode los construye. Ninguno funciona del todo sin los otros dos.',
			items: [
				{
					id: 'one',
					name: 'Nexora One',
					kind: 'Suscripción',
					text: 'Un solo plan para almacenamiento, respaldo, herramientas y soporte. Se activa desde cualquier dispositivo Nexora.',
					cta: { label: 'Ver Nexora One', href: '/plataforma/#one' }
				},
				{
					id: 'ncloud',
					name: 'NCloud',
					kind: 'Infraestructura',
					text: 'Centro de datos propio en Colombia, SLA del 99,98 % y una API REST y CLI documentada como producto de primera clase.',
					cta: { label: 'Ver NCloud', href: '/plataforma/#ncloud' }
				},
				{
					id: 'ncode',
					name: 'NCode',
					kind: 'Herramientas',
					text: 'Editor oficial con catorce lenguajes, integración directa con NCloud y una tienda de extensiones auditadas.',
					cta: { label: 'Ver NCode', href: '/plataforma/#ncode' }
				}
			]
		},
		catalog: {
			eyebrow: 'Catálogo',
			title: 'Seis familias. Un solo sistema.',
			lead: 'Cada familia comparte lenguaje de interfaz, sistema de archivos y cuenta. Lo que aprendes en un dispositivo Nexora funciona en todos los demás.',
			cta: { label: 'Ver las 29 referencias', href: '/explorar/' },
			references: 'referencias'
		},
		figures: {
			eyebrow: 'La compañía',
			title: 'Números que no dependen de terceros.',
			items: [
				{ value: '4.100', label: 'Personas en 19 países' },
				{ value: '29', label: 'Referencias en catálogo' },
				{ value: '68 %', label: 'Componentes de diseño interno' },
				{ value: '99,98 %', label: 'Disponibilidad de NCloud' }
			]
		},
		integrations: {
			eyebrow: 'Integraciones',
			title: 'Se conecta con lo que ya usas.',
			lead: 'Una API estable, documentada y versionada. Sin listas de excepción en los términos y sin cambios incompatibles sin avisar con meses de antelación.',
			cta: { label: 'Ver integraciones', href: '/integraciones/' },
			items: ['Banca y pagos', 'Logística', 'Salud', 'Gobierno', 'Educación', 'Retail']
		},
		news: {
			eyebrow: 'Novedades',
			title: 'Lo último en Nexora.',
			cta: { label: 'Todas las novedades', href: '/novedades/' },
			items: [
				{
					date: '2026-09-24',
					kind: 'Producto',
					title: 'NPhone 27 Ultra ya disponible en toda la región',
					text: 'Chip N2 X, cámara de 200 MP y batería de 5.400 mAh. Reserva desde el 1 de octubre.'
				},
				{
					date: '2026-09-11',
					kind: 'Plataforma',
					title: 'NCloud abre su región de Colombia al público',
					text: 'Cómputo, almacenamiento y procesamiento en el borde desde un centro de datos en Cundinamarca.'
				},
				{
					date: '2026-08-30',
					kind: 'Compañía',
					title: 'Nexora alcanza 4.100 empleados en 19 países',
					text: 'La compañía abre 300 puestos en ingeniería de silicio, seguridad e infraestructura.'
				}
			]
		},
		cta: {
			title: 'Empieza por Nexora One.',
			lead: 'Un plan, todos los servicios, todos tus dispositivos.',
			primary: { label: 'Ver precios', href: '/precios/' },
			secondary: { label: 'Hablar con ventas', href: '/empresa/contacto/' }
		}
	},

	en: {
		meta: {
			title: 'Nexora',
			description:
				'We design silicon, the system, the cloud and the devices. Twenty-nine products, six families, one company.'
		},
		hero: {
			eyebrow: 'Nexora · Colombia · Since 2016',
			title: 'We build the whole stack.',
			lead: 'We design our own chips, the system that runs on them, the cloud that holds them up and the devices people carry every day.',
			primary: { label: 'Explore the catalog', href: '/explorar/' },
			secondary: { label: 'See the platform', href: '/plataforma/' },
			note: 'Twenty-nine products · Six families · One design language'
		},
		statement: {
			eyebrow: 'What we are',
			title: 'We do not assemble. We integrate.',
			lead: 'Most companies settle for designing the shell. We work the order backwards: chip first, then the system, then the object people actually touch.',
			items: [
				{
					n: '01',
					title: 'Our own silicon',
					text: 'N1, N1 Pro and N2 X are designed in Bogotá and produced on our own line. Every power, thermal and area decision is ours.'
				},
				{
					n: '02',
					title: 'Our own software',
					text: 'NCode, NCloud and Nexora One. The system and the tools are written by the same team that designs the hardware they run on.'
				},
				{
					n: '03',
					title: 'Our own design',
					text: 'Twenty-nine references, six families and a single industrial grammar: same radius, same edge, same weight in the hand.'
				},
				{
					n: '04',
					title: 'Real scale',
					text: 'Three factories, four data centers and 4,100 people in nineteen countries working on the same stack.'
				}
			]
		},
		platform: {
			eyebrow: 'Platform',
			title: 'Three pieces that hold each other up.',
			lead: 'Nexora One bundles the services. NCloud runs them. NCode builds them. None of them is complete without the other two.',
			items: [
				{
					id: 'one',
					name: 'Nexora One',
					kind: 'Subscription',
					text: 'One plan for storage, backup, tooling and support. Activates from any Nexora device.',
					cta: { label: 'See Nexora One', href: '/plataforma/#one' }
				},
				{
					id: 'ncloud',
					name: 'NCloud',
					kind: 'Infrastructure',
					text: 'Our own data center in Colombia, a 99.98% SLA and a REST and CLI API treated as a first-class product.',
					cta: { label: 'See NCloud', href: '/plataforma/#ncloud' }
				},
				{
					id: 'ncode',
					name: 'NCode',
					kind: 'Tooling',
					text: 'The official editor with fourteen languages, direct NCloud integration and a curated extension store.',
					cta: { label: 'See NCode', href: '/plataforma/#ncode' }
				}
			]
		},
		catalog: {
			eyebrow: 'Catalog',
			title: 'Six families. One system.',
			lead: 'Every family shares interface language, file system and account. What you learn on one Nexora device works on all the others.',
			cta: { label: 'See all 29 references', href: '/explorar/' },
			references: 'references'
		},
		figures: {
			eyebrow: 'The company',
			title: 'Numbers that do not depend on anyone else.',
			items: [
				{ value: '4,100', label: 'People across 19 countries' },
				{ value: '29', label: 'References in the catalog' },
				{ value: '68%', label: 'Components designed in-house' },
				{ value: '99.98%', label: 'NCloud availability' }
			]
		},
		integrations: {
			eyebrow: 'Integrations',
			title: 'It connects to what you already use.',
			lead: 'A stable, documented, versioned API. No exception lists in the terms and no breaking changes without months of notice.',
			cta: { label: 'See integrations', href: '/integraciones/' },
			items: ['Banking and payments', 'Logistics', 'Health', 'Government', 'Education', 'Retail']
		},
		news: {
			eyebrow: 'Newsroom',
			title: 'Latest from Nexora.',
			cta: { label: 'All updates', href: '/novedades/' },
			items: [
				{
					date: '2026-09-24',
					kind: 'Product',
					title: 'NPhone 27 Ultra is available across the region',
					text: 'N2 X chip, 200 MP camera and a 5,400 mAh battery. Preorders open October 1.'
				},
				{
					date: '2026-09-11',
					kind: 'Platform',
					title: 'NCloud opens its Colombia region to the public',
					text: 'Compute, storage and edge processing in a data center in Cundinamarca.'
				},
				{
					date: '2026-08-30',
					kind: 'Company',
					title: 'Nexora reaches 4,100 employees in 19 countries',
					text: 'The company opens 300 roles in silicon engineering, security and infrastructure.'
				}
			]
		},
		cta: {
			title: 'Start with Nexora One.',
			lead: 'One plan, every service, every device you own.',
			primary: { label: 'See pricing', href: '/precios/' },
			secondary: { label: 'Talk to sales', href: '/empresa/contacto/' }
		}
	}
};