<script lang="ts">
  import { onMount } from 'svelte';

  import colors from '$lib/palette.json';
  import Stars from './Stars.svelte';
  import Sun from './Sun.svelte';

  let canvas: HTMLCanvasElement;

  onMount(async () => {
    const { renderVisuals } = await import('$lib/visuals');

    renderVisuals(window, canvas, {
      fov: 2.0,
      cameraHeight: 0.1,
      edgeColor: '#ffffff',
      faceColor: colors.champagne[500],
      birdColor: colors.air_force_blue.DEFAULT,
      shadowColor: colors.van_dyke.DEFAULT,
    });
  });
</script>

<div class="absolute left-[0px] top-[10px] z-50">
  <Stars
    classString="md:w-[900px] w-[600px]"
    color={colors.air_force_blue[800]}
  />
</div>

<div class="fixed -bottom-48 flex h-auto w-full justify-center">
  <div class="absolute bottom-[44%] right-[20%] -z-50 md:bottom-[36%]">
    <Sun
      classString="w-[110px] md:w-[250px]"
      color={colors.mustard[400]}
      strokeWidth={4}
    />
  </div>

  <canvas
    bind:this={canvas}
    class="h-full w-full min-w-[80rem] max-w-[140rem]"
  />
</div>
