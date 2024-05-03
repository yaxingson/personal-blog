<script setup lang="ts">
import { withDefaults, toRefs } from 'vue'
import { Stream } from '../types'

interface StreamItemProps extends Stream {
  format:'list'|'grid'
}

const props = withDefaults(defineProps<StreamItemProps>(), {format:'list'})
const { title, views, poster, publish, duration } = toRefs(props)

</script>

<template>
  <div class="stream-grid-item">
    <div><img :src="poster" alt=""></div>
    <h2>{{ title }}</h2>
    <div>
      <p>创建日期 2020-10-02</p>
      <p>时长 {{ duration }}</p>
      <p>播放量 {{ views }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stream-grid-item {
  position: relative;

  h2 {
    height: 30px;
  }

  >div:first-child {
    cursor: pointer;
  }

  >div:last-child {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 30px;
    color: #fff;
    background-color:rgba(0, 0, 0, .3);
  }

}

</style>
