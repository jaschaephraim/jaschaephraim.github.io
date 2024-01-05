<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';

  import { page } from '$app/stores';
  import Html from '$lib/renderers/Html.svelte';
  import Link from '$lib/renderers/Link.svelte';

  const title = `${
    $page.data.title ? `${$page.data.title} | ` : ''
  }Jascha Ephraim`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
</svelte:head>

<SvelteMarkdown
  source={$page.data.markdown}
  renderers={{ html: Html, link: Link }}
/>
