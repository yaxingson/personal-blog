<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouse  } from '../../composable'

const [ x, y ] = useMouse()

const showTopBar = computed(()=>y.value >= 50)

</script>

<template>
  <main class="p-10">
    <Content />
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

</style>

