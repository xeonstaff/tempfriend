import adapter from '@sveltejs/adapter-vercel';
import replace from '@rollup/plugin-replace';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	rollup: {
		plugins: [
			replace({
				// Replace process.env values with their actual values in production
				'process.env.OPENAI_API_KEY': JSON.stringify(process.env.OPENAI_API_KEY),
			}),
		],
	},
};

export default config;