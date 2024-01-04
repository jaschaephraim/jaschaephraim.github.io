<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';

  import { page } from '$app/stores';
  import Html from '$lib/renderers/Html.svelte';
  import Link from '$lib/renderers/Link.svelte';
</script>

<svelte:head>
  <title>
    {$page.data.title ? `${$page.data.title} | ` : ''}Jascha Ephraim
  </title>
</svelte:head>

<SvelteMarkdown
  source={$page.data.markdown}
  renderers={{ html: Html, link: Link }}
/>
