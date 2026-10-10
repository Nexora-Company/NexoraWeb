<script>
	/** Preguntas frecuentes sobre `<details>` nativo: sin JS, accesible y con SEO. */
	let { items = [] } = $props();
</script>

<div class="faq">
	{#each items as item (item.q)}
		<details class="faq__item">
			<summary class="faq__q">{item.q}</summary>
			<p class="faq__a">{item.a}</p>
		</details>
	{/each}
</div>