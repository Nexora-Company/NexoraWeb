<script>
	import { siteFor } from '#lib/content/site.js';
	import { url } from '#lib/i18n.js';
	import Logo from '#lib/components/Logo.svelte';

	let { lang } = $props();

	const s = $derived(siteFor(lang));
	const year = 2026;
</script>

<footer class="footer">
	<div class="container container--wide">
		<div class="footer__top">
			<a class="mark" href={url(lang)} aria-label="Nexora">
				<Logo size={24} />
				<span class="mark__word">Nexora</span>
			</a>
			<p class="mono footer__tagline">{s.tagline}</p>
		</div>

		<div class="footer__grid">
			{#each s.footer as group (group.title)}
				<nav aria-labelledby={`f-${group.title}`}>
					<h2 class="footer__title mono" id={`f-${group.title}`}>{group.title}</h2>
					<ul>
						{#each group.items as item (item.href)}
							<li><a class="footer__link" href={url(lang, item.href)}>{item.label}</a></li>
						{/each}
					</ul>
				</nav>
			{/each}
		</div>

		<div class="footer__base">
			<p class="footer__note">
				{s.note} © {year} Nexora S.A. {s.rights}
			</p>
			<ul class="footer__legal">
				{#each s.legal as item (item.href)}
					<li><a class="footer__link mono" href={url(lang, item.href)}>{item.label}</a></li>
				{/each}
				<li class="mono footer__country">{s.region} · {s.country}</li>
			</ul>
		</div>
	</div>
</footer>

<style>
	.footer__top {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1.5rem;
		flex-wrap: wrap;
		padding-block-end: clamp(2rem, 4vw, 3.25rem);
		border-block-end: 1px solid var(--line);
	}
	.footer__tagline {
		color: var(--ink-3);
		text-transform: none;
		letter-spacing: 0;
		font-size: var(--fs-sm);
	}

	.footer__grid {
		padding-block: clamp(2rem, 4vw, 3.25rem);
	}

	.footer__title {
		text-transform: uppercase;
		color: var(--ink-3);
		margin-block-end: 0.85rem;
	}
	.footer__grid ul {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.footer__link {
		font-size: var(--fs-sm);
		color: var(--ink-2);
	}
	.footer__link:hover {
		color: var(--brand);
	}

	.footer__base {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1.5rem;
		flex-wrap: wrap;
		padding-block-start: 1.5rem;
		border-block-start: 1px solid var(--line);
	}
	.footer__note {
		font-size: var(--fs-xs);
		color: var(--ink-3);
		max-width: 46rem;
	}
	.footer__legal {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		flex-wrap: wrap;
	}
	.footer__country {
		color: var(--ink-3);
	}
</style>