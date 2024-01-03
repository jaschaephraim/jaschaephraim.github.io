import { error } from '@sveltejs/kit';

import content from '$lib/content';

export function load({ params }) {
  if (params.slug && !(params.slug in content)) {
    throw error(404, { message: 'Not Found' });
  }

  return { md: content[params.slug ?? 'home'] };
}
