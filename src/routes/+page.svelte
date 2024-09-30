<script>
	import Home from './Home.svelte';
	import Skills from './Skills.svelte';
</script>

<Home />
<Skills />
<button>Hover over me</button>

<style>
	button {
		padding: 0.3em 1em;
		border: 0;
		font-size: 1rem;
		color: white;
		background-color: oklch(74% 0.11 195deg);
		transition-property: all;
		transition-duration: 0.5s;
	}

	button:hover {
		border-radius: 1em;
		background-color: oklch(55% 0.16 24deg);
	}
</style>
