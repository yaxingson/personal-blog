<script setup>
import { watch } from 'vue'
import { useData } from 'vitepress'
import Navbar from '../../components/Navbar.vue'
import EffectCanvas from '../../components/EffectCanvas.vue'

const { page, theme, frontmatter } = useData()

watch(frontmatter, val=>{
  console.log(val)

})

</script>

<template>
  <Navbar></Navbar>  
  <main class="pt-10">
    <div class="fixed top-0 bottom-0 left-0 right-0 -z-10">
      <EffectCanvas />
    </div>
    <div class="max-w-3xl m-auto relative vp-doc"> 
      <Content />
    </div>
  </main>
</template>

<style scoped lang="scss">


</style>
