<script lang="ts">
	import SkillsList from './SkillsList.svelte';
	import { addIconToArr } from '$lib/utils';

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
</script>

<div id="skills" class="container">
	<div class="card">
		<h3 class="title">Skills & Technologies</h3>
		<SkillsList title="languages" items={addIconToArr(languages)} />
		<SkillsList title="frameworks" items={addIconToArr(frameworks)} />
		<SkillsList title="libraries" items={addIconToArr(libraries)} />
		<SkillsList title="database" items={addIconToArr(database)} />
		<SkillsList title="other" items={addIconToArr(other)} />
	</div>
</div>
