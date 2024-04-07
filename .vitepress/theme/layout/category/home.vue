<script setup lang="ts">
import { watch } from 'vue'
import { useData } from 'vitepress'
import Navbar from '../../components/Navbar.vue'
import EffectCanvas from '../../components/EffectCanvas.vue'

const { page, theme, frontmatter } = useData()

watch(frontmatter, val=>{
  console.log(val)

})

</script>

<template>
  <Navbar></Navbar>  
  <main class="pt-10">
    <div class="fixed top-0 bottom-0 left-0 right-0 -z-10">
      
    </div>
    <div class="home__container">
      <div class="home__intro__first">
        <p>👋, I am a front-end developer and a fanatical open sourceror living in Hebei, China.</p>
      </div>
      <div>
        <span class="social-link"><Icon name="github" /> GitHub</span>
        <span class="social-link"><Icon name="twitter" size="23" /> Twitter</span>
        <span class="social-link"><Icon name="youtube" /> Youtube </span>
        <span class="social-link"><Icon name="bilibili" /> 哔哩哔哩</span>
        <span class="social-link"><Icon name="juejin" /> 稀土掘金</span>
      </div>
      <div class="home__intro__second">
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

  &::after {
    content:"";
    position:absolute;
    width: 100px;
    height:100px;
    background: #eee;
    border-radius: 50%;
    box-shadow: 82px 55px 0 0 #eee, 
      -79px 59px 0 0 #eee, 
      79px 151px 0 0 #eee, 
      -86px 155px 0 0 #eee, 
      -2px 204px 0 0 #eee,
      -31px -95px 0 0 #eee, 
      -152px -4px 0 0 #eee, 
      -129px -99px 0 0 #eee;
  }
}

.home__intro__first {
  font-size: 30px;
  width: 70%;
  text-align: justify;
  margin-bottom: 30px;
}

.home__intro__second {
  font-size: 18px;
  margin-top: 50px;
  display: flex;
  justify-content: end;
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
