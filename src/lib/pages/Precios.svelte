<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Faq from '#lib/components/Faq.svelte';
	import copy from '#lib/content/precios.js';
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
		<div class="plans">
			{#each t.plans.items as plan (plan.name)}
				<div class="plan" class:plan--feature={plan.featured}>
					<span class="card__eyebrow">{plan.name}</span>
					<span class="plan__price">{plan.price}<span class="plan__period"> {plan.period}</span></span>
					<p class="plan__desc">{plan.desc}</p>
					<ul class="plan__list">
						{#each plan.features as f (f)}
							<li>{f}</li>
						{/each}
					</ul>
					<div class="plan__foot">
						<a class="btn" class:btn--primary={plan.featured} class:btn--secondary={!plan.featured}
							href={url(data.lang, plan.cta.href)}>{plan.cta.label}</a
						>
					</div>
				</div>
			{/each}
		</div>
		<p class="mono plans__note">{t.plans.note}</p>
	</div>
</Band>

<Band tight>
	<div class="container container--wide">
		<div class="hardware__head">
			<Eyebrow>{t.hardware.eyebrow}</Eyebrow>
			<h2 class="display-3">{t.hardware.title}</h2>
			<p class="lead">{t.hardware.lead}</p>
		</div>
		<ul class="ruled">
			{#each t.hardware.items as item (item.name)}
				<li class="ruled__item hardware__row">
					<span class="title">{item.name}</span>
					<span class="mono hardware__price">{item.price}</span>
				</li>
			{/each}
		</ul>
		<div class="cta">
			<a class="btn btn--primary" href={url(data.lang, t.hardware.cta.href)}
				>{t.hardware.cta.label}</a
			>
		</div>
	</div>
</Band>

<Band tone="onyx" grid>
	<div class="container container--wide">
		<Eyebrow>{t.faq.eyebrow}</Eyebrow>
		<h2 class="display-3">{t.faq.title}</h2>
		<Faq items={t.faq.items} />
	</div>
</Band>

<style>
	.hero__note {
		margin-block-start: 1.5rem;
	}

	.plans__note {
		margin-block-start: 1.5rem;
		color: var(--ink-3);
	}

	.plan__period {
		font-size: var(--fs-base);
		letter-spacing: 0;
	}

	.hardware__head {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-block-end: 2rem;
	}
	.hardware__row {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		padding-block: 1.25rem;
	}
	.hardware__price {
		color: var(--ink);
	}

	.cta {
		margin-block-start: 2rem;
	}
</style>