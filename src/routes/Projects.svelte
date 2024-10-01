<script lang="ts">
	import SkillsList from './SkillsList.svelte';
	import { addIconToSkillArr } from './Skills.svelte';

	const projects = [
		{
			title: 'Protoezy designs',
			link: 'https://protoezy.com/',
			description: `This was a project I built for a startup company. The
project is about making proto-types
to small-scale companies, collage students or entrepreneurs so that they can
execute their dream projects without huge
investment. I was responsible for processing user uploaded designs and and extracting data needed to build PCB
board and I was also responsible for connecting payments, orders and quotitions to admin dashboard`,
			tools: [
				'next.js',
				'nest.js',
				'zustand',
				'typescript',
				'passport',
				'material-ui',
				'tailwindcss',
				'aws',
				'docker',
				'zustand',
				'tracepace'
			]
		},
		{
			title: 'Real-time chat application',
			link: 'https://github.com/subraths/chat-application',
			description: `Chat application built in React and Express.js stack using web-sockets. This was my first
      major project, I gained a lot of knowledge about authentication because I built auth from scratch`,
			tools: [
				'typescript',
				'material-ui',
				'socket.io',
				'express.js',
				'react',
				'react-router',
				'redux-toolkit',
				'jwt'
			]
		}
	];
</script>

<div class="container">
	<div class="card">
		{#each projects as project}
			<div class="project">
				<div class="project-title-container">
					<h4 class="project-title">{project.title}</h4>
					<a href={project.link} target="_blank" referrerpolicy="no-referrer">
						<img src="/link.svg" alt="link" />
					</a>
				</div>
				<p class="project-desc">{project.description}</p>
				<SkillsList title="tools & technologies" items={addIconToSkillArr(project.tools)} />
			</div>
		{/each}
	</div>
</div>

<style>
	.project + .project {
		margin-block-start: 4em;
		border-block-start: 1px solid (--bg-color);
	}

	.project-title-container {
		display: flex;
		justify-content: space-between;
	}

	.project-title {
		font-weight: 300;
		font-size: 2.2rem;
		margin-block: 1em;
	}

	.project a {
		margin-block: auto;
		padding: 0.7em 0.8em;
		background-color: rgba(45, 45, 45, 1);
		border-radius: 1.4em;
	}

	.project-desc {
		font-weight: 300;
		font-size: 1.2rem;
	}

	.project img {
		width: 20px;
		height: 20px;
	}
</style>
