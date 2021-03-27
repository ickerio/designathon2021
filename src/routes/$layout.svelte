<script>
    import { page } from '$app/stores';
	import Nav from '$lib/Nav.svelte';

    $: section = $page.path.split('/')[1];
</script>
<Nav {section}/>

<main>
	<slot></slot>
</main>

<style>
	main {
		position: relative;
		margin: 0 auto;
		box-sizing: border-box;
		width: 50%;
	}
</style>