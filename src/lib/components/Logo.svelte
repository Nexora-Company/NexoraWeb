<script>
	/**
	 * Marca de Nexora: monograma N geométrico con la diagonal en rojo de marca.
	 * El glyph es el mismo en cabecera, hero, estado y pie.
	 */
	let { size = 22} = $props();
</script>

<svg
	class="mark__glyph"
	width={size}
	height={size}
	viewBox="0 0 28 28"
	role="img"
	
	fill="none"
>

	<rect x="2" y="2" width="6" height="24" rx="1" fill="currentColor" />
	<rect x="20" y="2" width="6" height="24" rx="1" fill="currentColor" />
	<path d="M8 26 20 2h6L14 26H8Z" fill="var(--brand)" />
</svg>