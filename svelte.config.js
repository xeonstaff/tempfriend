import adapter from '@sveltejs/adapter-vercel';
import replace from '@rollup/plugin-replace';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;