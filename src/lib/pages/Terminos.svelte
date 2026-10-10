<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
	import ArrowLink from '#lib/components/ArrowLink.svelte';
	import Ledger from '#lib/components/Ledger.svelte';
	import copy from '#lib/content/terminos.js';
	import { url } from '#lib/i18n.js';

	let { data } = $props();
	const t = $derived(copy[data.lang]);
</script>

<svelte:head>
	<title>{t.meta.title} · Nexora</title>
	<meta name="description" content={t.meta.description} />
</svelte:head>

<Band as="section">
	<div class="container container--narrow">
		<Eyebrow>{t.header.eyebrow}</Eyebrow>
		<h1 class="display-2">{t.header.title}</h1>
		<p class="mono header__updated">{t.header.updated}</p>
		<p class="lead">{t.header.intro}</p>
	</div>
</Band>

<Band tone="soft" tight>
	<div class="container container--narrow prose">
		{#each t.sections as s (s.title)}
			<Reveal class="prose__section">
				<h2 class="title">{s.title}</h2>
				{#each s.body as p (p)}
					<p class="muted">{p}</p>
				{/each}
			</Reveal>
		{/each}
	</div>
</Band>

<Band tone="onyx" grid>
	<div class="container container--narrow">
		<SectionHead eyebrow={t.terms.eyebrow} title={t.terms.title} />
		<Ledger rows={t.terms.items} />
	</div>
</Band>

<Band tone="soft" tight>
	<div class="container container--narrow">
		<h2 class="display-3">{t.closing.title}</h2>
		<p class="lead">{t.closing.lead}</p>
		<ArrowLink label="legal@nexora.com" href="mailto:legal@nexora.com" />
	</div>
</Band>

<style>
	.header__updated {
		margin-block: 1rem 1.5rem;
		color: var(--ink-3);
	}

	.prose__section {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding-block: 1.5rem;
		border-block-start: 1px solid var(--line-soft);
	}
</style>