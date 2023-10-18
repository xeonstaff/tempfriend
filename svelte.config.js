import adapter from '@sveltejs/adapter-vercel';
import {} from 'dotenv'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;