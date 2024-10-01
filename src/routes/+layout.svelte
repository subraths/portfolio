<script lang="ts">
	import { spring } from 'svelte/motion';
	import '../app.css';

	let coords = spring({ x: 50, y: 50 });
	let size = spring(3);

	const links = ['home', 'skills', 'projects', 'about', 'tutorial'];
	console.log($coords);

	const colors = ['#fff'];
</script>

<svelte:window
	on:mousemove={(e) => {
		const values = { x: e.clientX, y: e.clientY };
		coords.set(values);
	}}
/>

<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>
<div class="circle"></div>

<div class="wrapper">
	<nav>
		<ul class="nav-list-container">
			{#each links as link, i}
				<li>
					<a
						class="nav-list-item {i === 0 && 'nav-list-item-first'} {i === links.length - 1 &&
							'nav-list-item-last'}"
						href="/{link !== 'home' ? link : ''}"
					>
						{link}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<main class="container">
		<slot />
	</main>
</div>

<style>
	.circle {
		width: 10px;
		height: 10px;
		background-color: black;
		border-radius: 50%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		pointer-events: none;
	}

	nav {
		position: fixed;
		top: 1rem;
		left: 50%;
		transform: translateX(-50%);
		display: block;
		width: 100svw;
		z-index: 99;
	}

	.nav-list-container {
		margin: unset;
		list-style: none;
		display: flex;
		justify-content: center;
	}

	.nav-list-item {
		padding: 1em 2em;
		display: block;
		text-transform: capitalize;
		font-weight: 300;
		text-decoration: none;
		color: white;
		transition-property: inherit;
		transition-duration: 0.5s;
		border-block: 1px solid green;

		backdrop-filter: blur(5px);
		background-color: rgba(255, 255, 255, 0.1);
	}

	.nav-list-item:hover {
		background-color: hsla(195, 80%, 1%, 0.25);
		border-radius: 2em;
		border: 2px solid gold;
	}

	.nav-list-item-first {
		border-top-left-radius: 2em;
		border-bottom-left-radius: 2em;
	}

	.nav-list-item-last {
		border-top-right-radius: 2em;
		border-bottom-right-radius: 2em;
	}
</style>
