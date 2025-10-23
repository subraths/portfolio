import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
const config = {
	preprocess: vitePreprocess(),
	kit: {
		alias: {
			$comp: 'src/components'
		}
	}
};

export default config;
