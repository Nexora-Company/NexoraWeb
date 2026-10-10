<script>
	import { goto } from '$app/navigation';
	import Logo from '#lib/components/Logo.svelte';
	import { LANGS } from '#lib/i18n.js';

	let { data } = $props();

	const options = [
		{ lang: 'es', label: 'Español', region: 'Colombia · América Latina' },
		{ lang: 'en', label: 'English', region: 'Colombia · Latin America' }
	];
</script>

<svelte:head>
	<title>Nexora</title>
	<meta name="description" content="Nexora — Silicio, sistema, nube y dispositivos. Diseñamos la pila entera." />
</svelte:head>

<main class="gateway">
	<div class="container container--narrow gateway__inner">
		<a class="mark" href="/es/" aria-label="Nexora">
			<Logo size={28} />
			<span class="mark__word">Nexora</span>
		</a>
		<h1 class="display-2">Somos Nexora.</h1>
		<p class="lead">Diseñamos el silicio, el sistema, la nube y los dispositivos. Elige tu idioma para continuar.</p>
		<div class="gateway__options">
			{#each options as o (o.lang)}
				<a class="gateway__option" href={`/${o.lang}/`}>
					<span class="gateway__label">{o.label}</span>
					<span class="mono gateway__region">{o.region}</span>
				</a>
			{/each}
		</div>
		<p class="mono gateway__note">Colombia · 2016</p>
	</div>
</main>

<style>
	.gateway {
		min-height: 100svh;
		display: grid;
		place-items: center;
		padding-block: 4rem;
	}
	.gateway__inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1.5rem;
	}
	.gateway__options {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1px;
		width: 100%;
		max-width: 32rem;
		margin-block-start: 1rem;
		background: var(--line);
		border: 1px solid var(--line);
	}
	.gateway__option {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		padding: 1.5rem;
		background: var(--bg);
		transition: background-color var(--dur-mid) var(--ease);
	}
	.gateway__option:hover {
		background: var(--brand-veil);
	}
	.gateway__label {
		font-family: var(--font-display);
		font-size: var(--fs-xl);
		letter-spacing: var(--ls-title);
	}
	.gateway__region {
		color: var(--ink-3);
	}
	.gateway__note {
		color: var(--ink-3);
	}
	@media (max-width: 30rem) {
		.gateway__options {
			grid-template-columns: 1fr;
		}
	}
</style>