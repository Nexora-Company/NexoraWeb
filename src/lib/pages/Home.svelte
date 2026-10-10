<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
	import ArrowLink from '#lib/components/ArrowLink.svelte';
	import Figure from '#lib/components/Figure.svelte';
	import ProductArt from '#lib/components/ProductArt.svelte';
	import copy from '#lib/content/home.js';
	import { FAMILIES } from '#lib/data/catalog.js';
	import { url } from '#lib/i18n.js';

	let { data } = $props();

	const t = $derived(copy[data.lang]);

	/** Silueta representativa de cada familia del catálogo. */
	const ART_SHAPES = {
		pc: 'laptop',
		mobile: 'phone',
		audio: 'buds',
		wearables: 'watch',
		home: 'hub',
		software: 'cloud'
	};

	const FAMILY_COUNT = { pc: 9, mobile: 9, audio: 4, wearables: 3, home: 3, software: 3 };
</script>

<svelte:head>
	<title>{t.meta.title} · Silicio, sistema, nube y dispositivos</title>
	<meta name="description" content={t.meta.description} />
	<meta property="og:title" content="Nexora" />
	<meta property="og:description" content={t.meta.description} />
</svelte:head>

<!-- 01 · Portada -->
<Band as="section" class="hero">
	<div class="container container--wide">
		<Eyebrow>{t.hero.eyebrow}</Eyebrow>
		<h1 class="display-1 hero__title">{t.hero.title}</h1>
		<p class="lead hero__lead">{t.hero.lead}</p>
		<div class="hero__actions">
			<a class="btn btn--primary" href={url(data.lang, t.hero.primary.href)}
				>{t.hero.primary.label}</a
			>
			<a class="btn btn--secondary" href={url(data.lang, t.hero.secondary.href)}
				>{t.hero.secondary.label}</a
			>
		</div>
		<p class="mono hero__note">{t.hero.note}</p>
	</div>

	<div class="container container--wide">
		<div class="lineup">
			{#each FAMILIES as family (family.id)}
				<a class="lineup__item" href={url(data.lang, `/explorar/#${family.id}`)}>
					<ProductArt shape={ART_SHAPES[family.id]} accent={family.accent} size="sm" />
					<span class="lineup__label mono">{family.label}</span>
				</a>
			{/each}
		</div>
	</div>
</Band>

<!-- 02 · Declaración -->
<Band tone="onyx" grid accent>
	<div class="container container--wide">
		<div class="statement">
			<SectionHead
				eyebrow={t.statement.eyebrow}
				title={t.statement.title}
				lead={t.statement.lead}
			/>
			<div class="statement__list">
				{#each t.statement.items as item, i (item.n)}
					<Reveal class="statement__item" delay={i * 70}>
						<span class="statement__n mono">{item.n}</span>
						<h3 class="title">{item.title}</h3>
						<p class="statement__text">{item.text}</p>
					</Reveal>
				{/each}
			</div>
		</div>
	</div>
</Band>

<!-- 03 · Plataforma -->
<Band tight>
	<div class="container container--wide">
		<SectionHead
			eyebrow={t.platform.eyebrow}
			title={t.platform.title}
			lead={t.platform.lead}
		/>
		<div class="grid grid--3 platform">
			{#each t.platform.items as item, i (item.id)}
				<Reveal class="card platform__card" delay={i * 70}>
					<span class="card__eyebrow">{item.kind}</span>
					<h3 class="card__title">{item.name}</h3>
					<p class="card__text">{item.text}</p>
					<div class="card__meta">
						<ArrowLink label={item.cta.label} href={url(data.lang, item.cta.href)} />
					</div>
				</Reveal>
			{/each}
		</div>
	</div>
</Band>

<!-- 04 · Catálogo -->
<Band tone="soft" tight>
	<div class="container container--wide">
		<div class="catalog">
			<SectionHead
				eyebrow={t.catalog.eyebrow}
				title={t.catalog.title}
				lead={t.catalog.lead}
			/>
			<ArrowLink label={t.catalog.cta.label} href={url(data.lang, t.catalog.cta.href)} />
		</div>

		<div class="grid grid--3 grid--plain catalog__grid">
			{#each FAMILIES as family, i (family.id)}
				<Reveal delay={i * 50}>
					<a class="card card--lined" href={url(data.lang, `/explorar/#${family.id}`)}>
						<span class="card__eyebrow">{family.label}</span>
						<div class="catalog__art">
							<ProductArt shape={ART_SHAPES[family.id]} accent={family.accent} size="md" />
						</div>
						<span class="card__meta-label mono">
							{FAMILY_COUNT[family.id]} {t.catalog.references}
						</span>
					</a>
				</Reveal>
			{/each}
		</div>
	</div>
</Band>

<!-- 05 · Cifras -->
<Band tone="onyx" grid>
	<div class="container container--wide">
		<SectionHead
			eyebrow={t.figures.eyebrow}
			title={t.figures.title}
		/>
		<div class="figures">
			{#each t.figures.items as item, i (item.label)}
				<Figure value={item.value} label={item.label} delay={i * 70} />
			{/each}
		</div>
	</div>
</Band>

<!-- 06 · Integraciones -->
<Band tight>
	<div class="container container--wide split">
		<SectionHead
			eyebrow={t.integrations.eyebrow}
			title={t.integrations.title}
			lead={t.integrations.lead}
		/>
		<div class="split__aside">
			<ul class="chips">
				{#each t.integrations.items as item (item)}
					<li class="chip">{item}</li>
				{/each}
			</ul>
			<ArrowLink label={t.integrations.cta.label} href={url(data.lang, t.integrations.cta.href)} />
		</div>
	</div>
</Band>

<!-- 07 · Novedades -->
<Band tone="soft" tight>
	<div class="container container--wide">
		<div class="catalog">
			<SectionHead eyebrow={t.news.eyebrow} title={t.news.title} />
			<ArrowLink label={t.news.cta.label} href={url(data.lang, t.news.cta.href)} />
		</div>
		<ul class="ruled news">
			{#each t.news.items as item (item.title)}
				<li class="ruled__item news__item">
					<span class="mono news__meta">{item.date} · {item.kind}</span>
					<h3 class="title news__title">{item.title}</h3>
					<p class="muted">{item.text}</p>
				</li>
			{/each}
		</ul>
	</div>
</Band>

<!-- 08 · Cierre -->
<Band tone="onyx" accent tight>
	<div class="container container--narrow cta">
		<h2 class="display-3">{t.cta.title}</h2>
		<p class="lead">{t.cta.lead}</p>
		<div class="cta__actions">
			<a class="btn btn--inverted" href={url(data.lang, t.cta.primary.href)}
				>{t.cta.primary.label}</a
			>
			<a class="btn btn--secondary" href={url(data.lang, t.cta.secondary.href)}
				>{t.cta.secondary.label}</a
			>
		</div>
	</div>
</Band>

<style>
	.hero {
		padding-block: clamp(4rem, 11vw, 9rem) clamp(3rem, 6vw, 5rem);
		display: flex;
		flex-direction: column;
		gap: clamp(3rem, 7vw, 6rem);
	}
	.hero__title {
		margin-block: 1.75rem 0;
		max-width: 16ch;
	}
	.hero__lead {
		max-width: 38rem;
	}
	.hero__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-block-start: 2rem;
	}
	.hero__note {
		margin-block-start: 1.5rem;
		color: var(--ink-3);
	}

	.lineup {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 1rem;
		padding-block-start: clamp(2.5rem, 5vw, 4rem);
		border-block-start: 1px solid var(--line-soft);
	}
	.lineup__item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		color: var(--ink-2);
	}
	.lineup__item :global(svg) {
		color: var(--ink-3);
		transition: color var(--dur-mid) var(--ease);
	}
	.lineup__item:hover :global(svg) {
		color: var(--brand);
	}
	.lineup__label {
		text-align: center;
		font-size: var(--fs-2xs);
		text-transform: uppercase;
	}
	@media (max-width: 64rem) {
		.lineup {
			grid-template-columns: repeat(3, 1fr);
			row-gap: 2rem;
		}
	}
	@media (max-width: 30rem) {
		.lineup {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.statement {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
		gap: clamp(2rem, 5vw, 5rem);
		align-items: start;
	}
	@media (max-width: 64rem) {
		.statement {
			grid-template-columns: 1fr;
		}
	}
	.statement__list {
		border-block-start: 1px solid var(--line-inv-soft);
	}
	.statement__item {
		display: grid;
		grid-template-columns: 2.5rem 1fr;
		gap: 0.25rem 1rem;
		padding-block: 1.5rem;
		border-block-end: 1px solid var(--line-inv-soft);
	}
	.statement__n {
		grid-row: span 2;
		color: var(--brand-inv);
		padding-block-start: 0.35rem;
	}
	.statement__text {
		grid-column: 2;
		color: var(--ink-inv-2);
		font-size: var(--fs-sm);
		max-width: 34rem;
	}

	.platform {
		margin-block-start: clamp(2.5rem, 5vw, 4rem);
	}
	.platform__card {
		background: transparent;
	}

	.catalog {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 2rem;
		flex-wrap: wrap;
		margin-block-end: clamp(2.5rem, 5vw, 4rem);
	}
	.catalog__art {
		display: grid;
		place-items: center;
		padding-block: 1.5rem 2rem;
		color: var(--ink-3);
	}
	.card__meta-label {
		margin-block-start: auto;
		padding-block-start: 1rem;
		border-block-start: 1px solid var(--line-soft);
		color: var(--ink-3);
		text-transform: uppercase;
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

	.split {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: clamp(2rem, 5vw, 4rem);
		align-items: center;
	}
	@media (max-width: 60rem) {
		.split {
			grid-template-columns: 1fr;
		}
	}
	.split__aside {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.5rem;
	}
	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.news__item {
		display: grid;
		grid-template-columns: 12rem minmax(0, 1.1fr) minmax(0, 1fr);
		gap: 1rem 2rem;
		padding-block: 1.75rem;
		align-items: baseline;
	}
	.news__meta {
		color: var(--ink-3);
		text-transform: uppercase;
	}
	.news__item p {
		font-size: var(--fs-sm);
	}
	@media (max-width: 64rem) {
		.news__item {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}
	}

	.cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1rem;
	}
	.cta__actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem;
		margin-block-start: 1rem;
	}
	.band--onyx .btn--secondary {
		border-color: var(--line-inv);
		color: var(--ink-inv);
	}
</style>