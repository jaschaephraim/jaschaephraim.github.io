<script lang="ts">
  import SidebarLink from './SidebarLink.svelte';
</script>

<div class="space-y-3">
  <img
    class="relative mb-4 w-48 rounded-3xl md:mb-11 md:w-full"
    src="/jascha-ephraim.jpg"
    alt="Jascha Ephraim"
  />

  <h1 class="heading text-2xl md:text-3xl">
    <a href="/" class="heading border-none hover:text-vermilion-300">
      Jascha Ephraim
    </a>
  </h1>

  <ul>
    <li>
      <SidebarLink href="/software-engineering">
        Software engineering
      </SidebarLink>
    </li>
    <li><SidebarLink href="/music">Music</SidebarLink></li>
    <li><SidebarLink href="/film">Film</SidebarLink></li>
    <li>
      <SidebarLink href="/buddhist-chaplaincy">Buddhist chaplaincy</SidebarLink>
    </li>
  </ul>

  <ul>
    <li>
      <SidebarLink href="https://github.com/jaschaephraim" newTab>
        GitHub
      </SidebarLink>
    </li>
    <li>
      <SidebarLink href="https:/linkedin.com/in/jaschaephraim/" newTab>
        LinkedIn
      </SidebarLink>
    </li>
    <li>
      <SidebarLink href="https://vimeo.com/jaschaephraim" newTab>
        Vimeo
      </SidebarLink>
    </li>
    <li>
      <SidebarLink href="/jascha-ephraim-resume.pdf" newTab>Resume</SidebarLink>
    </li>
  </ul>

  <div>
    <SidebarLink href="/about-this-site">About this site</SidebarLink>
  </div>
</div>
