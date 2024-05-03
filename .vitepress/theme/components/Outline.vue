<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import PostItem from './PostItem.vue'
import NoteItem from './NoteItem.vue'
import ColumnItem from './ColumnItem.vue'
import StreamItem from './StreamItem.vue'
import type { OutlineProps } from '../types'
import { eventBus } from '../utils'
import Category from './Category.vue'
import Tags from './Tags.vue'
import Photo from './Photo.vue'
import Archivist from './Archivist.vue'
import Pager from './Pager.vue'

defineOptions({inheritAttrs:false})

const props = defineProps<OutlineProps>()

const format = ref<'list'|'grid'>('list')

eventBus.on('fmt', fmt=>{
  format.value = fmt as any
})

function random(min:number, max:number) {
  return Math.floor(Math.random()*(max-min)+min)
}

function randomColor() {
  return ['pink', 'skyblue', 'tomato'].at(random(0, 3))
}

onMounted(() => {
  console.log(props)
})

</script>

<template>
  <div class="outline-wrapper">
    <div class="relative">
      <div class="absolute"></div>
      <!-- <div :class="['gap-2', {
      grid:category === 'column' || category === 'stream', 
      'grid-cols-1':category==='stream', 
      'grid-cols-3':category==='column'}]">
      <template v-if="category === 'post'">
        <PostItem v-for="post in props.posts" v-bind="post" :format="format"/>
      </template>
      <template v-else-if="category === 'note'">
        <NoteItem v-for="note in props.notes" v-bind="note" :format="format"/>
      </template>
      <template v-else-if="category === 'column'">
        <ColumnItem v-for="column in props.columns" v-bind="column" :format="format"/>
      </template>
      <template v-else-if="category === 'stream'">
        <StreamItem v-for="stream in props.streams" v-bind="stream" :format="format"/>
      </template>
      <template v-else>
        <NoticeItem v-for="notice in props.notices" v-bind="notice" :format="format"/>
      </template>
    </div> -->

    </div>
  </div>
</template>

<style lang="scss" scoped>
.outline-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow:auto;

  > div {
    height: 100vh;
    width: 70vw;
    background: #343841;

    > div:first-child {
      right: -20%;
      top:50%;
      transform: translateY(-50%);
      width: 400px;
      height:550px;
      background-image: url(/assets/photo/IMG20240406151402.jpg);
      background-size:cover;
    }
  }
 
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

}

::v-deep(.post-list-item:first-child) {
  margin-top: 3px;
}



</style>

