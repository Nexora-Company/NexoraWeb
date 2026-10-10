<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
	import ArrowLink from '#lib/components/ArrowLink.svelte';
	import Figure from '#lib/components/Figure.svelte';
	import Ledger from '#lib/components/Ledger.svelte';
	import copy from '#lib/content/contacto.js';
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
		<SectionHead eyebrow={t.channels.eyebrow} title={t.channels.title} />
		<div class="grid grid--2 channels">
			{#each t.channels.items as ch (ch.name)}
				<Reveal class="card card--lined">
					<h3 class="title">{ch.name}</h3>
					<span class="mono channels__email">{ch.email}</span>
					<p class="muted">{ch.note}</p>
					<span class="chip">{ch.response}</span>
				</Reveal>
			{/each}
		</div>
	</div>
</Band>

<Band tight>
	<div class="container container--wide">
		<SectionHead eyebrow={t.offices.eyebrow} title={t.offices.title} />
		<div class="grid grid--2 offices">
			{#each t.offices.items as o (o.city)}
				<div class="offices__item">
					<h3 class="title">{o.city}</h3>
					<span class="mono offices__role">{o.role}</span>
					<p class="muted">{o.address}</p>
					<span class="mono offices__hours">{o.hours}</span>
				</div>
			{/each}
		</div>
	</div>
</Band>

<Band tone="onyx" grid>
	<div class="container container--wide">
		<SectionHead eyebrow={t.routing.eyebrow} title={t.routing.title} />
		<Ledger rows={t.routing.items} />
	</div>
</Band>

<Band tone="soft" tight>
	<div class="container container--wide">
		<SectionHead eyebrow={t.sla.eyebrow} title={t.sla.title} />
		<div class="grid grid--4 sla">
			{#each t.sla.items as item (item.label)}
				<div class="sla__item">
					<span class="figure__value">{item.value}</span>
					<span class="figure__label">{item.label}</span>
				</div>
			{/each}
		</div>
		<ArrowLink label={t.sla.cta.label} href={url(data.lang, t.sla.cta.href)} />
	</div>
</Band>

<Band tone="onyx" grid tight>
	<div class="container container--narrow">
		<Eyebrow>{t.form.eyebrow}</Eyebrow>
		<h2 class="display-3">{t.form.title}</h2>
		<form class="contact__form" onsubmit={(e) => e.preventDefault()}>
			<label class="mono" for="contact-name">{t.form.fields.name}</label>
			<input id="contact-name" type="text" required />
			<label class="mono" for="contact-email">{t.form.fields.email}</label>
			<input id="contact-email" type="email" required />
			<label class="mono" for="contact-subject">{t.form.fields.subject}</label>
			<input id="contact-subject" type="text" required />
			<label class="mono" for="contact-message">{t.form.fields.message}</label>
			<textarea id="contact-message" rows="4" required></textarea>
			<button class="btn btn--primary" type="submit">{t.form.submit}</button>
		</form>
		<p class="mono contact__note">{t.form.note}</p>
	</div>
</Band>

<style>
	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-block-start: 2rem;
	}

	.channels {
		margin-block-start: clamp(2rem, 4vw, 3rem);
	}
	.channels__email {
		color: var(--brand);
		word-break: break-all;
	}

	.offices {
		margin-block-start: clamp(2rem, 4vw, 3rem);
	}
	.offices__item {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.offices__role {
		color: var(--brand);
		text-transform: uppercase;
	}
	.offices__hours {
		color: var(--ink-3);
	}

	.sla {
		margin-block-start: clamp(2rem, 4vw, 3rem);
	}
	.sla__item {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.contact__form {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		max-width: 32rem;
		margin-block-start: 1.5rem;
	}
	.contact__form label {
		text-transform: uppercase;
		color: var(--ink-3);
	}
	.contact__form input,
	.contact__form textarea {
		padding: 0.75rem 1rem;
		border: 1px solid var(--line);
		border-radius: var(--r-sm);
		background: var(--bg);
		color: var(--ink);
		font: var(--text-body);
	}
	.contact__form input:focus,
	.contact__form textarea:focus {
		outline: 2px solid var(--brand);
		outline-offset: 1px;
	}
	.band--onyx .contact__form input,
	.band--onyx .contact__form textarea {
		background: rgb(255 255 255 / 0.04);
		border-color: var(--line-inv-soft);
		color: var(--ink-inv);
	}
	.contact__note {
		margin-block-start: 1rem;
		color: var(--ink-inv-3);
	}
</style>