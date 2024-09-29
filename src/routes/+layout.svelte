<script>
	import '../app.css';
	const links = ['home', 'skills', 'projects', 'about'];
</script>

<div class="wrapper">
	<nav class="">
		<ul class="">
			{#each links as link}
				<li>
					<a class="nav-link-item" href="/{link === 'home' ? '' : link}">
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
	nav {
		position: fixed;
		top: 1rem;
		left: 50%;
		transform: translateX(-50%);
		display: block;
		width: 100svw;
	}

	nav > ul {
		margin: 0 auto;
		max-width: 400px;
		display: flex;
		list-style: none;
		border-radius: 2em;
		justify-content: center;
		padding-right: 2.28em;
		backdrop-filter: blur(5px);
		background-color: hsla(190, 100%, 60%, 0.25);
	}

	.nav-link-item {
		padding: 1em 2em;
		display: block;
		text-transform: capitalize;
		font-weight: 600;
		text-decoration: none;
		transition-property: all;
		transition-duration: 0.5s;
	}

	.nav-link-item:hover {
		background-color: hsla(195, 80%, 1%, 0.25);
		border-radius: 2em;
	}
</style>
