/* eslint-disable import/no-extraneous-dependencies */

import adapter from '@sveltejs/adapter-static';
// eslint-disable-next-line import/no-unresolved
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: '404.html',
    }),
  },
};

export default config;
