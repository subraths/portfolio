import adapter from '@sveltejs/adapter-cloudflare';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
const config = {
	preprocess: vitePreprocess(),
	kit: {
		alias: {
			$comp: 'src/components'
		},
		adapter: adapter({
			routes: {
				include: ['/*']
			},
			platformProxy: {
				configPath: 'wrangler.toml',
				environment: undefined,
				experimentalJsonConfig: false,
				persist: false
			}
		})
	}
};

export default config;
