<script>
	import Band from '#lib/components/Band.svelte';
	import Eyebrow from '#lib/components/Eyebrow.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import SectionHead from '#lib/components/SectionHead.svelte';
	import ArrowLink from '#lib/components/ArrowLink.svelte';
	import copy from '#lib/content/blog.js';
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
		<Reveal class="featured">
			<span class="chip chip--brand">{t.featured.category}</span>
			<h2 class="display-3 featured__title">{t.featured.title}</h2>
			<p class="lead">{t.featured.summary}</p>
			<p class="mono featured__meta">{t.featured.author} · {t.featured.date} · {t.featured.readTime}</p>
			<ArrowLink label="Leer artículo" href="#contenido" />
		</Reveal>
	</div>
</Band>

<Band tight>
	<div class="container container--wide">
		<div class="grid grid--3 posts">
			{#each t.posts.items as post, i (post.title)}
				<Reveal class="card card--lined" delay={i * 40}>
					<span class="chip">{post.category}</span>
					<h3 class="title">{post.title}</h3>
					<p class="card__text">{post.summary}</p>
					<p class="mono posts__meta">{post.author} · {post.date} · {post.readTime}</p>
				</Reveal>
			{/each}
		</div>
	</div>
</Band>

<Band tone="onyx" grid>
	<div class="container container--wide">
		<SectionHead eyebrow={t.series.eyebrow} title={t.series.title} />
		<div class="grid grid--3 series">
			{#each t.series.items as s (s.name)}
				<div class="series__item">
					<h3 class="title">{s.name}</h3>
					<span class="mono series__count">{s.count}</span>
				</div>
			{/each}
		</div>
	</div>
</Band>

<Band tone="soft" tight>
	<div class="container container--narrow newsletter">
		<Eyebrow>{t.newsletter.eyebrow}</Eyebrow>
		<h2 class="display-3">{t.newsletter.title}</h2>
		<p class="lead">{t.newsletter.lead}</p>
		<form class="newsletter__form" onsubmit={(e) => e.preventDefault()}>
			<label class="mono" for="newsletter-email">Email</label>
			<input id="newsletter-email" type="email" placeholder={t.newsletter.placeholder} required />
			<button class="btn btn--primary" type="submit">{t.newsletter.button}</button>
		</form>
		<p class="mono newsletter__note">{t.newsletter.note}</p>
	</div>
</Band>

<style>
	.hero__note {
		margin-block-start: 1.5rem;
	}

	.featured {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 48rem;
	}
	.featured__title {
		max-width: 20ch;
	}
	.featured__meta {
		color: var(--ink-3);
	}

	.posts {
		margin-block-start: clamp(2rem, 4vw, 3rem);
	}
	.posts__meta {
		color: var(--ink-3);
	}

	.series {
		margin-block-start: clamp(2rem, 4vw, 3rem);
	}
	.series__item {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.series__count {
		color: var(--ink-inv-3);
	}

	.newsletter {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
	.newsletter__form {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		max-width: 28rem;
	}
	.newsletter__form label {
		text-transform: uppercase;
		color: var(--ink-3);
	}
	.newsletter__form input {
		padding: 0.75rem 1rem;
		border: 1px solid var(--line);
		border-radius: var(--r-sm);
		background: var(--bg);
		color: var(--ink);
		font: var(--text-body);
	}
	.newsletter__form input:focus {
		outline: 2px solid var(--brand);
		outline-offset: 1px;
	}
	.newsletter__note {
		color: var(--ink-3);
	}
</style>