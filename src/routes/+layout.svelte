<script lang="ts">
	import { spring } from 'svelte/motion';
	import '../app.css';
	import Navbar from '$comp/Navbar.svelte';

	let coords = spring({ x: 50, y: 50 });
	let size = spring(3);

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
<Navbar />
<div class="wrapper">
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
</style>
