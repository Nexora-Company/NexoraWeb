export default {
	es: {
		meta: {
			title: 'Blog',
			description: 'Notas del equipo de Nexora: ingeniería, diseño, seguridad y decisiones de producto.'
		},
		hero: {
			eyebrow: 'Blog',
			title: 'Notas del equipo.',
			lead: 'Lo que aprendemos construyendo silicio, sistema, nube y dispositivos. Sin filtros de marketing.',
			note: '128 artículos · 12 autores'
		},
		featured: {
			category: 'Ingeniería',
			title: 'Cómo diseñamos el chip N2 X en 18 meses',
			summary: 'Un chip no se diseña en una reunión. Este es el proceso real: arquitectura, verificación, tape-out y las decisiones que casi nos cuestan el proyecto.',
			author: 'Andrés Cárdenas',
			date: '2026-09-18',
			readTime: '14 min'
		},
		posts: {
			items: [
				{ category: 'Seguridad', title: 'Por qué procesamos la biometría on-device', summary: 'La biometría no sale del dispositivo. Esta es la arquitectura que lo hace posible y la auditoría que lo confirma.', author: 'María Fernanda López', date: '2026-09-05', readTime: '9 min' },
				{ category: 'Diseño', title: 'Un radio de 3 mm: la decisión que define un producto', summary: 'El radio de las esquinas no es estética. Es la diferencia entre un objeto que se siente bien y uno que se siente barato.', author: 'Valentina Ríos', date: '2026-08-22', readTime: '7 min' },
				{ category: 'Infraestructura', title: 'NCloud: 99,98 % de disponibilidad no es suerte', summary: 'Cómo diseñamos la redundancia, los failovers y los runbooks que mantienen la nube operativa.', author: 'Carlos Mendoza', date: '2026-08-10', readTime: '11 min' },
				{ category: 'Producto', title: 'Por qué NexaTab Ultra tiene 144 Hz', summary: 'La tasa de refresco no es un número de marketing. Es una decisión de sistema que afecta a la batería, el calor y la experiencia.', author: 'Diego Herrera', date: '2026-07-28', readTime: '6 min' },
				{ category: 'Comunidad', title: 'Lo que aprendimos de 2 millones de suscriptores', summary: 'Nexora One cumple un año. Esto es lo que nos dijeron los usuarios y lo que vamos a cambiar.', author: 'Ana Sofía Vargas', date: '2026-07-15', readTime: '8 min' },
				{ category: 'Ingeniería', title: 'El stack de conectividad de NPhone 27', summary: 'De la antena al módem: cómo integramos 5G, Wi-Fi 7 y UWB en un espacio de 0,5 mm².', author: 'Roberto Jiménez', date: '2026-06-30', readTime: '12 min' },
				{ category: 'Seguridad', title: 'Actualización de seguridad: qué parcheamos y por qué', summary: 'Transparencia sobre las vulnerabilidades críticas del stack de conectividad y cómo las resolvimos.', author: 'Equipo de Seguridad', date: '2026-08-15', readTime: '5 min' },
				{ category: 'Diseño', title: 'El peso importa: 189 gramos de decisiones', summary: 'Cada gramo del NPhone 27 Ultra es una decisión. Esta es la lista completa de lo que sacrificamos y lo que no.', author: 'Valentina Ríos', date: '2026-06-12', readTime: '10 min' },
				{ category: 'Infraestructura', title: 'Cómo migramos 2 PB de datos sin downtime', summary: 'La migración de NCloud a la nueva región de Cundinamarca. Cero downtime, cero datos perdidos.', author: 'Carlos Mendoza', date: '2026-05-20', readTime: '13 min' },
				{ category: 'Producto', title: 'NexaPods Max: 40 horas de batería en over-ear', summary: 'La batería no es solo capacidad. Es gestión térmica, eficiencia del amplificador y decisiones de firmware.', author: 'Diego Herrera', date: '2026-05-08', readTime: '7 min' }
			]
		},
		series: {
			eyebrow: 'Series',
			title: 'Temas recurrentes.',
			items: [
				{ name: 'Ingeniería de silicio', count: '18 artículos' },
				{ name: 'Seguridad y privacidad', count: '14 artículos' },
				{ name: 'Diseño industrial', count: '11 artículos' }
			]
		},
		newsletter: {
			eyebrow: 'Boletín',
			title: 'Recibe las notas del equipo.',
			lead: 'Un correo al mes con lo que estamos construyendo. Sin spam, sin marketing.',
			placeholder: 'tu@correo.com',
			button: 'Suscribirse',
			note: 'Al suscribirte aceptas nuestra política de privacidad.'
		}
	},
	en: {
		meta: {
			title: 'Blog',
			description: 'Notes from the Nexora team: engineering, design, security and product decisions.'
		},
		hero: {
			eyebrow: 'Blog',
			title: 'Notes from the team.',
			lead: 'What we learn building silicon, system, cloud and devices. No marketing filters.',
			note: '128 articles · 12 authors'
		},
		featured: {
			category: 'Engineering',
			title: 'How we designed the N2 X chip in 18 months',
			summary: 'A chip is not designed in a meeting. This is the real process: architecture, verification, tape-out and the decisions that almost cost us the project.',
			author: 'Andrés Cárdenas',
			date: '2026-09-18',
			readTime: '14 min'
		},
		posts: {
			items: [
				{ category: 'Security', title: 'Why we process biometrics on-device', summary: 'Biometrics never leave the device. This is the architecture that makes it possible and the audit that confirms it.', author: 'María Fernanda López', date: '2026-09-05', readTime: '9 min' },
				{ category: 'Design', title: 'A 3 mm radius: the decision that defines a product', summary: 'The corner radius is not aesthetics. It is the difference between an object that feels right and one that feels cheap.', author: 'Valentina Ríos', date: '2026-08-22', readTime: '7 min' },
				{ category: 'Infrastructure', title: 'NCloud: 99.98% availability is not luck', summary: 'How we designed redundancy, failovers and the runbooks that keep the cloud operational.', author: 'Carlos Mendoza', date: '2026-08-10', readTime: '11 min' },
				{ category: 'Product', title: 'Why NexaTab Ultra has 144 Hz', summary: 'Refresh rate is not a marketing number. It is a system decision that affects battery, heat and experience.', author: 'Diego Herrera', date: '2026-07-28', readTime: '6 min' },
				{ category: 'Community', title: 'What we learned from 2 million subscribers', summary: 'Nexora One turns one. This is what users told us and what we are going to change.', author: 'Ana Sofía Vargas', date: '2026-07-15', readTime: '8 min' },
				{ category: 'Engineering', title: 'The connectivity stack of NPhone 27', summary: 'From antenna to modem: how we integrated 5G, Wi-Fi 7 and UWB in 0.5 mm² of space.', author: 'Roberto Jiménez', date: '2026-06-30', readTime: '12 min' },
				{ category: 'Security', title: 'Security update: what we patched and why', summary: 'Transparency about critical vulnerabilities in the connectivity stack and how we resolved them.', author: 'Security Team', date: '2026-08-15', readTime: '5 min' },
				{ category: 'Design', title: 'Weight matters: 189 grams of decisions', summary: 'Every gram of the NPhone 27 Ultra is a decision. This is the complete list of what we sacrificed and what we did not.', author: 'Valentina Ríos', date: '2026-06-12', readTime: '10 min' },
				{ category: 'Infrastructure', title: 'How we migrated 2 PB of data with zero downtime', summary: 'The migration of NCloud to the new Cundinamarca region. Zero downtime, zero data loss.', author: 'Carlos Mendoza', date: '2026-05-20', readTime: '13 min' },
				{ category: 'Product', title: 'NexaPods Max: 40 hours of battery in over-ear', summary: 'Battery is not just capacity. It is thermal management, amplifier efficiency and firmware decisions.', author: 'Diego Herrera', date: '2026-05-08', readTime: '7 min' }
			]
		},
		series: {
			eyebrow: 'Series',
			title: 'Recurring topics.',
			items: [
				{ name: 'Silicon engineering', count: '18 articles' },
				{ name: 'Security and privacy', count: '14 articles' },
				{ name: 'Industrial design', count: '11 articles' }
			]
		},
		newsletter: {
			eyebrow: 'Newsletter',
			title: 'Get the team\'s notes.',
			lead: 'One email a month with what we are building. No spam, no marketing.',
			placeholder: 'you@email.com',
			button: 'Subscribe',
			note: 'By subscribing you accept our privacy policy.'
		}
	}
};