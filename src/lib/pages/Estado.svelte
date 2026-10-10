<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
	import copy from '#lib/content/estado.js';
	import { url } from '#lib/i18n.js';

	let { data } = $props();
	const t = $derived(copy[data.lang]);
</script>

<svelte:head>
	<title>{t.meta.title} · Nexora</title>
	<meta name="description" content={t.meta.description} />
</svelte:head>

<Band tone="onyx" grid as="section">
	<div class="container container--wide">
		<Eyebrow>{t.status.eyebrow}</Eyebrow>
		<h1 class="display-2">{t.status.title}</h1>
		<p class="mono status__updated">{t.status.updated}</p>
		<a class="btn btn--inverted" href="#subscribe">{t.status.subscribe}</a>
	</div>
</Band>

<Band tone="soft" tight>
	<div class="container container--wide">
		<SectionHead eyebrow={t.services.eyebrow} title={t.services.title} />
		<ul class="ruled">
			{#each t.services.items as s (s.name)}
				<li class="ruled__item service-row">
					<span class="service-row__dot" aria-hidden="true"></span>
					<span class="title">{s.name}</span>
					<span class="service-row__status">{s.status}</span>
					<div class="uptime" aria-hidden="true">
						{#each Array(30) as _, i (i)}
							<span class="uptime__tick" style:height="{40 + ((i * 7) % 60)}%"></span>
						{/each}
					</div>
					<span class="mono service-row__uptime">{s.uptime}%</span>
				</li>
			{/each}
		</ul>
	</div>
</Band>

<Band tight>
	<div class="container container--wide">
		<SectionHead eyebrow={t.history.eyebrow} title={t.history.title} />
		<ul class="ruled">
			{#each t.history.items as h (h.title)}
				<li class="ruled__item incident-row">
					<span class="mono incident-row__date">{h.date}</span>
					<div>
						<h3 class="title">{h.title}</h3>
						<p class="muted">{h.cause}</p>
						<p class="muted">{h.resolution}</p>
					</div>
					<span class="chip">{h.duration}</span>
				</li>
			{/each}
		</ul>
	</div>
</Band>

<Band tone="soft" tight id="subscribe">
	<div class="container container--narrow">
		<Eyebrow>{t.subscribe.eyebrow}</Eyebrow>
		<h2 class="display-3">{t.subscribe.title}</h2>
		<p class="lead">{t.subscribe.lead}</p>
		<form class="subscribe__form" onsubmit={(e) => e.preventDefault()}>
			<label class="mono" for="status-email">Email</label>
			<input id="status-email" type="email" placeholder={t.subscribe.placeholder} required />
			<button class="btn btn--primary" type="submit">{t.subscribe.button}</button>
		</form>
		<p class="mono subscribe__note">{t.subscribe.note}</p>
	</div>
</Band>

<style>
	.status__updated {
		margin-block: 1rem 1.5rem;
		color: var(--ink-inv-3);
	}

	.service-row {
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 1rem;
		align-items: center;
		padding-block: 1.25rem;
	}
	.service-row__dot {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: var(--r-full);
		background: var(--accent-audio);
	}
	.service-row__status {
		color: var(--accent-audio);
		font-size: var(--fs-sm);
	}
	.uptime {
		display: none;
	}
	.service-row__uptime {
		color: var(--ink-3);
	}
	@media (min-width: 60rem) {
		.service-row {
			grid-template-columns: auto 12rem 8rem 10rem 5rem;
		}
		.uptime {
			display: flex;
		}
	}

	.incident-row {
		display: grid;
		grid-template-columns: 7rem 1fr auto;
		gap: 1.5rem;
		align-items: start;
		padding-block: 1.5rem;
	}
	.incident-row__date {
		color: var(--brand);
	}
	@media (max-width: 60rem) {
		.incident-row {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}
	}

	.subscribe__form {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		max-width: 28rem;
		margin-block-start: 1.5rem;
	}
	.subscribe__form label {
		text-transform: uppercase;
		color: var(--ink-3);
	}
	.subscribe__form input {
		padding: 0.75rem 1rem;
		border: 1px solid var(--line);
		border-radius: var(--r-sm);
		background: var(--bg);
		color: var(--ink);
		font: var(--text-body);
	}
	.subscribe__form input:focus {
		outline: 2px solid var(--brand);
		outline-offset: 1px;
	}
	.subscribe__note {
		margin-block-start: 1rem;
		color: var(--ink-3);
	}
</style>