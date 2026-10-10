<script>
	import { onMount } from 'svelte';

	let theme = $state('light');

	onMount(() => {
		theme = document.documentElement.dataset.theme || 'light';
	});

	function toggle() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme;
		try {
			localStorage.setItem('nexora:theme', theme);
		} catch {
			/* almacenamiento no disponible */
		}
	}
</script>

<button
	class="icon-btn"
	type="button"
	onclick={toggle}
	aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
	title={theme === 'dark' ? 'Tema claro' : 'Tema oscuro'}
>
	{#if theme === 'dark'}
		<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.6" />
			<g stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
				<path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
			</g>
		</svg>
	{:else}
		<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z"
				stroke="currentColor"
				stroke-width="1.6"
				stroke-linejoin="round"
			/>
		</svg>
	{/if}
</button>

<style>
	.icon-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.125rem;
		height: 2.125rem;
		border-radius: var(--r-full);
		color: var(--ink-2);
		transition:
			background-color var(--dur-fast) var(--ease),
			color var(--dur-fast) var(--ease);
	}
	.icon-btn:hover {
		background: var(--brand-veil);
		color: var(--brand);
	}
</style>