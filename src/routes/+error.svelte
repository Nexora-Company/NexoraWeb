<script>
	import { page } from '$app/state';
	import Logo from '#lib/components/Logo.svelte';
	import { url } from '#lib/i18n.js';

	let { data } = $props();
	const lang = $derived(data?.lang ?? 'es');
</script>

<svelte:head>
	<title>Error · Nexora</title>
</svelte:head>

<main class="error">
	<div class="container container--narrow error__inner">
		<a class="mark" href={url(lang)} aria-label="Nexora">
			<Logo size={24} />
			<span class="mark__word">Nexora</span>
		</a>
		<h1 class="display-2">Página no encontrada</h1>
		<p class="lead">La página que buscas no existe o fue movida.</p>
		<div class="error__actions">
			<a class="btn btn--primary" href={url(lang)}>Volver al inicio</a>
		</div>
	</div>
</main>

<style>
	.error {
		min-height: 100svh;
		display: grid;
		place-items: center;
		padding-block: 4rem;
	}
	.error__inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1.5rem;
	}
	.error__actions {
		margin-block-start: 1rem;
	}
</style>