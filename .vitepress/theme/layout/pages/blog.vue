<script setup lang="ts">
import { ref } from 'vue'
import { eventBus, randint } from '../../utils'
import Menu from '../../components/Menu.vue';

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

console.log(randint(0, 200))

</script>

<!-- <template>
  <div class="flex justify-between container">
    <aside class="aside">
      <div>
        <div class="aside__avatar">
          <div class="flex justify-center"><img src="/assets/image/avatar.jpg" alt=""></div>
          <h2>Soetas</h2>
          <div class="btn-ground">
            <button>最新</button>
            <button>热门</button>
            <button>推荐</button>
            <button>分享</button>
            <button>留言</button>
          </div>
        </div>
      </div>
      <div class="">
        <div class="flex items-center mb-3"><Icon name="category"/><span>分类</span></div>
        <div class="category">
          <ul>
            <li>
              前端技术
              <ul class="hidden">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </li>
            <li>
              开源
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
            <li>
              产品原型和设计
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
            <li>
              电影说
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
            <li>
              杂谈和感想
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="flex items-center mb-3"><Icon name="tag"/><span>标签</span></div>
        <div class="relative" style="line-height: 3;">
          <a href="" class="inline-block mx-2" :style="{fontSize:`${randint(12, 20)}px`}">笔记</a>
          <a href="" class="inline-block mx-2" :style="{fontSize:`${randint(12, 20)}px`}">日常分享</a>
          <a href="" class="inline-block mx-2" :style="{fontSize:`${randint(12, 20)}px`}">Github</a>
          <a href="" class="inline-block mx-2" :style="{fontSize:`${randint(12, 20)}px`}">功能测试</a>
          <a href="" class="inline-block mx-2" :style="{fontSize:`${randint(12, 20)}px`}">HTTP网络</a>
          <a href="" class="inline-block mx-2" :style="{fontSize:`${randint(12, 20)}px`}">浏览器原理</a>
          <a href="" class="inline-block mx-2" :style="{fontSize:`${randint(12, 20)}px`}">电影</a>
          <a href="" class="inline-block mx-2" :style="{fontSize:`${randint(12, 20)}px`}">物质和意识</a>
          <a href="" class="inline-block mx-2" :style="{fontSize:`${randint(12, 20)}px`}">图床</a>
          <a href="" class="inline-block mx-2" :style="{fontSize:`${randint(12, 20)}px`}">ChatGPT</a>
        </div>
      </div>
    </aside>
    <div>
      <header class="header">
        <nav class="flex justify-between">
          <div class="">
            <Icon name="left-arrow"/> &nbsp;
            <Icon name="right-arrow"/>
          </div>
          <div>
            <ul class="flex justify-between header__navbar">
              <li><a href="/blog/posts/">Posts</a></li>
              <li><a href="/blog/notes/">Notes</a></li>
              <li><a href="/blog/columns/">Columns</a></li>
              <li><a href="/blog/streams/">Streams</a></li>
              <li><a href="/blog/notice/">Archivist</a></li>
            </ul>
          </div>
          <div>
            <span @click="openSearchPanel"><Icon name="search" /></span>
            <Icon name="light"/>&nbsp;
            <span @click="openNavbarPanel"><Icon name="expand"/></span>
          </div>
        </nav>
      </header>
      <main>
        <Content />
      </main>
    </div>
  </div>
  <div class="fixed top-0 right-0 bottom-0 left-0 mask-layer" v-show="showSearchPanel" @click.self="closeSearchPanel">
    <div class="absolute">
      <input type="search" placeholder="搜索站内您感兴趣的内容" v-model="keyword">
    </div>
  </div>
  <div class="fixed top-0 right-0 bottom-0 left-0 overlay z-10" v-show="showNavbarPanel">
    <div class="relative">
      <div class="close-btn-wrapper"><i data-icon="close" @click="closeNavbarPanel"></i></div>
      <div>
        <ul class="navbar flex flex-col justify-between">
          <li><a href="/">Home</a></li>
          <li><a href="/blog/posts">Blog</a></li>
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
</template> -->

<template>
  <Menu />
  <Content />
</template>


<style scoped lang="scss">
::v-deep(.outline-wrapper:last-child) {
  background: var(--panel-color);
}

.category {
  li {
    line-height: 1.5;
    padding: 10px 0;
    padding-left: 12px;
    cursor: pointer;
    font-size: 15px;

    &:hover {
      background: var(--panel-color);
    }

    ul {
      display: none;
    }
  }
}

.btn-ground {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  
  > button {
    padding: 5px 12px;
    border: 1px solid var(--border-color);
    background: var(--panel-color);
    border-radius: 5px;
    font-size: 15px;

  }
}

.footer {
  min-height: 300px;
  border-top: 1px solid #dbdbdb;

}

.container {
  padding: 30px 50px;
  min-width: 100vw;
  max-height: 100vh;

}

.aside {
  width:350px;
  margin-right: 80px;
  border-right:1px solid var(--border-color);

  > div {
    padding: 18px 12px;
    border-bottom: 1px solid var(--border-color);
   
    &:last-child {
      border-bottom: none;
    }
  }

  &+div {
    flex: 1;
  }
}

.aside__avatar {
  text-align: center;

  img {
    width: 150px;
    border-radius: 50%;
  }

  h2 {
    font-size: 25px;
    margin: 30px 0;
  }
}

.aside__subnav {
  margin-bottom: 30px;

  a {
    display: inline-block;
    padding: 2px 15px;
    background: #4c4c4c;
    color: #fff;
    font-size: 15px;
    border-radius: 3px;
  }
}

.header {
  margin-bottom: 50px;
}

.header__navbar {
  li {
    position: relative;
    padding: 0 25px;
    text-transform: uppercase;

    &::after {
      content: "";
      position: absolute;
      left:0;
      bottom: -10px;
      width: 100%;
      height: 3px;
      background: #b8b8b8;
      visibility: hidden;
    }

    &:hover {
      &::after { visibility: visible;}
    }
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

i[data-icon] {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-size: cover;
  vertical-align: middle;
  cursor: pointer;
}

[data-icon=calendar] {
  background-image: url(/assets/icon/left-arrow.svg);
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
