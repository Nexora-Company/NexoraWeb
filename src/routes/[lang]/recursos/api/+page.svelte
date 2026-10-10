<script>
	import Api from '#lib/pages/Api.svelte';

	let { data } = $props();
</script>

<Api {data} />
