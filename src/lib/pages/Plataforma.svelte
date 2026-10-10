<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
	import ArrowLink from '#lib/components/ArrowLink.svelte';
	import Figure from '#lib/components/Figure.svelte';
	import Ledger from '#lib/components/Ledger.svelte';
	import ProductArt from '#lib/components/ProductArt.svelte';
	import copy from '#lib/content/plataforma.js';
	import { url } from '#lib/i18n.js';

	let { data } = $props();
	const t = $derived(copy[data.lang]);

	const SHAPES = { one: 'one', ncloud: 'cloud', ncode: 'code' };
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
		{#each t.layers.items as item, i (item.id)}
			<Reveal class="layer" id={item.id}>
				<div class="layer__head">
					<span class="mono layer__n">{item.n}</span>
					<div>
						<span class="card__eyebrow">{item.kind}</span>
						<h2 class="display-3">{item.name}</h2>
					</div>
					<ProductArt shape={SHAPES[item.id]} accent="var(--accent-software)" size="md" />
				</div>
				<p class="lead layer__text">{item.text}</p>
				<Ledger rows={item.specs} />
				<ArrowLink label={item.cta.label} href={url(data.lang, item.cta.href)} />
			</Reveal>
		{/each}
	</div>
</Band>

<Band tone="onyx" grid>
	<div class="container container--wide">
		<SectionHead eyebrow={t.impact.eyebrow} title={t.impact.title} />
		<div class="figures">
			{#each t.impact.items as item, i (item.label)}
				<Figure value={item.value} label={item.label} delay={i * 70} />
			{/each}
		</div>
	</div>
</Band>

<style>
	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-block-start: 2rem;
	}

	.layer {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding-block: clamp(2.5rem, 5vw, 4rem);
		border-block-start: 1px solid var(--line);
	}
	.layer__head {
		display: grid;
		grid-template-columns: 3rem 1fr auto;
		gap: 1.5rem;
		align-items: center;
	}
	.layer__n {
		color: var(--brand);
		font-size: var(--fs-xl);
	}
	.layer__text {
		max-width: 42rem;
	}
	@media (max-width: 60rem) {
		.layer__head {
			grid-template-columns: 2.5rem 1fr;
		}
		.layer__head :global(svg) {
			display: none;
		}
	}

	.figures {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1px;
		margin-block-start: clamp(2rem, 4vw, 3rem);
		background: var(--line-inv-soft);
		border: 1px solid var(--line-inv-soft);
	}
	.figures > :global(.reveal) {
		background: var(--bg-onyx);
		padding-inline: 1.25rem;
	}
	@media (max-width: 60rem) {
		.figures {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>