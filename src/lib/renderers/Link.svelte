<script lang="ts">
  export let href = '';
  export let title: string | undefined;
</script>

<a {href} {title} data-sveltekit-reload><slot /></a>
