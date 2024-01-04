<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';

  import { page } from '$app/stores';
  import Link from '$lib/renderers/Link.svelte';
</script>

<SvelteMarkdown source={$page.data.markdown} renderers={{ link: Link }} />
