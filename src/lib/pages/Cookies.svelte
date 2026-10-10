<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
	import ArrowLink from '#lib/components/ArrowLink.svelte';
	import Ledger from '#lib/components/Ledger.svelte';
	import copy from '#lib/content/cookies.js';
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

<Band tight>
	<div class="container container--narrow">
		<SectionHead eyebrow={t.table.eyebrow} title={t.table.title} />
		<ul class="ruled">
			{#each t.table.items as c (c.name)}
				<li class="ruled__item cookie-row">
					<span class="mono cookie-row__name">{c.name}</span>
					<span class="muted cookie-row__purpose">{c.purpose}</span>
					<span class="mono cookie-row__duration">{c.duration}</span>
					<span class="chip">{c.category}</span>
				</li>
			{/each}
		</ul>
	</div>
</Band>

<Band tone="onyx" grid>
	<div class="container container--narrow">
		<SectionHead eyebrow={t.preferences.eyebrow} title={t.preferences.title} />
		<p class="lead">{t.preferences.lead}</p>
		<div class="prefs">
			{#each t.preferences.items as p (p.key)}
				<label class="prefs__row">
					<span>
						<span class="prefs__label">{p.label}</span>
						<span class="prefs__desc">{p.desc}</span>
					</span>
					<input type="checkbox" checked={p.enabled} disabled={p.enabled} />
				</label>
			{/each}
		</div>
		<button class="btn btn--inverted" type="button">{t.preferences.save}</button>
	</div>
</Band>

<Band tone="soft" tight>
	<div class="container container--narrow">
		<h2 class="display-3">{t.closing.title}</h2>
		<p class="lead">{t.closing.lead}</p>
		<div class="cta">
			<a class="btn btn--primary" href={url(data.lang, '/legal/privacidad/')}>Privacidad</a>
			<a class="btn btn--secondary" href={url(data.lang, '/legal/terminos/')}>Términos</a>
		</div>
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

	.cookie-row {
		display: grid;
		grid-template-columns: 12rem 1fr 6rem auto;
		gap: 1rem;
		align-items: center;
		padding-block: 1rem;
	}
	.cookie-row__name {
		color: var(--ink);
	}
	.cookie-row__purpose {
		font-size: var(--fs-sm);
	}
	.cookie-row__duration {
		color: var(--ink-3);
	}
	@media (max-width: 60rem) {
		.cookie-row {
			grid-template-columns: 1fr;
			gap: 0.35rem;
		}
	}

	.prefs {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-block: 1.5rem;
	}
	.prefs__row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid var(--line-inv-soft);
		border-radius: var(--r-sm);
	}
	.prefs__label {
		display: block;
		font-weight: 500;
		color: var(--ink-inv);
	}
	.prefs__desc {
		display: block;
		font-size: var(--fs-sm);
		color: var(--ink-inv-2);
	}

	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-block-start: 1.5rem;
	}
</style>