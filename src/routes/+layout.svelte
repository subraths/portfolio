<script lang="ts">
	import '../app.css';
	const links = ['home', 'skills', 'projects', 'about', 'tutorial'];
</script>

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
	nav {
		position: fixed;
		top: 1rem;
		left: 50%;
		transform: translateX(-50%);
		display: block;
		width: 100svw;
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
		transition-property: all;
		transition-duration: 0.5s;

		backdrop-filter: blur(5px);
		background-color: hsla(190, 100%, 60%, 0.25);
	}

	.nav-list-item:hover {
		background-color: hsla(195, 80%, 1%, 0.25);
		border-radius: 2em;
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
