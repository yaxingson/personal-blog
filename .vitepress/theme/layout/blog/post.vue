<script setup lang="ts">
import { useData } from 'vitepress'
// @ts-ignore
import { data } from '../../data/posts.data'

const { page } = useData()
const { outline } = data.find(item=>{
  return item.url.slice(1, -5) === page.value.filePath.slice(0, -3)
}) || { outline:[]}

</script>

<template>
  <header>
    <div class="h-72 bg-orange-100"></div>
  </header>
  <main>
    <div class="max-w-4xl m-auto min-h-screen relative">
      <div class="vp-doc"><Content /></div>
      <div>
        <!-- TODO -->
        
      </div>
      <div class="sticky w-56 bottom-8 outline-wrapper">
        <ul>
          <li v-for="(item, i) in outline">
            {{ i+1 }}. {{ item.title }}
            <li v-for="(subtitle, j) in item.children" class="pl-5">
             {{ `${i+1}.${j+1}` }}  {{ subtitle }}
            </li>
          </li>
        </ul>
      </div>
      <aside class="fixed bottom-8 left-1/2">
        <ul>
          <li><i data-icon="like"></i><span>点赞</span></li>
          <li><i data-icon="collect"></i><span>收藏</span></li>
          <li><i data-icon="comment"></i><span>评论</span></li>
          <li><i data-icon="star"></i><span>好评</span></li>
          <li><i data-icon="share"></i><span>分享</span></li>
        </ul>
      </aside>
    </div>
  </main>
  <footer class="h-20 text-white bg-neutral-700 grid place-content-center">
    <div>Build by vitepress CC BY-NC-SA 4.0 2021-PRESENT © Samuel</div>
  </footer>
</template>

<style scoped lang="scss">
header > div {
  background-image: url(/assets/image/3.jpg);
  background-size: 100% auto;
  background-position-y: 400px;
}


aside {
  margin-left: -540px;
  
  li { position: relative; }

  i {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-size: cover;
    margin: 10px 0;
    cursor: pointer;

    &+span {
      visibility: hidden;
      position: absolute;
      top: 5px;
      right:-60px;
      width: 50px;
      height: 35px;
      background: #6e6e6e;
      color: #eee;
      font-size: 14px;
      border-radius: 5px;
      line-height: 35px;
      text-align: center;
    }

    &:hover {
      &+span {
        visibility: visible;
      }
    }

    &[data-icon=like] {
      background-image: url(/assets/icon/like.svg);
    }

    &[data-icon=collect] {
      background-image: url(/assets/icon/collect.svg);
    }

    &[data-icon=comment] {
      background-image: url(/assets/icon/comment.svg);
    }

    &[data-icon=star] {
      background-image: url(/assets/icon/star.svg);
    }
    &[data-icon=share] {
      background-image: url(/assets/icon/share.svg);
    }
  }
}

.outline-wrapper {
  left: 100%;
  transform: translateX(260px);
}

</style>
