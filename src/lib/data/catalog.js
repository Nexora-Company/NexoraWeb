/**
 * Catálogo oficial de Nexora.
 * Fuente única de verdad: skill `product-catalog`. No se inventan sufijos
 * fuera de Plus / Ultra / Max / Studio, ni se referencian productos retirados.
 */

export const FAMILIES = [
	{
		id: 'pc',
		accent: 'var(--accent-pc)',
		label: 'Nexora PC'
	},
	{ id: 'mobile', accent: 'var(--accent-mobile)', label: 'Nexora Mobile' },
	{ id: 'audio', accent: 'var(--accent-audio)', label: 'Nexora Audio' },
	{
		id: 'wearables',
		accent: 'var(--accent-wearables)',
		label: 'Nexora Wearables'
	},
	{ id: 'home', accent: 'var(--accent-home)', label: 'Nexora Home' },
	{
		id: 'software',
		accent: 'var(--accent-software)',
		label: 'Nexora Software'
	}
];

export const CATALOG = [
	// Nexora PC
	{
		family: 'pc',
		name: 'NexaBook',
		tier: 'entry',
		shape: 'laptop',
		chip: 'N1',
		spec: { display: '13.6"', chip: 'N1', memory: '8 GB', battery: '18 h' }
	},
	{
		family: 'pc',
		name: 'NexaBook Plus',
		tier: 'balanced',
		shape: 'laptop',
		chip: 'N1 Pro',
		spec: { display: '15.4"', chip: 'N1 Pro', memory: '16 GB', battery: '20 h' }
	},
	{
		family: 'pc',
		name: 'NexaBook Ultra',
		tier: 'high',
		shape: 'laptop',
		chip: 'N2 X',
		spec: { display: '16.2"', chip: 'N2 X', memory: '32 GB', battery: '22 h' }
	},
	{
		family: 'pc',
		name: 'NexaMini',
		tier: 'compact',
		shape: 'mini',
		chip: 'N1',
		spec: { volume: '0.5 L', chip: 'N1', memory: '16 GB', storage: '512 GB' }
	},
	{
		family: 'pc',
		name: 'NexaMini Studio',
		tier: 'compact-pro',
		shape: 'mini',
		chip: 'N2 X',
		spec: { volume: '0.9 L', chip: 'N2 X', memory: '64 GB', storage: '2 TB' }
	},
	{
		family: 'pc',
		name: 'NexaTower',
		tier: 'workstation',
		shape: 'tower',
		chip: 'N2',
		spec: { volume: '18 L', chip: 'N2', memory: '32 GB', storage: '2 TB' }
	},
	{
		family: 'pc',
		name: 'NexaTower Ultra',
		tier: 'extreme',
		shape: 'tower',
		chip: 'N2 X',
		spec: { volume: '24 L', chip: 'N2 X', memory: '128 GB', storage: '8 TB' }
	},
	{
		family: 'pc',
		name: 'NexaOne',
		tier: 'allinone',
		shape: 'aio',
		chip: 'N2',
		spec: { display: '24"', chip: 'N2', memory: '16 GB', storage: '512 GB' }
	},
	{
		family: 'pc',
		name: 'NexaOne Max',
		tier: 'allinone-pro',
		shape: 'aio',
		chip: 'N2 X',
		spec: { display: '32"', chip: 'N2 X', memory: '64 GB', storage: '4 TB' }
	},

	// Nexora Mobile
	{
		family: 'mobile',
		name: 'NPhone 27',
		tier: 'base',
		shape: 'phone',
		chip: 'N1',
		spec: { display: '6.1"', chip: 'N1', camera: '48 MP', battery: '4 200 mAh' }
	},
	{
		family: 'mobile',
		name: 'NPhone 27 Plus',
		tier: 'mid',
		shape: 'phone',
		chip: 'N1 Pro',
		spec: { display: '6.7"', chip: 'N1 Pro', camera: '48 MP', battery: '4 800 mAh' }
	},
	{
		family: 'mobile',
		name: 'NPhone 27 Ultra',
		tier: 'flagship',
		shape: 'phone',
		chip: 'N2 X',
		spec: { display: '6.9"', chip: 'N2 X', camera: '200 MP', battery: '5 400 mAh' }
	},
	{
		family: 'mobile',
		name: 'NPhone 26',
		tier: 'gen26',
		shape: 'phone',
		chip: 'N1',
		spec: { display: '6.1"', chip: 'N1', camera: '48 MP', battery: '4 000 mAh' }
	},
	{
		family: 'mobile',
		name: 'NPhone 26 Plus',
		tier: 'gen26',
		shape: 'phone',
		chip: 'N1 Pro',
		spec: { display: '6.7"', chip: 'N1 Pro', camera: '48 MP', battery: '4 500 mAh' }
	},
	{
		family: 'mobile',
		name: 'NPhone 26 Ultra',
		tier: 'gen26',
		shape: 'phone',
		chip: 'N2',
		spec: { display: '6.8"', chip: 'N2', camera: '150 MP', battery: '5 000 mAh' }
	},
	{
		family: 'mobile',
		name: 'NexaTab',
		tier: 'base',
		shape: 'tablet',
		chip: 'N1',
		spec: { display: '11"', chip: 'N1', refresh: '90 Hz', storage: '128 GB' }
	},
	{
		family: 'mobile',
		name: 'NexaTab Plus',
		tier: 'large',
		shape: 'tablet',
		chip: 'N1 Pro',
		spec: { display: '12.9"', chip: 'N1 Pro', refresh: '120 Hz', storage: '256 GB' }
	},
	{
		family: 'mobile',
		name: 'NexaTab Ultra',
		tier: 'desktop',
		shape: 'tablet',
		chip: 'N2 X',
		spec: { display: '13.6"', chip: 'N2 X', refresh: '144 Hz', storage: '1 TB' }
	},

	// Nexora Audio
	{
		family: 'audio',
		name: 'NexaPods',
		tier: 'in-ear',
		shape: 'buds',
		chip: 'H1',
		spec: { type: 'In-ear', anc: 'ANC 1', codec: 'NexaLoss', battery: '6 h' }
	},
	{
		family: 'audio',
		name: 'NexaPods Plus',
		tier: 'in-ear-pro',
		shape: 'buds',
		chip: 'H1 Pro',
		spec: { type: 'In-ear', anc: 'ANC 2', codec: 'NexaLoss Pro', battery: '8 h' }
	},
	{
		family: 'audio',
		name: 'NexaPods Ultra',
		tier: 'in-ear-studio',
		shape: 'buds',
		chip: 'H2',
		spec: {
			type: 'In-ear',
			anc: 'ANC 3',
			codec: 'NexaLoss Studio',
			battery: '9 h'
		}
	},
	{
		family: 'audio',
		name: 'NexaPods Max',
		tier: 'over-ear',
		shape: 'headphones',
		chip: 'H2',
		spec: { type: 'Over-ear', anc: 'ANC 3', codec: 'NexaLoss Studio', battery: '40 h' }
	},

	// Nexora Wearables
	{
		family: 'wearables',
		name: 'NexaWatch',
		tier: 'base',
		shape: 'watch',
		chip: 'W1',
		spec: { display: '1.4"', chip: 'W1', battery: '2 días', water: '50 m' }
	},
	{
		family: 'wearables',
		name: 'NexaWatch Plus',
		tier: 'sport',
		shape: 'watch',
		chip: 'W1 Pro',
		spec: { display: '1.6"', chip: 'W1 Pro', battery: '5 días', water: '100 m' }
	},
	{
		family: 'wearables',
		name: 'NexaWatch Ultra',
		tier: 'multisport',
		shape: 'watch',
		chip: 'W2',
		spec: { display: '1.7"', chip: 'W2', battery: '7 días', water: '200 m' }
	},

	// Nexora Home
	{
		family: 'home',
		name: 'NexaHub',
		tier: 'hub',
		shape: 'hub',
		chip: '—',
		spec: { role: 'Hub', radios: 'Thread + Matter', power: 'PoE', local: 'Local' }
	},
	{
		family: 'home',
		name: 'NexaCam',
		tier: 'security',
		shape: 'cam',
		chip: 'Edge N1',
		spec: { sensor: '4K', vision: 'On-device', audio: '2-way', power: 'PoE' }
	},
	{
		family: 'home',
		name: 'NexaGlow',
		tier: 'lighting',
		shape: 'glow',
		chip: '—',
		spec: { type: 'Barra + bombilla', temp: '2 200–6 500 K', scenes: '24', power: 'Thread' }
	},

	// Nexora Software
	{
		family: 'software',
		name: 'NCode',
		tier: 'editor',
		shape: 'code',
		chip: '—',
		spec: { role: 'IDE', languages: '14', ext: 'Mercado', license: 'Nexora One' }
	},
	{
		family: 'software',
		name: 'NCloud',
		tier: 'infra',
		shape: 'cloud',
		chip: '—',
		spec: { region: 'Colombia', compute: 'N1 / N2 X', storage: '2 TB', api: 'REST + CLI' }
	},
	{
		family: 'software',
		name: 'Nexora One',
		tier: 'subscription',
		shape: 'one',
		chip: '—',
		spec: { includes: 'Core', devices: '10', support: '24/7', regions: 'Global' }
	}
];

