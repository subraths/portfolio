<script lang="ts" context="module">
	import SkillsList from './SkillsList.svelte';

	const languages = ['javascript', 'typescript', 'golang', 'java', 'html', 'css'];
	const libraries = [
		'react',
		'redux-toolkit',
		'zustand',
		'react-router',
		'd3.js',
		'passport',
		'express.js',
		'jwt'
	];
	const frameworks = ['next.js', 'sveltekit', 'nest.js', 'tailwindcss', 'node.js', 'material-ui'];
	const database = ['postgresql', 'mongodb'];
	const other = ['aws', 'docker', 'linux', 'git'];

	export function addIconToSkillArr(arr: string[]): { name: string; icon: string }[] {
		return arr.map((lang) => {
			return { name: lang, icon: `${lang.replaceAll('.', '')}.svg` };
		});
	}
</script>

<div class="container">
	<div class="card">
		<h3 class="title">Skills & Technologies</h3>
		<SkillsList title="languages" items={addIconToSkillArr(languages)} />
		<SkillsList title="frameworks" items={addIconToSkillArr(frameworks)} />
		<SkillsList title="libraries" items={addIconToSkillArr(libraries)} />
		<SkillsList title="database" items={addIconToSkillArr(database)} />
		<SkillsList title="other" items={addIconToSkillArr(other)} />
	</div>
</div>
