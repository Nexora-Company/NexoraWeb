export default {
	es: {
		meta: {
			title: 'Precios',
			description: 'Planes de Nexora One y precios de hardware en Colombia. Sin sorpresas, sin letra chica.'
		},
		hero: {
			eyebrow: 'Precios',
			title: 'Un plan. Todos los servicios.',
			lead: 'Nexora One agrupa almacenamiento, respaldo, herramientas y soporte en una sola suscripción. El hardware se paga una vez.',
			note: 'Facturación mensual · Cancela cuando quieras'
		},
		plans: {
			items: [
				{
					name: 'Nexora One Personal',
					price: '$39.900',
					period: '/mes',
					desc: 'Para una persona. Todo lo esencial de NCloud y NCode.',
					features: [
						'2 TB de almacenamiento en NCloud',
						'Respaldo automático de 3 dispositivos',
						'NCode con 14 lenguajes',
						'Soporte por correo en 24 h',
						'Acceso a la comunidad'
					],
					cta: { label: 'Empezar', href: '/empresa/contacto/' },
					featured: false
				},
				{
					name: 'Nexora One Familia',
					price: '$69.900',
					period: '/mes',
					desc: 'Hasta 6 personas. El plan más elegido.',
					features: [
						'10 TB de almacenamiento compartido',
						'Respaldo de hasta 10 dispositivos',
						'NCode Pro con extensiones',
						'Soporte prioritario 24/7',
						'Controles parentales',
						'Acceso a la comunidad'
					],
					cta: { label: 'Empezar', href: '/empresa/contacto/' },
					featured: true
				},
				{
					name: 'Nexora One Negocio',
					price: '$199.900',
					period: '/mes',
					desc: 'Para equipos y empresas. Administración centralizada.',
					features: [
						'50 TB de almacenamiento',
		'Dispositivos ilimitados',
						'NCode Enterprise',
						'SLA del 99,98 % con crédito',
						'Soporte dedicado 24/7',
						'Facturación consolidada',
						'Acceso a la comunidad'
					],
					cta: { label: 'Hablar con ventas', href: '/empresa/contacto/' },
					featured: false
				}
			],
			note: 'Facturación anual: ahorra 2 meses. IVA incluido en Colombia.'
		},
		hardware: {
			eyebrow: 'Hardware',
			title: 'Precios de salida en Colombia.',
			lead: 'Precios de referencia en COP. Disponibilidad y financiación varían por región.',
			items: [
				{ name: 'NPhone 27', price: '$1.899.000' },
				{ name: 'NPhone 27 Ultra', price: '$3.499.000' },
				{ name: 'NexaBook', price: '$2.499.000' },
				{ name: 'NexaBook Ultra', price: '$5.999.000' },
				{ name: 'NexaTab Plus', price: '$1.799.000' },
				{ name: 'NexaPods Ultra', price: '$899.000' }
			],
			cta: { label: 'Ver todo el catálogo', href: '/explorar/' }
		},
		faq: {
			eyebrow: 'Preguntas frecuentes',
			title: 'Antes de pagar, esto es lo que necesitas saber.',
			items: [
				{ q: '¿Puedo cancelar en cualquier momento?', a: 'Sí. La suscripción se renueva mensualmente y puedes cancelar desde tu cuenta. No hay permanencia ni penalización.' },
				{ q: '¿Qué incluye el IVA?', a: 'Todos los precios en Colombia incluyen IVA. Para otros países, el IVA se calcula según la normativa local.' },
				{ q: '¿Hay descuento por pago anual?', a: 'Sí. La facturación anual equivale a 10 meses: ahorras 2 meses sobre el precio mensual.' },
				{ q: '¿NCloud tiene región en Colombia?', a: 'Sí. La región principal está en Cundinamarca, con réplica en Brasil y España.' },
				{ q: '¿Qué pasa si supero mi límite de almacenamiento?', a: 'Te avisamos al 80 % y al 100 %. Puedes ampliar o reducir tu plan en cualquier momento.' },
				{ q: '¿El soporte está incluido?', a: 'Sí. Todos los planes incluyen soporte. Negocio tiene soporte dedicado con SLA.' }
			]
		}
	},
	en: {
		meta: {
			title: 'Pricing',
			description: 'Nexora One plans and hardware pricing in Colombia. No surprises, no fine print.'
		},
		hero: {
			eyebrow: 'Pricing',
			title: 'One plan. Every service.',
			lead: 'Nexora One bundles storage, backup, tooling and support in a single subscription. Hardware is paid once.',
			note: 'Monthly billing · Cancel anytime'
		},
		plans: {
			items: [
				{
					name: 'Nexora One Personal',
					price: '$39,900',
					period: '/mo',
					desc: 'For one person. Everything essential in NCloud and NCode.',
					features: [
						'2 TB of NCloud storage',
						'Automatic backup for 3 devices',
						'NCode with 14 languages',
						'Email support within 24 h',
						'Community access'
					],
					cta: { label: 'Get started', href: '/empresa/contacto/' },
					featured: false
				},
				{
					name: 'Nexora One Family',
					price: '$69,900',
					period: '/mo',
					desc: 'Up to 6 people. The most chosen plan.',
					features: [
						'10 TB of shared storage',
						'Backup for up to 10 devices',
						'NCode Pro with extensions',
						'24/7 priority support',
						'Parental controls',
						'Community access'
					],
					cta: { label: 'Get started', href: '/empresa/contacto/' },
					featured: true
				},
				{
					name: 'Nexora One Business',
					price: '$199,900',
					period: '/mo',
					desc: 'For teams and companies. Centralized administration.',
					features: [
						'50 TB of storage',
						'Unlimited devices',
						'NCode Enterprise',
						'99.98% SLA with credit',
						'Dedicated 24/7 support',
						'Consolidated billing',
						'Community access'
					],
					cta: { label: 'Talk to sales', href: '/empresa/contacto/' },
					featured: false
				}
			],
			note: 'Annual billing: save 2 months. VAT included in Colombia.'
		},
		hardware: {
			eyebrow: 'Hardware',
			title: 'Starting prices in Colombia.',
			lead: 'Reference prices in COP. Availability and financing vary by region.',
			items: [
				{ name: 'NPhone 27', price: '$1,899,000' },
				{ name: 'NPhone 27 Ultra', price: '$3,499,000' },
				{ name: 'NexaBook', price: '$2,499,000' },
				{ name: 'NexaBook Ultra', price: '$5,999,000' },
				{ name: 'NexaTab Plus', price: '$1,799,000' },
				{ name: 'NexaPods Ultra', price: '$899,000' }
			],
			cta: { label: 'See the full catalog', href: '/explorar/' }
		},
		faq: {
			eyebrow: 'FAQ',
			title: 'Before you pay, here is what you need to know.',
			items: [
				{ q: 'Can I cancel at any time?', a: 'Yes. The subscription renews monthly and you can cancel from your account. No commitment or penalty.' },
				{ q: 'Is VAT included?', a: 'All prices in Colombia include VAT. For other countries, VAT is calculated according to local regulations.' },
				{ q: 'Is there a discount for annual payment?', a: 'Yes. Annual billing equals 10 months: you save 2 months over the monthly price.' },
				{ q: 'Does NCloud have a region in Colombia?', a: 'Yes. The main region is in Cundinamarca, with replication in Brazil and Spain.' },
				{ q: 'What happens if I exceed my storage limit?', a: 'We notify you at 80% and 100%. You can upgrade or downgrade your plan at any time.' },
				{ q: 'Is support included?', a: 'Yes. All plans include support. Business has dedicated support with SLA.' }
			]
		}
	}
};