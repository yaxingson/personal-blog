<script setup lang="ts">
import Menu from '../../components/Menu.vue'

</script>

<template>
  <Menu />
  <main>
    <div class="main__container">
      <section class="main__container__section">
        <h2>工具</h2>
        <div class="grid grid-cols-3 resource__container">
          <div class="relative">
            <div class="absolute"><img src="/assets/image/tinypng.webp" alt=""></div>
            <p></p>
            <p></p>
          </div>
          <div class="relative">
            <div class="absolute"><img src="/assets/image/color-space-logo.png" alt=""></div>
            <p></p>
            <p></p>
          </div>
          <div class="relative">
            <div class="absolute"><img src="/assets/image/iconfont.svg" alt=""></div>
            <p></p>
            <p></p>
          </div>
          <div class="relative">
            <div class="absolute"><img src="/assets/image/wordart.webp" alt=""></div>
            <p></p>
            <p></p>
          </div>
          <div class="relative">
            <div class="absolute"><img src="/assets/image/shields.png" alt=""></div>
            <p></p>
            <p></p>
          </div>
          <div class="relative">
            <div class="absolute"><img src="/assets/image/stackblitz.svg" alt=""></div>
            <p></p>
            <p></p>
          </div>
        </div>
      </section>
      <section class="main__container__section">
        <h2>文档</h2>
        <div class="grid grid-cols-3 resource__container">
          <div class="relative">
            <div class="absolute"><img src="/assets/image/vue.svg" alt=""></div>
            <p></p>
            <p></p>
          </div>
          <div class="relative">
            <div class="absolute"><img src="/assets/image/react.svg" alt=""></div>
            <p></p>
            <p></p>
          </div>
          <div class="relative">
            <div class="absolute"><img src="/assets/image/pinia.svg" alt=""></div>
            <p></p>
            <p></p>
          </div>
          <div class="relative">
            <div class="absolute"><img src="/assets/image/babel.svg" alt=""></div>
            <p></p>
            <p></p>
          </div>
          <div class="relative">
            <div class="absolute"><img src="/assets/image/eslint.svg" alt=""></div>
            <p></p>
            <p></p>
          </div>
          <div class="relative">
            <div class="absolute"><img src="/assets/image/prettier.png" alt=""></div>
            <p></p>
            <p></p>
          </div>
        </div>
      </section>
      <section class="main__container__section">
        <h2>友链</h2>
        <div class="grid grid-cols-3 resource__container">
          <div class="relative">
            <div class="absolute"><img src="/assets/image/evan.jpg" alt=""></div>
            <p></p>
            <p></p>
          </div>
          <div class="relative">
            <div class="absolute"><img src="/assets/image/antfu.png" alt=""></div>
            <p></p>
            <p></p>
          </div>
          <div class="relative">
            <div class="absolute"><img src="/assets/image/zhizi.jpg" alt=""></div>
            <p></p>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main__bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index:-1;
}

.main__container {
  width: 60%;
  margin: auto;
  padding-top: 60px;

  div.absolute {
    left:50%;
    top: -50px;
    transform: translateX(-50%);
    width:80px;
    height: 80px;
    background: var(--panel-color);
    display: grid;
    place-content: center;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

  }

}

.main__container__section {
  padding-bottom: 30px;

  h2 {
    font-size: 25px;
    margin-bottom: 80px;
  }

  .resource__container { 
    grid-gap: 80px 30px;
  }

  .resource__container > div {
    min-height: 150px;
    background: var(--panel-color);
    border: 1px solid var(--border-color);
    border-radius: 3px;
    
    cursor: pointer;
  }
}


</style>