<script lang="ts">
  export let href: string;
  export let newTab: boolean = false;
</script>

<a
  {href}
  class="border-none"
  target={newTab ? '_blank' : null}
  rel={newTab ? 'noopener noreferrer' : null}
>
  <slot />
</a>
