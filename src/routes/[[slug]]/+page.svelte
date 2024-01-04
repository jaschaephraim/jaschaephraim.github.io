<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';

  import { page } from '$app/stores';
  import Link from '$lib/renderers/Link.svelte';
</script>

<svelte:head>
  <title>
    {$page.data.title ? `${$page.data.title} | ` : ''}Jascha Ephraim
  </title>
</svelte:head>

<SvelteMarkdown source={$page.data.markdown} renderers={{ link: Link }} />
