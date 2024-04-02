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
  <div v-show="props.format === 'list'" class="stream-list-item flex ">
    <div><img :src="poster" alt=""></div>
    <div class="flex flex-col justify-between">
      <h2>{{ title }}</h2>
      <div>
        <span>创建日期 2020-10-02</span>
        <span>时长 {{ duration }}</span>
        <span>播放量 {{ views }}</span>
      </div>
    </div>
  </div>
  <div v-show="props.format === 'grid'" class="stream-grid-item">
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
.stream-list-item {
  width: 100%;
  padding: 12px;
  margin-bottom: 30px;
  background: #eee;

  img {
    width: 250px;
    margin-right: 30px;
  }
}

.stream-grid-item {
  width: 45%;
  position: relative;
  margin-bottom: 30px;

  h2 {
    height: 30px;
  }

  >div:first-child {
    cursor: pointer;
    &:hover~div {
      visibility: visible;
    }
  }

  >div:last-child {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 30px;
    color: #fff;
    visibility: hidden;
    background-color:rgba(0, 0, 0, .3);
  }

}

</style>
