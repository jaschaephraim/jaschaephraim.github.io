<script lang="ts">
  import { parse } from 'node-html-parser';

  export let text: string;

  const root = parse(text);
  const iframes = root.getElementsByTagName('iframe');
  if (iframes.length > 0) {
    const iframe = iframes[0];

    const widthAtt = iframe.getAttribute('width');
    const heightAtt = iframe.getAttribute('height');

    const paddingTop =
      widthAtt && heightAtt
        ? (parseInt(heightAtt, 10) / parseInt(widthAtt, 10)) * 100
        : 56.25;
    iframe.setAttribute(
      'class',
      'absolute bottom-0 left-0 right-0 top-0 h-full w-full'
    );
    text = `<div class="max-w-[640px]"><div class="paragraph-spacing relative overflow-hidden pt-[${paddingTop}%]">${iframe.toString()}</div></div>`;
  }
</script>

{@html text}
