import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: sveltePreprocess()
		})
	]
});
