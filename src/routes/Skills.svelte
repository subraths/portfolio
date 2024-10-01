<script lang="ts">
	import Card from './Card.svelte';

	const languages = ['js', 'ts', 'golang', 'java', 'html', 'css'];
	const libraries = ['react', 'redux', 'd3.js', 'passport'];
	const frameworks = ['next.js', 'sveltekit', 'nest.js', 'tailwindcss', 'node.js', 'material-ui'];
	const database = ['postgresql', 'mongodb'];
	const other = ['aws', 'docker', 'linux', 'git'];

	function addIconToSkillArr(arr: string[]): { name: string; icon: string }[] {
		return arr.map((lang) => {
			return { name: lang, icon: `${lang.replaceAll('.', '')}.svg` };
		});
	}
</script>

<div class="skills-container">
	<div class="card">
		<h3>Skills & Technologies</h3>
		<Card title="languages" items={addIconToSkillArr(languages)} />
		<Card title="frameworks" items={addIconToSkillArr(frameworks)} />
		<Card title="libraries" items={addIconToSkillArr(libraries)} />
		<Card title="database" items={addIconToSkillArr(database)} />
		<Card title="other" items={addIconToSkillArr(other)} />
	</div>
</div>

<style>
	.skills-container {
		height: 100svh;
	}

	.skills-container h3 {
		font-weight: 300;
		font-size: 2rem;
	}

	.card {
		margin-inline: auto;
		max-width: var(--coloumn-width);
		border-radius: 1em;
		padding-block-start: 1.5em;
		padding-block-end: 3em;
		padding-inline: 4em;
		backdrop-filter: blur(2px);
		background-color: var(--bg-color);
	}
</style>
