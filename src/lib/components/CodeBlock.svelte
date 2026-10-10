<script>
	let { code = '', lang = 'bash' } = $props();
</script>

<figure class="code-figure">
	<figcaption class="mono">{lang}</figcaption>
	<pre class="code"><code>{code}</code></pre>
</figure>

<style>
	.code-figure {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	figcaption {
		text-transform: uppercase;
		color: var(--ink-3);
	}
</style>