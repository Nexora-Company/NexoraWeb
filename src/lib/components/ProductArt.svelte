<script>
	/**
	 * Ficha técnica visual del producto: dibujo técnico en línea, no render 3D.
	 * Un solo lenguaje gráfico para las 29 referencias del catálogo.
	 */
	let { shape = 'phone', accent = 'var(--brand)', size = 'md' } = $props();

	const S = { sm: 88, md: 140, lg: 220 };
</script>

<svg
	class="art art--{size}"
	viewBox="0 0 200 200"
	role="presentation"
	style:--art-accent={accent}
>
	{#if shape === 'phone'}
		<rect x="68" y="24" width="64" height="152" rx="14" />
		<path d="M68 44h64M68 156h64" class="art--faint" />
		<circle cx="100" cy="34" r="2.5" class="art--fill" />
	{:else if shape === 'tablet'}
		<rect x="38" y="40" width="124" height="120" rx="9" />
		<path d="M38 150h124" class="art--faint" />
	{:else if shape === 'laptop'}
		<rect x="44" y="38" width="112" height="76" rx="7" />
		<path d="M26 128h148l-10 12H36l-10-12Z" />
		<path d="M84 134h32" class="art--faint" />
	{:else if shape === 'mini'}
		<rect x="56" y="56" width="88" height="88" rx="12" />
		<path d="M74 84h52M74 100h52M74 116h30" class="art--faint" />
	{:else if shape === 'tower'}
		<rect x="66" y="26" width="68" height="148" rx="7" />
		<path d="M80 56h40M80 80h40M80 104h40M80 128h40" class="art--faint" />
	{:else if shape === 'aio'}
		<rect x="30" y="34" width="140" height="92" rx="9" />
		<path d="M100 126v30M68 162h64" />
	{:else if shape === 'watch'}
		<path d="M82 66V34a10 10 0 0 1 10-10h16a10 10 0 0 1 10 10v32M82 134v32a10 10 0 0 0 10 10h16a10 10 0 0 0 10-10v-32" class="art--faint" />
		<rect x="66" y="66" width="68" height="68" rx="17" />
		<circle cx="100" cy="100" r="17" class="art--accent" />
	{:else if shape === 'buds'}
		<circle cx="72" cy="86" r="22" />
		<path d="M72 108v34a10 10 0 0 1-10 10h-6a10 10 0 0 1-10-10v-6" />
		<circle cx="128" cy="86" r="22" />
		<path d="M128 108v34a10 10 0 0 0 10 10h6a10 10 0 0 0 10-10v-6" />
	{:else if shape === 'headphones'}
		<path d="M46 112V96a54 54 0 0 1 108 0v16" />
		<rect x="30" y="104" width="34" height="58" rx="16" />
		<rect x="136" y="104" width="34" height="58" rx="16" />
	{:else if shape === 'hub'}
		<circle cx="100" cy="100" r="46" />
		<circle cx="100" cy="100" r="12" class="art--accent" />
		<path d="M100 54V40M100 160v-14M54 100H40M160 100h-14" class="art--faint" />
	{:else if shape === 'cam'}
		<rect x="40" y="58" width="120" height="84" rx="14" />
		<circle cx="100" cy="100" r="24" />
		<circle cx="100" cy="100" r="9" class="art--accent" />
		<path d="M74 58l8-14h36l8 14" class="art--faint" />
	{:else if shape === 'glow'}
		<circle cx="100" cy="88" r="34" />
		<path d="M86 128h28M92 146h16M100 30v-10M58 88H46M154 88h-12M68 56l-9-9M132 56l9-9" class="art--faint" />
	{:else if shape === 'code'}
		<rect x="34" y="48" width="132" height="104" rx="10" />
		<path d="M34 70h132" class="art--faint" />
		<path d="M78 96l-14 14 14 14M122 96l14 14-14 14M108 90l-16 40" />
	{:else if shape === 'cloud'}
		<path d="M66 140a26 26 0 0 1-2-52 32 32 0 0 1 62-10 24 24 0 0 1 8 62H66Z" />
		<path d="M84 118h32M84 134h22" class="art--faint" />
	{:else}
		<rect x="46" y="46" width="108" height="108" rx="26" />
		<path d="M100 74v52M82 92l18-18 18 18" class="art--accent" />
	{/if}
</svg>

<style>
	.art {
		width: 100%;
		height: auto;
		overflow: visible;
	}
	.art--sm {
		max-width: 5.5rem;
	}
	.art--md {
		max-width: 8.75rem;
	}
	.art--lg {
		max-width: 13.75rem;
	}

	svg :global(*) {
		stroke: currentColor;
		stroke-width: 1.4;
		fill: none;
		stroke-linejoin: round;
		stroke-linecap: round;
		vector-effect: non-scaling-stroke;
	}
	.art :global(.art--faint) {
		opacity: 0.35;
	}
	.art :global(.art--fill) {
		fill: currentColor;
		stroke: none;
	}
	.art :global(.art--accent) {
		stroke: var(--art-accent);
		fill: none;
	}
</style>