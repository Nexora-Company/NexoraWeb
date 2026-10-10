<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
	import ArrowLink from '#lib/components/ArrowLink.svelte';
	import Ledger from '#lib/components/Ledger.svelte';
	import CodeBlock from '#lib/components/CodeBlock.svelte';
	import copy from '#lib/content/integraciones.js';
	import { url } from '#lib/i18n.js';

	let { data } = $props();
	const t = $derived(copy[data.lang]);
</script>

<svelte:head>
	<title>{t.meta.title} · Nexora</title>
	<meta name="description" content={t.meta.description} />
</svelte:head>

<Band as="section">
	<div class="container container--wide">
		<Eyebrow>{t.hero.eyebrow}</Eyebrow>
		<h1 class="display-2">{t.hero.title}</h1>
		<p class="lead">{t.hero.lead}</p>
		<div class="cta">
			<a class="btn btn--primary" href={url(data.lang, t.hero.primary.href)}
				>{t.hero.primary.label}</a
			>
			<a class="btn btn--secondary" href={url(data.lang, t.hero.secondary.href)}
				>{t.hero.secondary.label}</a
			>
		</div>
	</div>
</Band>

<Band tone="soft" tight>
	<div class="container container--wide">
		<SectionHead eyebrow={t.industries.eyebrow} title={t.industries.title} />
		<div class="grid grid--2 industries">
			{#each t.industries.items as item, i (item.name)}
				<Reveal class="card" delay={i * 50}>
					<h3 class="title">{item.name}</h3>
					<p class="card__text">{item.desc}</p>
				</Reveal>
			{/each}
		</div>
	</div>
</Band>

<Band tight>
	<div class="container container--wide">
		<SectionHead eyebrow={t.code.eyebrow} title={t.code.title} />
		<CodeBlock code={t.code.code} lang={t.code.lang} />
	</div>
</Band>

<Band tone="onyx" grid>
	<div class="container container--wide">
		<SectionHead eyebrow={t.contract.eyebrow} title={t.contract.title} />
		<Ledger rows={t.contract.items} />
		<ArrowLink label={t.contract.cta.label} href={url(data.lang, t.contract.cta.href)} />
	</div>
</Band>

<style>
	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-block-start: 2rem;
	}

	.industries {
		margin-block-start: clamp(2rem, 4vw, 3rem);
	}
</style>