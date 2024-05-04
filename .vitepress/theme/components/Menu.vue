<script setup lang="ts">
import { ref } from 'vue'

const panel = ref('resource')
const show = ref(false)

function onMouseover(ev:MouseEvent) {
  const { tagName, textContent } = ev.target as HTMLElement
  if(tagName.toLowerCase() === 'li') {
    panel.value = textContent!.trim().toLowerCase()
  }
}

const showMenu = ()=>show.value = true
const hideMenu = ()=>show.value = false

</script>

<template>
  <div class="menu__icon" @click="showMenu"><i data-icon="more"></i></div>
  <div :class="['menu__overlay', { hidden:!show }]">
    <div class="menu__overlay__icon" @click="hideMenu"><i data-icon="close"></i></div>
    <div class="menu__overlay__container">
      <div>
        <ul class="flex justify-between container__navbar" @mouseover="onMouseover">
          <li>Home</li>
          <li>Blog</li>
          <li>Project</li>
          <li>Demo</li>
          <li>Resource</li>
        </ul>
      </div>
      <div>
        <div class="flex submenu__items" v-show="panel ==='home'">
          <div><a href="/">home</a></div>
        </div>
        <div class="flex submenu__items" v-show="panel ==='blog'">
          <div>
            <a href="/blog/posts/">post</a>
          </div>
          <div>
            <a href="/blog/notes/">note</a>
          </div>
          <div>
            <a href="/blog/columns/">column</a>
          </div>
          <div>
            <a href="/blog/streams/">stream</a>
          </div>
          <div>
            <a href="/blog/notice/">archivist</a>
          </div>
        </div>
        <div class="flex submenu__items" v-show="panel ==='project'">
          <div><a href="/projects/">project</a></div>
        </div>
        <div class="flex submenu__items" v-show="panel ==='demo'">
          <div><a href="/demos/">demo</a></div>
        </div>
        <div class="flex submenu__items" v-show="panel ==='resource'">
          <div><a href="/resource/">resource</a></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu__icon {
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: 1;

  [data-icon=more] {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-image: url(/assets/icon/more-2.svg);
    background-size: cover;
    cursor: pointer;
  }
}

.menu__overlay {
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 2;
}

.menu__overlay__icon {
  position: absolute;
  top: 20px;
  left: 10px;

  [data-icon=close] {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-image: url(/assets/icon/close.svg);
    background-size: cover;
    cursor: pointer;
  }
}

.menu__overlay__container {
  width: 70%;
  margin: auto;
  padding-top: 120px;
  
  .container__navbar {
    margin-bottom: 50px;

    li {
      width: 20%;
      height: 38px;
      border-bottom: 1px solid #505050;
      margin-right: 80px;
      cursor: pointer;

      &:hover {
        border-bottom-color: #eee;
        color: #fff;
      }
    }

  }
}

.submenu__items {
  height: 500px;
  perspective: 700px;

  > div {
    height: 100%;
    flex: 1;
    background: #fff;
    cursor: pointer;
    overflow: hidden;
    transform-origin: 0;

    &:not(:last-child) {
      margin-right: 30px;
    }

    &:hover {
      transform: rotateY(5deg);
    }

    > a {
      display: block;
      height: 100%;
      padding: 5px;
    }

  }

}


</style>