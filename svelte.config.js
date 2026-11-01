import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: false
		}),
		paths: {
			// GitHub Pages serves this repository at /ios-font-installer/.
			// Keep local development at the root URL.
			base: process.env.GITHUB_ACTIONS === 'true' ? '/ios-font-installer' : ''
		}
	}
};

export default config;