export const byFamily = (family) => CATALOG.filter((p) => p.family === family);

/** Gamma de cada referencia, traducida. Las claves son las de `tier`. */
export const TIER_LABEL = {
	es: {
		entry: 'Entrada',
		balanced: 'Equilibrado',
		high: 'Alto rendimiento',
		compact: 'Compacto',
		'compact-pro': 'Compacto profesional',
		workstation: 'Estación de trabajo',
		extreme: 'Rendimiento extremo',
		allinone: 'Todo en uno',
		'allinone-pro': 'Todo en uno profesional',
		base: 'Base',
		mid: 'Intermedio',
		flagship: 'Buque insignia',
		gen26: 'Generación 26',
		large: 'Ampliado',
		desktop: 'Clase escritorio',
		'in-ear': 'In-ear base',
		'in-ear-pro': 'In-ear avanzado',
		'in-ear-studio': 'In-ear audiófilo',
		'over-ear': 'Over-ear',
		sport: 'Deportivo',
		multisport: 'Multideporte',
		hub: 'Centro de control',
		security: 'Seguridad',
		lighting: 'Iluminación',
		editor: 'Editor oficial',
		infra: 'Infraestructura',
		subscription: 'Suscripción'
	},
	en: {
		entry: 'Entry',
		balanced: 'Balanced',
		high: 'High performance',
		compact: 'Compact',
		'compact-pro': 'Compact pro',
		workstation: 'Workstation',
		extreme: 'Extreme performance',
		allinone: 'All-in-one',
		'allinone-pro': 'All-in-one pro',
		base: 'Base',
		mid: 'Mid-range',
		flagship: 'Flagship',
		gen26: 'Generation 26',
		large: 'Larger',
		desktop: 'Desktop-class',
		'in-ear': 'In-ear base',
		'in-ear-pro': 'In-ear advanced',
		'in-ear-studio': 'In-ear audiophile',
		'over-ear': 'Over-ear',
		sport: 'Sport',
		multisport: 'Multisport',
		hub: 'Hub',
		security: 'Security',
		lighting: 'Lighting',
		editor: 'Official editor',
		infra: 'Infrastructure',
		subscription: 'Subscription'
	}
};

