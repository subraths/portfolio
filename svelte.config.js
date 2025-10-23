import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-node';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		alias: {
			$comp: 'src/components'
		},
		adapter: adapter()
	}
};

export default config;
