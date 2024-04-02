<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouse  } from '../../composable'

const [ x, y ] = useMouse()

const showTopBar = computed(()=>y.value >= 50)

</script>

<template>
  <header class="relative">
    <h1 class="h-40 grid place-content-center text-4xl">Projects</h1>
  </header>
  <main>
    <div class="m-auto max-w-6xl">
      <Content />
    </div>
    <div>
      <svg class="waves" viewBox="0 24 150 28" data-astro-cid-usdx7pt5="">
        <defs data-astro-cid-usdx7pt5=""> 
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" data-astro-cid-usdx7pt5=""></path> 
        </defs> 
        <g class="parallax" data-astro-cid-usdx7pt5=""> 
          <use xlink:href="#gentle-wave" x="48" y="0" data-astro-cid-usdx7pt5=""></use> 
          <use xlink:href="#gentle-wave" x="48" y="3" data-astro-cid-usdx7pt5=""></use> 
          <use xlink:href="#gentle-wave" x="48" y="5" data-astro-cid-usdx7pt5=""></use> 
          <use xlink:href="#gentle-wave" x="48" y="7" data-astro-cid-usdx7pt5=""></use> 
        </g> 
      </svg>
    </div>
  </main>
  <aside class="fixed top-0 left-0 right-0" :class="{hidden:showTopBar}">
    <ul class="flex justify-around items-center">
      <li><a href="/"><i data-icon="home" title="home"></i></a></li>
      <li><a href="/blog/posts/"><i data-icon="blog" title="blog"></i></a></li>
      <li><a href="/projects/"><i data-icon="project" title="projects"></i></a></li>
      <li><a href="/demos/"><i data-icon="demo" title="demos"></i></a></li>
      <li><a href="/resource/"><i data-icon="resource" title="resource"></i></a></li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
aside ul {
  height: 80px;
  background: #fff;
  box-shadow: 1px 0 3px 2px #eee;

  i {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-size: cover;
    cursor: pointer;
  }

  [data-icon=home] {
    background-image: url(/assets/icon/home.svg);
  }

  [data-icon=blog] {
    background-image: url(/assets/icon/blog.svg);
  }

  [data-icon=project] {
    background-image: url(/assets/icon/project.svg);
  }

  [data-icon=demo] {
    background-image: url(/assets/icon/demo.svg);
  }

  [data-icon=resource] {
    background-image: url(/assets/icon/resource.svg);
  }
}

.parallax {
  fill: #cecece;
}




</style>

