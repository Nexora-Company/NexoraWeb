<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
	import ArrowLink from '#lib/components/ArrowLink.svelte';
	import Figure from '#lib/components/Figure.svelte';
	import Ledger from '#lib/components/Ledger.svelte';
	import CodeBlock from '#lib/components/CodeBlock.svelte';
	import copy from '#lib/content/api.js';
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
		<SectionHead eyebrow={t.quickstart.eyebrow} title={t.quickstart.title} />
		<CodeBlock code={t.quickstart.code} lang={t.quickstart.lang} />
	</div>
</Band>

<Band tight>
	<div class="container container--wide">
		<SectionHead eyebrow={t.resources.eyebrow} title={t.resources.title} />
		<ul class="ruled">
			{#each t.resources.items as r (r.path)}
				<li class="ruled__item endpoint-row">
					<span class="mono endpoint-row__method">{r.method}</span>
					<span class="mono endpoint-row__path">{r.path}</span>
					<span class="muted endpoint-row__desc">{r.desc}</span>
					<span class="mono endpoint-row__version">{r.version}</span>
				</li>
			{/each}
		</ul>
	</div>
</Band>

<Band tone="soft" tight>
	<div class="container container--wide">
		<div class="grid grid--2 auth">
			<div>
				<Eyebrow>{t.auth.eyebrow}</Eyebrow>
				<h2 class="display-3">{t.auth.title}</h2>
				<Ledger rows={t.auth.items} />
			</div>
			<div>
				<Eyebrow>{t.limits.eyebrow}</Eyebrow>
				<h2 class="display-3">{t.limits.title}</h2>
				<Ledger rows={t.limits.items} />
			</div>
		</div>
	</div>
</Band>

<Band tight>
	<div class="container container--wide">
		<SectionHead eyebrow={t.sdks.eyebrow} title={t.sdks.title} />
		<div class="grid grid--3 sdks">
			{#each t.sdks.items as s (s.name)}
				<div class="sdks__item">
					<h3 class="title">{s.name}</h3>
					<span class="mono sdks__version">{s.version}</span>
					<span class="mono sdks__min">{s.min}</span>
				</div>
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
	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-block-start: 2rem;
	}

	.endpoint-row {
		display: grid;
		grid-template-columns: 4rem 14rem 1fr auto;
		gap: 1rem;
		align-items: center;
		padding-block: 1rem;
	}
	.endpoint-row__method {
		color: var(--brand);
		font-weight: 500;
	}
	.endpoint-row__path {
		color: var(--ink);
	}
	.endpoint-row__desc {
		font-size: var(--fs-sm);
	}
	.endpoint-row__version {
		color: var(--ink-3);
	}
	@media (max-width: 60rem) {
		.endpoint-row {
			grid-template-columns: 3.5rem 1fr;
			gap: 0.5rem;
		}
		.endpoint-row__desc,
		.endpoint-row__version {
			grid-column: 2;
		}
	}

	.auth {
		gap: clamp(2rem, 5vw, 4rem);
	}

	.sdks {
		margin-block-start: clamp(2rem, 4vw, 3rem);
	}
	.sdks__item {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}
	.sdks__version {
		color: var(--brand);
	}
	.sdks__min {
		color: var(--ink-3);
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