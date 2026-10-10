<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
	import ArrowLink from '#lib/components/ArrowLink.svelte';
	import Figure from '#lib/components/Figure.svelte';
	import copy from '#lib/content/documentacion.js';
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

<Band tone="soft" tight>
	<div class="container container--wide">
		<div class="grid grid--2 blocks">
			{#each t.blocks.items as b (b.title)}
				<Reveal class="card card--lined">
					<h3 class="title">{b.title}</h3>
					<p class="card__text">{b.desc}</p>
					<ArrowLink label="Ver" href={url(data.lang, b.href)} />
				</Reveal>
			{/each}
		</div>
	</div>
</Band>

<Band tight>
	<div class="container container--wide">
		<SectionHead eyebrow={t.path.eyebrow} title={t.path.title} />
		<div class="grid grid--3 path">
			{#each t.path.items as item, i (item.n)}
				<Reveal class="path__item" delay={i * 60}>
					<span class="mono path__n">{item.n}</span>
					<h3 class="title">{item.title}</h3>
					<p class="muted">{item.desc}</p>
				</Reveal>
			{/each}
		</div>
	</div>
</Band>

<Band tone="onyx" grid>
	<div class="container container--wide">
		<SectionHead eyebrow={t.stats.eyebrow} title={t.stats.title} />
		<div class="figures">
			{#each t.stats.items as item, i (item.label)}
				<Figure value={item.value} label={item.label} delay={i * 70} />
			{/each}
		</div>
		<ArrowLink label={t.stats.cta.label} href={url(data.lang, t.stats.cta.href)} />
	</div>
</Band>

<style>
	.hero__note {
		margin-block-start: 1.5rem;
	}

	.blocks {
		margin-block-start: clamp(2rem, 4vw, 3rem);
	}

	.path {
		margin-block-start: clamp(2rem, 4vw, 3rem);
	}
	.path__item {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.path__n {
		color: var(--brand);
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