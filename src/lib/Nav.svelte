<script>
	export let section;
</script>

<nav>
    <img class="icon" src="favicon.svg" alt="international vaccine database logo">

	<ul>
		<li><a href="/" class:selected={section === ""}>Lookup</a></li>
		<li><a href="/input" class:selected={section === "input"}>Input</a></li>

		<li class="about"><a href="/about" class:selected={section === "about"}>about</a></li>
	</ul>
</nav>

<style>
	nav {
        background-color: #333;
        color: white;
		font-weight: 300;
		padding: 0 1em;
	}
	.icon {
		display: block;
		width: 1em;
		height: 1em;
		float: left;
		font-size: 2em;
		position: relative;
		top: 0.4em;
		box-sizing: border-box;
		margin: 0 0.5em 0 0;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	ul::after {
		content: '';
		display: block;
		clear: both;
	}
	li {
		display: block;
		float: left;
	}
	.about {
		float: right;
	}
	.selected {
		position: relative;
		display: inline-block;
	}
	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 4px;
		background-color: #8f3985;
		display: block;
		bottom: 0;
	}
	a {
		color: inherit;
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		font-weight: 500;
	}
	@media (min-width: 400px) {
		li {
			display: inline-block;
		}
	}
</style>