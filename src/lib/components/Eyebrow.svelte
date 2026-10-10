<script>
	/** Antetítulo mono. Acepta índice de sección: `01 / Plataforma`. */
	let { children, index = null, plain = false } = $props();
</script>

<p class="eyebrow" class:eyebrow--plain={plain}>
	{#if index}<span class="eyebrow__idx">{index}</span>{/if}
	<span>{@render children?.()}</span>
</p>

<style>
	.eyebrow__idx {
		color: var(--brand);
		font-variant-numeric: tabular-nums;
	}
</style>