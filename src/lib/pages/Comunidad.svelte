<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
	import ArrowLink from '#lib/components/ArrowLink.svelte';
	import Figure from '#lib/components/Figure.svelte';
	import Ledger from '#lib/components/Ledger.svelte';
	import copy from '#lib/content/comunidad.js';
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
		<SectionHead eyebrow={t.spaces.eyebrow} title={t.spaces.title} />
		<div class="grid grid--2 spaces">
			{#each t.spaces.items as s (s.name)}
				<Reveal class="card card--lined">
					<h3 class="title">{s.name}</h3>
					<p class="muted">{s.desc}</p>
					<div class="spaces__meta">
						<span class="chip">{s.members}</span>
						<span class="chip">{s.rhythm}</span>
					</div>
				</Reveal>
			{/each}
		</div>
	</div>
</Band>

<Band tight>
	<div class="container container--wide">
		<SectionHead eyebrow={t.events.eyebrow} title={t.events.title} />
		<ul class="ruled">
			{#each t.events.items as e (e.title)}
				<li class="ruled__item event-row">
					<span class="mono event-row__date">{e.date}</span>
					<div>
						<h3 class="title">{e.title}</h3>
						<p class="muted">{e.desc}</p>
					</div>
					<span class="chip">{e.city}</span>
				</li>
			{/each}
		</ul>
	</div>
</Band>

<Band tone="onyx" grid>
	<div class="container container--wide">
		<SectionHead eyebrow={t.contributors.eyebrow} title={t.contributors.title} />
		<p class="lead">{t.contributors.lead}</p>
		<div class="figures">
			{#each t.contributors.items as item, i (item.label)}
				<Figure value={item.value} label={item.label} delay={i * 70} />
			{/each}
		</div>
		<ul class="contributors__list">
			{#each t.contributors.benefits as b (b)}
				<li>{b}</li>
			{/each}
		</ul>
		<ArrowLink label={t.contributors.cta.label} href={url(data.lang, t.contributors.cta.href)} />
	</div>
</Band>

<style>
	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-block-start: 2rem;
	}

	.spaces {
		margin-block-start: clamp(2rem, 4vw, 3rem);
	}
	.spaces__meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.event-row {
		display: grid;
		grid-template-columns: 7rem 1fr auto;
		gap: 1.5rem;
		align-items: center;
		padding-block: 1.5rem;
	}
	.event-row__date {
		color: var(--brand);
	}
	@media (max-width: 60rem) {
		.event-row {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}
	}

	.figures {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
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
			grid-template-columns: 1fr;
		}
	}

	.contributors__list {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		margin-block-start: 2rem;
		font-size: var(--fs-sm);
		color: var(--ink-inv-2);
	}
	.contributors__list li {
		display: flex;
		gap: 0.6rem;
		align-items: baseline;
	}
	.contributors__list li::before {
		content: '—';
		color: var(--brand);
	}
</style>