<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
	import Figure from '#lib/components/Figure.svelte';
	import Ledger from '#lib/components/Ledger.svelte';
	import copy from '#lib/content/empleo.js';
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

<Band tone="soft" tight id="vacantes">
	<div class="container container--wide">
		<SectionHead eyebrow={t.openings.eyebrow} title={t.openings.title} />
		<p class="mono openings__note">{t.openings.note}</p>
		<ul class="ruled">
			{#each t.openings.items as job (job.id)}
				<li class="ruled__item job-row">
					<span class="mono job-row__id">{job.id}</span>
					<div class="job-row__info">
						<span class="mono job-row__team">{job.team}</span>
						<h3 class="title">{job.title}</h3>
					</div>
					<div class="job-row__meta">
						<span class="dim">{job.location}</span>
						<span class="chip">{job.type}</span>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</Band>

<Band tight>
	<div class="container container--wide">
		<SectionHead eyebrow={t.how.eyebrow} title={t.how.title} />
		<div class="grid grid--2 how">
			{#each t.how.items as item, i (item.n)}
				<Reveal class="how__item" delay={i * 60}>
					<span class="mono how__n">{item.n}</span>
					<h3 class="title">{item.title}</h3>
					<p class="muted">{item.text}</p>
				</Reveal>
			{/each}
		</div>
	</div>
</Band>

<Band tone="onyx" grid>
	<div class="container container--wide">
		<SectionHead eyebrow={t.benefits.eyebrow} title={t.benefits.title} />
		<Ledger rows={t.benefits.items} />
		<div class="figures">
			{#each t.benefits.figures as item, i (item.label)}
				<Figure value={item.value} label={item.label} delay={i * 70} />
			{/each}
		</div>
	</div>
</Band>

<Band tone="soft" tight>
	<div class="container container--narrow">
		<Eyebrow>{t.apply.eyebrow}</Eyebrow>
		<h2 class="display-3">{t.apply.title}</h2>
		<p class="lead">{t.apply.lead}</p>
		<form class="apply__form" onsubmit={(e) => e.preventDefault()}>
			<label class="mono" for="apply-name">{t.apply.fields.name}</label>
			<input id="apply-name" type="text" required />
			<label class="mono" for="apply-email">{t.apply.fields.email}</label>
			<input id="apply-email" type="email" required />
			<label class="mono" for="apply-team">{t.apply.fields.team}</label>
			<select id="apply-team">
				<option>Silicio</option>
				<option>Sistema</option>
				<option>Nube</option>
				<option>Hardware</option>
				<option>Software</option>
				<option>Seguridad</option>
				<option>Diseño</option>
				<option>Producto</option>
			</select>
			<label class="mono" for="apply-message">{t.apply.fields.message}</label>
			<textarea id="apply-message" rows="4" required></textarea>
			<button class="btn btn--primary" type="submit">{t.apply.submit}</button>
		</form>
		<p class="mono apply__note">{t.apply.note}</p>
	</div>
</Band>

<style>
	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-block-start: 2rem;
	}

	.openings__note {
		margin-block: 1rem 2rem;
		color: var(--ink-3);
	}

	.job-row {
		display: grid;
		grid-template-columns: 5rem 1fr auto;
		gap: 1.5rem;
		align-items: center;
		padding-block: 1.5rem;
	}
	.job-row__id {
		color: var(--brand);
	}
	.job-row__info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.job-row__team {
		color: var(--ink-3);
		text-transform: uppercase;
	}
	.job-row__meta {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.5rem;
	}
	@media (max-width: 60rem) {
		.job-row {
			grid-template-columns: 1fr;
			gap: 0.75rem;
		}
		.job-row__meta {
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
		}
	}

	.how {
		margin-block-start: clamp(2rem, 4vw, 3rem);
	}
	.how__item {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.how__n {
		color: var(--brand);
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

	.apply__form {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		max-width: 32rem;
		margin-block-start: 1.5rem;
	}
	.apply__form label {
		text-transform: uppercase;
		color: var(--ink-3);
	}
	.apply__form input,
	.apply__form select,
	.apply__form textarea {
		padding: 0.75rem 1rem;
		border: 1px solid var(--line);
		border-radius: var(--r-sm);
		background: var(--bg);
		color: var(--ink);
		font: var(--text-body);
	}
	.apply__form input:focus,
	.apply__form select:focus,
	.apply__form textarea:focus {
		outline: 2px solid var(--brand);
		outline-offset: 1px;
	}
	.apply__note {
		margin-block-start: 1rem;
		color: var(--ink-3);
	}
</style>