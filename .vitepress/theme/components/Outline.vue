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
    <div>
      <div>
        Blog post
      </div>
      <div>
        01
      </div>
      <div class="grid grid-cols-2">
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
      </div>
      <div class="flex">
        <div>prev</div>
        <div>next</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.outline-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  padding: 12vh 10vw;

  > div {
    height: 100%;
   
    > div:nth-child(2) {
      margin: 50px 0 120px;
      padding: 12px 0;
      width: 300px;
      border-bottom: 1px solid #353535;

    }

    > div:last-child {
      margin-top: 150px;

      > div {
        padding: 8px 70px;
        border: 1px solid var(--border-color);
        margin-right: 50px;
      }
    }
  }

  // &::-webkit-scrollbar {
  //     width: 5px;
  //   }

  //   &::-webkit-scrollbar-thumb {
  //     background: #c4c4c4;
  //     border-radius: 5px;
  //   }

  //   &::-webkit-scrollbar-track {
  //     display: none;
  //   }
}

::v-deep(.post-list-item:first-child) {
  margin-top: 3px;
}



</style>

