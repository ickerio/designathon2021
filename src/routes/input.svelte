<script>
    import countries from '$lib/countries.json'
    import { input } from '$lib/api.js';

    let id, files, name, country, date;

    function handleSubmit() {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = async () => {
            console.log(date);
            id = await input({ 
                document: reader.result,
                name,
                country,
                date
            })
        }
    }
</script>

<svelte:head>
	<title>ivDB - Input</title>
</svelte:head>

<h1>Enter details to input into the database</h1>

<p>Supporting Document</p>
<input type="file" bind:files/>

<p>Full Name</p>
<input bind:value={name}/>

<p>Country</p>
<select bind:value={country}>
    {#each countries as country}
        <option value="{country.name}">{country.name}</option>
    {/each}
</select>

<p>Date Vaccinated</p>
<input type="date" bind:value={date}>

<button on:click={handleSubmit}>Submit</button>

{#if id}
    <p style="color: green;">Success! Person added to ivDB with <b>{id}</b></p>
{/if}