/** Etiquetas de especificación. El valor del catálogo es neutro en ambos idiomas. */
export const SPEC_LABEL = {
	es: {
		display: 'Pantalla',
		chip: 'Chip',
		memory: 'Memoria',
		battery: 'Batería',
		volume: 'Volumen',
		storage: 'Almacenamiento',
		camera: 'Cámara',
		refresh: 'Refresco',
		type: 'Tipo',
		anc: 'Cancelación',
		codec: 'Códec',
		water: 'Resistencia',
		role: 'Función',
		radios: 'Radios',
		power: 'Alimentación',
		local: 'Procesamiento',
		sensor: 'Sensor',
		vision: 'Visión',
		audio: 'Audio',
		languages: 'Lenguajes',
		ext: 'Extensiones',
		license: 'Licencia',
		region: 'Región',
		compute: 'Cómputo',
		api: 'API',
		includes: 'Incluye',
		devices: 'Dispositivos',
		support: 'Soporte',
		regions: 'Cobertura'
	},
	en: {
		display: 'Display',
		chip: 'Chip',
		memory: 'Memory',
		battery: 'Battery',
		volume: 'Volume',
		storage: 'Storage',
		camera: 'Camera',
		refresh: 'Refresh',
		type: 'Type',
		anc: 'Cancellation',
		codec: 'Codec',
		water: 'Water',
		role: 'Role',
		radios: 'Radios',
		power: 'Power',
		local: 'Processing',
		sensor: 'Sensor',
		vision: 'Vision',
		audio: 'Audio',
		languages: 'Languages',
		ext: 'Extensions',
		license: 'License',
		region: 'Region',
		compute: 'Compute',
		api: 'API',
		includes: 'Includes',
		devices: 'Devices',
		support: 'Support',
		regions: 'Coverage'
	}
};