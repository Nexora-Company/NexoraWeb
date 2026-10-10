<script>
	/** Banda a sangre. El ritmo de la web son bandas alternas, no tarjetas sueltas. */
	let {
		tone = 'plain', // plain | soft | quiet | onyx
		accent = false, // filete rojo superior
		grid = false, // retícula técnica de fondo (solo onyx)
		tight = false,
		rule = false,
		as: tag = 'section',
		id,
		class: className = '',
		children
	} = $props();

	const classes = $derived(
		[
			'band',
			tone !== 'plain' && `band--${tone}`,
			accent && 'band--accent',
			grid && 'band--grid',
			tight && 'band--tight',
			rule && 'band--rule',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<svelte:element this={tag} {id} class={classes}>
	{@render children?.()}
</svelte:element>