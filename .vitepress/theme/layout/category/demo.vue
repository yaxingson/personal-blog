<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouse  } from '../../composable'
import Menu from '../../components/Menu.vue'

const [ x, y ] = useMouse()

const showTopBar = computed(()=>y.value >= 50)

</script>

<template>
  <Menu />
  <main>
    <div class="main__container grid grid-cols-3">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main__container {
  padding-top: 70px;
  width: 80%;
  margin: auto;

  > div {
    height: 500px;
  }

}

</style>

