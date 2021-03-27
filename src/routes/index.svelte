<script>
	import countries from '$lib/countries.json'
    import { lookup } from '$lib/api.js';

	let id;
	let data;
	async function handleSubmit() {
		const res = await lookup(id);
 		data = res;
	}
</script>

<svelte:head>
	<title>ivDB - Lookup</title>
</svelte:head>

<h1>Enter an ID to scan the database</h1>

<input bind:value={id}>

<button on:click={handleSubmit}>Submit</button>

{#if data && !data.error}
	<p><b>Name</b>: {data.name}</p>
	<p><b>Country</b>: {data.country} </p>
	<p><b>Date</b>: {data.date}</p>
	<embed src="{data.document}" type="application/pdf">
{/if}
{#if data?.error}
	<p style="color: red;">Failed with error: {data.error}</p>
{/if}

<style>
	embed {
		width: 50vw;
		height: 75vw;
	}
</style>