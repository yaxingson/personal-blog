<script setup lang="ts">
import { ref, reactive } from 'vue'
import PostItem from './PostItem.vue'
import NoteItem from './NoteItem.vue'
import ColumnItem from './ColumnItem.vue'
import StreamItem from './StreamItem.vue'
import NoticeItem from './NoticeItem.vue'
import type { OutlineProps } from '../types'
import { eventBus } from '../utils'

defineOptions({inheritAttrs:false})

const props = defineProps<OutlineProps>()

const format = ref<'list'|'grid'>('list')

eventBus.on('fmt', fmt=>{
  format.value = fmt as any
})


</script>

<template>
  <div class="min-h-96 relative outline-wrapper flex flex-wrap justify-between">
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
</template>

<style lang="scss" scoped>
.outline-wrapper {
  flex-basis: 100%;
  flex-shrink: 0;

}


</style>

