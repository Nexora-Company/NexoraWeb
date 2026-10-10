<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
	import ArrowLink from '#lib/components/ArrowLink.svelte';
	import Figure from '#lib/components/Figure.svelte';
	import copy from '#lib/content/novedades.js';
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
		<SectionHead eyebrow={t.press.eyebrow} title={t.press.title} />
		<div class="grid grid--3 press">
			{#each t.press.items as item, i (item.title)}
				<Reveal class="card card--lined" delay={i * 50}>
					<span class="mono press__meta">{item.date} · {item.kind}</span>
					<h3 class="title">{item.title}</h3>
					<p class="card__text">{item.text}</p>
					<ArrowLink label="Leer más" href="#contenido" />
				</Reveal>
			{/each}
		</div>
	</div>
</Band>

<Band tight>
	<div class="container container--wide">
		<SectionHead eyebrow={t.changelog.eyebrow} title={t.changelog.title} />
		<ul class="ruled">
			{#each t.changelog.items as item (item.version)}
				<li class="ruled__item changelog__row">
					<span class="mono changelog__version">{item.version}</span>
					<div>
						<span class="mono changelog__date">{item.date}</span>
						<p class="muted">{item.notes}</p>
					</div>
				</li>
			{/each}
		</ul>
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
	</div>
</Band>

<style>
	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-block-start: 2rem;
	}

	.press {
		margin-block-start: clamp(2rem, 4vw, 3rem);
	}
	.press__meta {
		color: var(--ink-3);
		text-transform: uppercase;
	}

	.changelog__row {
		display: grid;
		grid-template-columns: 10rem 1fr;
		gap: 1.5rem;
		padding-block: 1.5rem;
	}
	.changelog__version {
		color: var(--brand);
	}
	.changelog__date {
		color: var(--ink-3);
	}
	@media (max-width: 40rem) {
		.changelog__row {
			grid-template-columns: 1fr;
			gap: 0.5rem;
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