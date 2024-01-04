import { error } from '@sveltejs/kit';

import content from '$lib/content';

export function load({ params }) {
  if (params.slug && !(params.slug in content)) {
    error(404, { message: 'Not Found' });
  }

  return { markdown: content[params.slug ?? 'home'] };
}
