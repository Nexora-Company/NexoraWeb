<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import ArrowLink from '#lib/components/ArrowLink.svelte';
	import ProductArt from '#lib/components/ProductArt.svelte';
	import copy from '#lib/content/explorar.js';
	import { FAMILIES, byFamily, TIER_LABEL, SPEC_LABEL } from '#lib/data/catalog.js';
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
		<p class="mono hero__note">{t.hero.note}</p>
	</div>
</Band>

{#each FAMILIES as family, i (family.id)}
	{@const products = byFamily(family.id)}
	<Band id={family.id} tone={i % 2 === 0 ? 'soft' : 'plain'}>
		<div class="container container--wide">
			<div class="family__head">
				<Eyebrow>{family.label}</Eyebrow>
				<h2 class="display-3">{family.label}</h2>
				<span class="mono family__count">{products.length} {t.family.count}</span>
			</div>
			<ul class="ruled">
				{#each products as p (p.name)}
					<li class="ruled__item product-row">
						<ProductArt shape={p.shape} accent={family.accent} size="sm" />
						<div class="product-row__info">
							<h3 class="title">{p.name}</h3>
							<span class="dim">{TIER_LABEL[data.lang][p.tier]}</span>
						</div>
						<ul class="product-row__specs">
							{#each Object.entries(p.spec).slice(0, 3) as [key, value] (key)}
								<li class="chip">
									<span class="mono">{SPEC_LABEL[data.lang][key] ?? key}</span>
									<span>{value}</span>
								</li>
							{/each}
							{#if p.chip !== '—'}
								<li class="chip chip--brand">{p.chip}</li>
							{/if}
						</ul>
					</li>
				{/each}
			</ul>
		</div>
	</Band>
{/each}

<Band tone="onyx" accent tight>
	<div class="container container--narrow">
		<h2 class="display-3">{t.closing.title}</h2>
		<p class="lead">{t.closing.lead}</p>
		<div class="cta">
			<a class="btn btn--inverted" href={url(data.lang, t.closing.primary.href)}
				>{t.closing.primary.label}</a
			>
			<a class="btn btn--secondary" href={url(data.lang, t.closing.secondary.href)}
				>{t.closing.secondary.label}</a
			>
		</div>
	</div>
</Band>

<style>
	.hero__note {
		margin-block-start: 1.5rem;
	}

	.family__head {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-block-end: 2rem;
	}
	.family__count {
		color: var(--ink-3);
	}

	.product-row {
		display: grid;
		grid-template-columns: 4rem 1fr auto;
		gap: 1.5rem;
		align-items: center;
		padding-block: 1.5rem;
	}
	.product-row__info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.product-row__specs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: flex-end;
	}
	@media (max-width: 60rem) {
		.product-row {
			grid-template-columns: 3rem 1fr;
		}
		.product-row__specs {
			grid-column: 1 / -1;
			justify-content: flex-start;
		}
	}

	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-block-start: 1.5rem;
	}
	.band--onyx .btn--secondary {
		border-color: var(--line-inv);
		color: var(--ink-inv);
	}
</style>