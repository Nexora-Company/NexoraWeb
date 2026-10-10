<script>
	import { untrack } from 'svelte';

	let {
		delay = 0,
		as: tag = 'div',
		class: className = '',
		children
	} = $props();

	let el = $state(null);
	let shown = $state(false);

	$effect(() => {
		if (!el || untrack(() => shown)) return;
		if (typeof IntersectionObserver === 'undefined') {
			shown = true;
			return;
		}
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					shown = true;
					io.disconnect();
				}
			},
			{ rootMargin: '0px 0px -10% 0px', threshold: 0.04 }
		);
		io.observe(el);
		return () => io.disconnect();
	});
</script>

<svelte:element
	this={tag}
	bind:this={el}
	class="reveal {className}"
	class:is-visible={shown}
	style:transition-delay={delay ? `${delay}ms` : undefined}
>
	{@render children?.()}
</svelte:element>