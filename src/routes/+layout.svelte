<script>
  import '../app.postcss';
  import Sidebar from './Sidebar.svelte';
  import Visuals from './Visuals.svelte';
</script>

<div class="pointer-events-none">
  <Visuals />
</div>

<div class="flex h-screen flex-col md:flex-row">
  <div class="shrink-0 px-8 py-6 md:w-80 md:py-12 md:pl-14 md:pr-0">
    <Sidebar />
  </div>
  <div class="grow px-8 py-6 md:px-14 md:py-12">
    <slot />
  </div>
</div>
