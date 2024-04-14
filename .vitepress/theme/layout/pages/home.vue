<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { useData } from 'vitepress'
import Navbar from '../../components/Navbar.vue'
import GrowTree from '../../components/GrowTree.vue'

onMounted(()=>{
  console.log(document.documentElement.style.getPropertyValue('--dark-color'))
})


</script>

<template>
  <Navbar></Navbar>
  <main class="pt-10">
    <div class="fixed top-0 bottom-0 left-0 right-0 -z-10">
      <GrowTree />
    </div>
    <div class="home__container">
      <div class="home__intro__first">
        <p>Hey, welcome to my blog. I am a front-end developer and a fanatical open sourceror.</p>
      </div>
      <div>
        <span class="social-link"><Icon name="github" /> GitHub</span>
        <span class="social-link"><Icon name="twitter" :size="23" /> Twitter</span>
        <span class="social-link"><Icon name="youtube" /> Youtube </span>
        <span class="social-link"><Icon name="bilibili" /> 哔哩哔哩</span>
        <span class="social-link"><Icon name="juejin" /> 稀土掘金</span>
      </div>
      <div class="home__intro__second">
        <div></div>
        <p>
          My expertise includes html, css, js and vue. Eager to make progress together with like-minded partners.
          Outside of programming, I like to read books and watch movies. Of course, I also listen to music.
          Listening to music relaxes me physically and mentally.
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.home__container {
  position: relative;
  max-width: 1024px;
  margin: auto;
  height: 300px;
}

.home__intro__first {
  font-size: 35px;
  width: 70%;
  text-align: justify;
  margin-bottom: 30px;
}

.home__intro__second {
  font-size: 22px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  text-align: justify; 
  
  > p { width: 60%;}
}

.social-link {
  display: inline-block;
  padding: 5px 40px;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
  margin-right: 12px;
  cursor: pointer;
}


</style>
