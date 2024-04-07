<script setup lang="ts">
import { ref, reactive } from 'vue'
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

</script>

<template>
  <div class="slide">
    <div class="slide__aside">
      <div>
        <div class="flex aside__avatar">
          <div><img src="/assets/image/avatar.jpg" alt=""></div>
          <div>
            <h2>Samuel</h2>
            <p>welcome to my blog</p>
          </div>
        </div>
        <nav class="flex justify-between aside__subnav">
          <a href="">分类</a>
          <a href="">标签</a>
          <a href="">归档</a>
          <a href="">相册</a>
          <a href="">更多</a>
        </nav>
      </div>
      <div class="">
        <div>个人说说</div>
        <div>

        </div>
      </div>
      <div>
        <div>每日动态</div>
        <div>

        </div>
      </div>
    </div>
    <div class="slide__container">
      <Photo />
      <!-- <Tags /> -->
      <!-- <template v-if="category === 'post'">
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
      </template> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aside__avatar {
  img {
    width: 80px;
    border-radius: 50%;
    margin-right: 12px;
  }
  h2 {
    font-size: 18px;
  }
  margin-bottom: 30px;
}

.aside__subnav {
  a {
    font-size: 15px;
    padding: 3px 12px;
    color: #fff;
    background: #343434;
    border-radius: 3px;
  }
}


::v-deep(.post-list-item:first-child) {
  margin-top: 3px;
}

.slide {
  position:absolute;
  width: 100vw;
  height: 100vh;
  box-shadow: 1px 0px 3px 2px #d7d7d7;
  background: #fff;
  padding: 100px 350px 0;
  display: flex;
}

.slide__aside {
  width: 320px;

  >div {
    margin-bottom: 30px;
    padding: 8px 12px;
    box-shadow: 1px 1px 2px 2px #eee;
    border-radius: 3px;
  }
}

.slide__container {
  flex:1; 
  margin-left: 50px;
  overflow: auto;


  &::-webkit-scrollbar {
    display: none;
  }

}


</style>

