<script>
	import Reveal from '#lib/components/Reveal.svelte';

	let { value, label, delay = 0 } = $props();
</script>

<Reveal class="figure" {delay}>
	<span class="figure__value">{value}</span>
	<span class="figure__label">{label}</span>
</Reveal>