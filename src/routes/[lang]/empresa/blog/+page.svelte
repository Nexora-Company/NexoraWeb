<script>
	import Blog from '#lib/pages/Blog.svelte';

	let { data } = $props();
</script>

<Blog {data} />
