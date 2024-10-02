<script lang="ts">
	const links = ['home', 'skills', 'projects', 'contact'];

	function scrollIntoView(event: Event) {
		const target = event.target as HTMLAnchorElement;
		const href = target.getAttribute('href');
		if (!href) return;

		const el = document.querySelector(href);
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<nav>
	<ul class="nav-list-container">
		{#each links as link, i}
			<li>
				<a
					class="nav-list-item {i === 0 && 'nav-list-item-first'} {i === links.length - 1 &&
						'nav-list-item-last'}"
					href={'#' + link}
					on:click|preventDefault={scrollIntoView}
				>
					{link}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
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
		transition-property: inherit;
		transition-duration: 220ms;
		color: var(--font-color);

		backdrop-filter: blur(3px);
		background-color: rgba(45, 45, 45, 0.8);
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
