<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
	import ArrowLink from '#lib/components/ArrowLink.svelte';
	import Figure from '#lib/components/Figure.svelte';
	import Ledger from '#lib/components/Ledger.svelte';
	import copy from '#lib/content/empresa.js';
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
		<SectionHead eyebrow={t.what.eyebrow} title={t.what.title} />
		<div class="grid grid--2 what">
			{#each t.what.items as item, i (item.n)}
				<Reveal class="what__item" delay={i * 60}>
					<span class="mono what__n">{item.n}</span>
					<h3 class="title">{item.title}</h3>
					<p class="muted">{item.text}</p>
				</Reveal>
			{/each}
		</div>
	</div>
</Band>

<Band tone="onyx" grid>
	<div class="container container--wide">
		<SectionHead eyebrow={t.figures.eyebrow} title={t.figures.title} />
		<div class="figures">
			{#each t.figures.items as item, i (item.label)}
				<Figure value={item.value} label={item.label} delay={i * 70} />
			{/each}
		</div>
	</div>
</Band>

<Band tight>
	<div class="container container--wide">
		<SectionHead eyebrow={t.timeline.eyebrow} title={t.timeline.title} />
		<ul class="ruled timeline">
			{#each t.timeline.items as item (item.year)}
				<li class="ruled__item timeline__row">
					<span class="mono timeline__year">{item.year}</span>
					<div>
						<h3 class="title">{item.title}</h3>
						<p class="muted">{item.text}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</Band>

<Band tone="soft" tight>
	<div class="container container--wide">
		<SectionHead eyebrow={t.leadership.eyebrow} title={t.leadership.title} />
		<div class="grid grid--2 leadership">
			{#each t.leadership.items as person (person.name)}
				<div class="leadership__person">
					<span class="leadership__initials title">{person.name.split(' ').map(w => w[0]).join('')}</span>
					<div>
						<h3 class="title">{person.name}</h3>
						<span class="mono leadership__role">{person.role}</span>
						<p class="muted">{person.bio}</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="cta">
			<a class="btn btn--primary" href={url(data.lang, t.leadership.cta.href)}
				>{t.leadership.cta.label}</a
			>
		</div>
	</div>
</Band>

<Band tone="onyx" grid tight>
	<div class="container container--wide">
		<SectionHead eyebrow={t.presence.eyebrow} title={t.presence.title} />
		<Ledger rows={t.presence.items} />
	</div>
</Band>

<style>
	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-block-start: 2rem;
	}

	.what {
		margin-block-start: clamp(2rem, 4vw, 3rem);
	}
	.what__item {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.what__n {
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

	.timeline__row {
		display: grid;
		grid-template-columns: 5rem 1fr;
		gap: 1.5rem;
		padding-block: 1.5rem;
	}
	.timeline__year {
		color: var(--brand);
		font-size: var(--fs-xl);
	}
	@media (max-width: 40rem) {
		.timeline__row {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}
	}

	.leadership {
		margin-block-start: clamp(2rem, 4vw, 3rem);
	}
	.leadership__person {
		display: flex;
		gap: 1.25rem;
		align-items: flex-start;
	}
	.leadership__initials {
		flex: none;
		width: 3.5rem;
		height: 3.5rem;
		display: grid;
		place-items: center;
		border: 1px solid var(--line);
		border-radius: var(--r-full);
		color: var(--ink-3);
		font-size: var(--fs-sm);
	}
	.leadership__role {
		color: var(--brand);
		text-transform: uppercase;
	}
</style>