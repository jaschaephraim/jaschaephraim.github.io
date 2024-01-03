<script lang="ts">
  import { fade } from 'svelte/transition';
  import SvelteMarkdown from 'svelte-markdown';

  import { page } from '$app/stores';
</script>

<div class="markdown relative">
  {#key $page.params.slug}
    <div transition:fade={{ duration: 100 }} class="absolute">
      {#if $page.params.slug === undefined}
        <div class="flex flex-col md:h-[280px]">
          <div class="grow"></div>
          <SvelteMarkdown source={$page.data.md} />
        </div>
      {:else}
        <SvelteMarkdown source={$page.data.md} />
      {/if}
    </div>
  {/key}
</div>
