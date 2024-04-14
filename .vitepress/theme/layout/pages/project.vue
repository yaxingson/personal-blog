<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouse  } from '../../composable'
import Menu from '../../components/Menu.vue'

const [ x, y ] = useMouse()

const showTopBar = computed(()=>y.value >= 50)

</script>

<template>
  <Menu />
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
</template>

<style scoped lang="scss">
.parallax {
  fill: #cecece;
}




</style>

