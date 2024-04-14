<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import PostItem from './PostItem.vue'
import NoteItem from './NoteItem.vue'
import ColumnItem from './ColumnItem.vue'
import StreamItem from './StreamItem.vue'
import NoticeItem from './NoticeItem.vue'
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
    <Archivist />
    <!-- <div>
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
    <Pager /> -->
  </div>
</template>

<style lang="scss" scoped>
.outline-wrapper {
  min-height: 700px;
  width: 980px;
  margin: auto;
  padding-bottom: 50px;
}


::v-deep(.post-list-item:first-child) {
  margin-top: 3px;
}



</style>

