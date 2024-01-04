<script lang="ts">
  import { fade } from 'svelte/transition';

  import { page } from '$app/stores';
</script>

{#key $page.params.slug}
  <div transition:fade={{ duration: 100 }}>
    {#if $page.params.slug === undefined || $page.error !== null}
      <div class="flex flex-col md:h-[280px]">
        <div class="grow"></div>
        <slot />
      </div>
    {:else}
      <slot />
    {/if}
  </div>
{/key}
