<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { type TransitionConfig } from 'svelte/transition';

	let visible = false;
	let speed = 0.8;
	let i = writable(0);
	const messages = ['Full stack developer', 'Frontend developer', 'Backend developer'];

	function createTimeout(show: boolean, duration: number, updateMessage?: boolean) {
		const timeOut = setTimeout(() => {
			visible = show;
			if (updateMessage) {
				i.update((n) => {
					if (n >= messages.length - 1) {
						return 0;
					} else {
						return n + 1;
					}
				});
			}
		}, duration);
		return timeOut;
	}

	onMount(() => {
		const timeOut = createTimeout(true, 1);
		return () => clearTimeout(timeOut);
	});

	function typewriter(node: HTMLElement, { speed = 1 }: { speed?: number }): TransitionConfig {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;

		if (!text?.length) return {};

		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t: number) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<div id="home" class="home-container">
	<h2>
		<span class="hello">Hello!</span> <span class="name-intro">My name is</span>
		<span class="name">Subrath S,</span><br /><span class="ima">I'm a</span> <br />
		{#if visible}
			<span
				class="animatedText"
				transition:typewriter={{ speed }}
				on:introend={() => createTimeout(false, 1000)}
				on:outroend={() => createTimeout(true, 500, true)}
			>
				{messages[$i] || ''}
			</span>
		{/if}
	</h2>
	<p class="description">Software engineer who loves to build awesome apps</p>
</div>

<style>
	.hello {
		color: brown;
		font-weight: 300;
	}

	.name-intro {
		font-weight: 100;
	}

	.name {
		font-family: 'Pacifico', cursive;
		font-weight: 300;
	}

	.home-container {
		height: 100svh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		font-size: 2rem;
	}

	.home-container > h2 {
		height: 4em;
	}

	.ima {
		font-weight: 100;
	}

	.animatedText {
		text-transform: capitalize;
		color: green;
		font-weight: 300;
	}

	.description {
		font-weight: 200;
		font-size: 2.5rem;
		margin-block-start: 5em;
	}
</style>
