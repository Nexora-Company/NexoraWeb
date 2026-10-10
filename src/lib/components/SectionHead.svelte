<script>
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';

	let { eyebrow = null, index = null, title, lead = null, align = 'start', tag = 'h2' } = $props();
</script>

<Reveal class="section-head" data-align={align}>
	{#if eyebrow}
		<Eyebrow {index}>{eyebrow}</Eyebrow>
	{/if}
	<svelte:element this={tag} class="display-3">{title}</svelte:element>
	{#if lead}
		<p class="lead">{lead}</p>
	{/if}
</Reveal>

<style>
	.section-head {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 52rem;
	}
	.section-head[data-align='center'] {
		align-items: center;
		text-align: center;
		margin-inline: auto;
	}
	.lead {
		max-width: 42rem;
	}
</style>