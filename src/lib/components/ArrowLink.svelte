<script>
	let { href, label, external = false } = $props();
</script>

<a class="arrow-link" {href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
	<span>{label}</span>
	<svg width="14" height="10" viewBox="0 0 14 10" aria-hidden="true">
		<path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
</a>