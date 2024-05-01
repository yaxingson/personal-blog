<script setup lang="ts">
import { computed } from 'vue'
import { useMouse  } from '../../composables'
import Menu from '../../components/Menu.vue'

const [ x, y ] = useMouse()


</script>

<template>
  <Menu />
  <main>
    <div class="main__container grid grid-cols-3 gap-3">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </main>
  <div class="overlay hidden">
    <div class="overlay__container"></div>
  </div>
</template>

<style scoped lang="scss">
.main__container {
  padding-top: 70px;
  width: 80%;
  margin: auto;

  > div {
    height: 500px;
    background: #eee;
    cursor: pointer;
  }
}

.overlay {
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  background: rgba(0, 0, 0, .3);
  z-index: 1;

  .overlay__container {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin: auto;
    width: 800px;
    height: 600px;
    background: #fff;
  }
}


</style>

