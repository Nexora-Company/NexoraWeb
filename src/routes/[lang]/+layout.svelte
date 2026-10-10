<script>
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { siteFor } from '#lib/content/site.js';

	let { data, children } = $props();

	const s = $derived(siteFor(data.lang));
</script>

<svelte:head>
	<meta name="description" content={s.tagline} />
</svelte:head>

<a class="skip-link" href="#contenido">Saltar al contenido</a>
<Header lang={data.lang} />

<main id="contenido">
	{@render children()}
</main>

<Footer lang={data.lang} />