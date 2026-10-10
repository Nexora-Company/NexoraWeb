<script>
	import { page } from '$app/state';
	import { siteFor } from '#lib/content/site.js';
	import { swapLang, url } from '#lib/i18n.js';
	import Logo from '#lib/components/Logo.svelte';
	import ThemeToggle from '#lib/components/ThemeToggle.svelte';

	let { lang } = $props();

	const s = $derived(siteFor(lang));
	const otherLang = $derived(lang === 'es' ? 'en' : 'es');

	let open = $state(false);
	let openMenu = $state(null);

	// El panel móvil se cierra al navegar.
	$effect(() => {
		page.url.pathname;
		open = false;
		openMenu = null;
	});

	function onKeydown(event) {
		if (event.key === 'Escape') {
			open = false;
			openMenu = null;
		}
	}

	const isActive = (href) => page.url.pathname === url(lang, href);
</script>

<svelte:window onkeydown={onKeydown} />

<header class="header">
	<div class="container container--wide header__bar">
		<a class="mark" href={url(lang)} aria-label="Nexora">
			<Logo size={20} />
			
		</a>

		<nav class="header__nav" aria-label="Principal">
			{#each s.nav as item (item.href)}
				<a class="navlink" class:is-active={isActive(item.href)} href={url(lang, item.href)}>
					{item.label}
				</a>
			{/each}
			{#each s.menus as menu (menu.label)}
				<div class="navmenu">
					<button
						class="navlink navlink--btn"
						class:is-active={openMenu === menu.label}
						type="button"
						aria-expanded={openMenu === menu.label}
						onclick={() => (openMenu = openMenu === menu.label ? null : menu.label)}
					>
						{menu.label}
						<svg width="9" height="6" viewBox="0 0 9 6" aria-hidden="true">
							<path d="M1 1.5 4.5 5 8 1.5" stroke="currentColor" stroke-width="1.4" fill="none" />
						</svg>
					</button>
					{#if openMenu === menu.label}
						<div class="navmenu__panel">
							{#each menu.items as item (item.href)}
								<a class="navmenu__item" href={url(lang, item.href)}>
									<span class="navmenu__label">{item.label}</span>
									<span class="navmenu__note mono">{item.note}</span>
								</a>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</nav>

		<div class="header__actions">
			<a class="icon-link mono" href={swapLang(page.url.pathname, lang)}>
				{s.langName === 'ES' ? 'EN' : 'ES'}
			</a>
			<ThemeToggle />
			<button
				class="burger"
				type="button"
				aria-label={open ? s.actions.close : s.actions.menu}
				aria-expanded={open}
				onclick={() => (open = !open)}
			>
				<span class="burger__bar" class:is-open={open}></span>
			</button>
		</div>
	</div>

	{#if open}
		<div class="drawer">
			<nav class="drawer__nav" aria-label="Navegación móvil">
				{#each s.nav as item (item.href)}
					<a class="drawer__link" href={url(lang, item.href)}>{item.label}</a>
				{/each}
				{#each s.menus as menu (menu.label)}
					<p class="drawer__group mono">{menu.label}</p>
					{#each menu.items as item (item.href)}
						<a class="drawer__link drawer__link--sub" href={url(lang, item.href)}
							>{item.label}</a
						>
					{/each}
				{/each}
			</nav>
			<p class="drawer__note mono">{s.region} · {s.country}</p>
		</div>
	{/if}
</header>

<style>
	.navlink {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		padding: 0.4rem 0.7rem;
		border-radius: var(--r-sm);
		font-size: var(--fs-sm);
		color: var(--ink-2);
		white-space: nowrap;
	}
	.navlink:hover {
		color: var(--ink);
		background: var(--brand-veil);
	}
	.navlink.is-active {
		color: var(--brand);
	}

	.navmenu {
		position: relative;
	}
	.navmenu__panel {
		position: absolute;
		inset-block-start: calc(100% + 0.4rem);
		inset-inline-start: 0;
		min-width: 15rem;
		padding: 0.375rem;
		background: var(--bg);
		border: 1px solid var(--line);
		border-radius: var(--r-md);
		box-shadow: 0 18px 40px -18px rgb(0 0 0 / 0.28);
		display: flex;
		flex-direction: column;
	}
	.navmenu__item {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		padding: 0.55rem 0.7rem;
		border-radius: var(--r-sm);
	}
	.navmenu__item:hover {
		background: var(--brand-veil);
	}
	.navmenu__label {
		font-size: var(--fs-sm);
		font-weight: 500;
	}
	.navmenu__note {
		font-size: var(--fs-2xs);
	}

	.icon-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 2.125rem;
		height: 2.125rem;
		border-radius: var(--r-full);
		color: var(--ink-2);
		font-weight: 500;
	}
	.icon-link:hover {
		color: var(--brand);
		background: var(--brand-veil);
	}

	.burger {
		display: none;
		align-items: center;
		justify-content: center;
		width: 2.125rem;
		height: 2.125rem;
	}
	@media (max-width: 64rem) {
		.burger {
			display: inline-flex;
		}
	}
	.burger__bar {
		position: relative;
		display: block;
		width: 1.125rem;
		height: 1.5px;
		background: var(--ink);
		transition: background-color var(--dur-fast) var(--ease);
	}
	.burger__bar::before,
	.burger__bar::after {
		content: '';
		position: absolute;
		inset-inline: 0;
		height: 1.5px;
		background: var(--ink);
		transition: transform var(--dur-mid) var(--ease);
	}
	.burger__bar::before {
		transform: translateY(-5px);
	}
	.burger__bar::after {
		transform: translateY(5px);
	}
	.burger__bar.is-open {
		background: transparent;
	}
	.burger__bar.is-open::before {
		transform: rotate(45deg);
	}
	.burger__bar.is-open::after {
		transform: rotate(-45deg);
	}

	.drawer {
		border-block-start: 1px solid var(--line-soft);
		padding: 1.25rem 0 2rem;
		background: var(--bg);
	}
	.drawer__nav {
		display: flex;
		flex-direction: column;
	}
	.drawer__link {
		padding: 0.65rem 0;
		font-family: var(--font-display);
		font-size: 1.375rem;
		letter-spacing: var(--ls-title);
		border-block-end: 1px solid var(--line-soft);
	}
	.drawer__link--sub {
		font-family: var(--font-sans);
		font-size: var(--fs-base);
		color: var(--ink-2);
	}
	.drawer__group {
		margin-block: 1.25rem 0.25rem;
		text-transform: uppercase;
		color: var(--brand);
	}
	.drawer__note {
		margin-block-start: 1.5rem;
		color: var(--ink-3);
	}
</style>