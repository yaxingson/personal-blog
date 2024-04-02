<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '../../components/Navbar.vue'
import { eventBus } from '../../utils'

const showSearchPanel = ref(false)
const keyword = ref('')

const showNavbarPanel = ref(false)

function openSearchPanel() {
  showSearchPanel.value = true
}

function closeSearchPanel() {
  showSearchPanel.value = false
  keyword.value = ''
}

function openNavbarPanel() {
  showNavbarPanel.value = true
}

function closeNavbarPanel() {
  showNavbarPanel.value = false
}

const list = ()=>{
  eventBus.emit('fmt', 'list')
}

const grid = ()=>eventBus.emit('fmt', 'grid')

</script>

<template>
  <header>
    <nav class="py-5 px-5 flex justify-end">
      <div>
        <i data-icon="search" @click="openSearchPanel"></i>
        <i data-icon="list" title="列表展示" @click="list"></i>
        <i data-icon="grid" title="网格展示" @click="grid"></i>
        <i data-icon="expand" @click="openNavbarPanel"></i>
      </div>
    </nav>
  </header>
  <main>
    <div class="max-w-4xl m-auto">
      <ul class="min-h-24 text-3xl text-gray-400 flex justify-between items-center">
        <li class="hover:text-gray-800"><a href="/blog/posts/">Posts</a></li>
        <li class="hover:text-gray-800"><a href="/blog/notes/">Notes</a></li>
        <li class="hover:text-gray-800"><a href="/blog/columns/">Columns</a></li>
        <li class="hover:text-gray-800"><a href="/blog/streams/">Streams</a></li>
        <li class="hover:text-gray-800"><a href="/blog/notice/">Notice</a></li>
      </ul>
      <div class="tag-ground">
        <span class="tag">全部</span>
        <span class="tag">HTML</span>
        <span class="tag">CSS</span>
        <span class="tag">JavaScript</span>
        <span class="tag">Vue</span>
        <span class="tag">Nodejs</span>
        <span class="tag">Window</span>
        <span class="tag">Git</span>
        <span class="tag">Linux</span>
        <span class="tag">Mysql</span>
        <span class="tag">Typescript</span>
        <span class="tag">随笔</span>
        <span class="tag">感想和经验分享</span>
      </div>
      <div class="pt-12 relative content-container">
        <div>
          <span>2</span>
          <span>0</span>
          <span>2</span>
          <span>4</span>
        </div>
        <Content />
      </div>
    </div>
  </main>
  <div class="fixed top-0 right-0 bottom-0 left-0 mask-layer" v-show="showSearchPanel" @click.self="closeSearchPanel">
    <div class="absolute">
      <input type="search" placeholder="搜索站内您感兴趣的内容" v-model="keyword">
    </div>
  </div>
  <div class="fixed top-0 right-0 bottom-0 left-0 overlay" v-show="showNavbarPanel">
    <div class="relative">
      <div class="close-btn-wrapper"><i data-icon="close" @click="closeNavbarPanel"></i></div>
      <div>
        <ul class="navbar flex flex-col justify-between">
          <li><a href="/">Home</a></li>
          <li><a href="/blog/posts/">Blog</a></li>
          <li><a href="/projects/">Projects</a></li>
          <li><a href="/demos/">Demos</a></li>
          <li><a href="/resource/">Resource</a></li>
        </ul>
      </div>
      <div class="social-links flex justify-around items-center">
        <span><i data-icon="github"></i></span>
        <span><i data-icon="twitter"></i></span>
        <span><i data-icon="juejin"></i></span>
      </div>
    </div>
  </div>
  <div class="control">
    
  </div>
</template>

<style scoped lang="scss">
.content-container {
  > div:nth-child(1) {
    position: absolute;
    font-size: 80px;
    left: -100px;
    top: 48px;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: transparent;
    -webkit-text-stroke: 2px #e2e2e2;
  }

}

.tag-ground {
  overflow-x: scroll;
  text-wrap: nowrap;

  &::-webkit-scrollbar {
    height: 0;
  }

  &::-webkit-scrollbar-track {
    background-color: rgb(119, 119, 119);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(196, 196, 196);
  } 
}

[data-icon=more] {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url(/assets/icon/more.svg);
  background-size: cover;
  vertical-align: middle;
  cursor: pointer;
}

.tag {
  display: inline-block;
  font-size: 17px;
  padding: 5px 12px;
  background: #737373;
  color: #fff;
  border-radius: 5px;
  margin: 8px;
  margin-left: 0;
  cursor: pointer;
}

.control {
  position: fixed;
  left:0;
  top:0;
  width: 0px;
  height: 0px;
  border: 150px solid transparent;
  border-top-color: #cecece;
  border-left-color: #cecece;
  z-index: -1;
}

nav i {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-size: cover;
  cursor: pointer;

  &[data-icon=home] {
    background-image: url(/assets/icon/home.svg);
  }

  &[data-icon=search] {
    background-image: url(/assets/icon/search.svg);
  }

  &[data-icon=light] {
    background-image: url(/assets/icon/light.svg);
  }

  &[data-icon=expand] {
    background-image: url(/assets/icon/expand.svg);
    margin-left: 25px;
  }

  &[data-icon=list] {
    background-image: url(/assets/icon/list.svg);
    margin-left: 25px;
  }

  &[data-icon=grid] {
    background-image: url(/assets/icon/grid.svg);
    margin-left: 25px;
  }

}

.overlay {
  background: rgba(0, 0, 0, .5);

  > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 25rem;
    background: #fff;
    padding: 8rem 6rem;
    font-size: 22px;

    &::before {
      content:"";
      position: absolute;
      top: 0;
      bottom: 0;
      left: -50rem;
      width: 0;
      height: 0;
      border: 25rem solid transparent;
      border-top-width: 100vh;
      border-bottom-width: 100vh;
      border-right-color: #fff;
      border-bottom-color: #fff;

    }

    i {
      display: inline-block;
      width: 25px;
      height: 25px;
      background-size: cover;
      cursor: pointer;
    }

    .close-btn-wrapper {
      position: absolute;
      top:20px;
      right: 30px;
  
      [data-icon=close] {
        background-image: url(/assets/icon/close.svg);
      }
    }
    
    .navbar {
      min-height: 25rem;
    }

    .social-links {
      position: absolute;
      bottom: 50px;
      right: 30px;
      width: 18rem;
      
      span {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        background: #eee;
        line-height: 60px;
        text-align: center;

        &:hover {
          background: #cfcfcf;
        }
      }

      [data-icon=github] {
        background-image: url(/assets/icon/github.svg);
      }

      [data-icon=twitter] {
        background-image: url(/assets/icon/twitter.svg);
      }

      [data-icon=juejin] {
        background-image: url(/assets/icon/juejin.svg);
      }
    }
  }
}

.mask-layer {
  background: rgba(0, 0, 0, 0.5);

  > div {
    width: 520px;
    height: 80px;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 5px;
    padding: 12px 18px;

    input {
      width: 100%;
      height: 100%;

    }
  }
}


</style>
