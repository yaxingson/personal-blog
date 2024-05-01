<script setup lang="ts">
import { onUpdated, ref } from 'vue'
import { useData } from 'vitepress'

const { theme, isDark } = useData()

function changeTheme() {
  const isLight = window.getComputedStyle(document.body).backgroundColor === 'rgb(255, 255, 255)'
  document.body.style.backgroundColor = isLight ? '#0d0f14':'#fff'
  document.documentElement.style.setProperty('--border-color', !isLight ? '#cdcdcd' : '#2c2c2c')
  
}

</script>

<template>
  <header>
    <nav class="flex justify-between items-center">
      <h2 class="sign"></h2>
      <div>
        <a v-for="(nav, i) in theme.nav" :key="i" :href="nav.link">{{ nav.text }}</a>
        <a v-for="(socialLink, i) in theme.socialLinks" :key="i" 
          :data-icon="socialLink.icon" :href="socialLink.link" :title="socialLink.icon"></a>
        <a data-icon="email" title="email"></a>
        <a data-icon="rss" title="RSS订阅"></a>
        <a data-icon="light" @click="changeTheme"></a>
      </div>
    </nav>
  </header>
  <main class="pt-14">
    <div class="fixed top-0 bottom-0 left-0 right-0 -z-10">
      
    </div>
    <div class="home__container">
      <div class="home__intro__first">
        <p>Hi, welcome to my blog. I am a front-end developer and a fanatical open sourceror.</p>
      </div>
      <div class="home__intro__second">
        <p>
          My expertise includes html, css, js and vue. Eager to make progress together with like-minded partners.
          Outside of programming, I like to read books and watch movies. Of course, I also listen to music.
          Listening to music relaxes me physically and mentally.
        </p>
      </div>
      <div class="flex justify-center items-center">
        <span class="social-link"><Icon name="github" /> GitHub</span>
        <span class="social-link"><Icon name="twitter" :size="23" /> Twitter</span>
        <span class="social-link"><Icon name="youtube" /> Youtube </span>
        <span class="social-link"><Icon name="bilibili" /> 哔哩哔哩</span>
        <span class="social-link"><Icon name="juejin" /> 稀土掘金</span>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">


header {
  line-height: 1.5;
  padding: 32px;

  .sign {
    width: 135px;
    height: 30px;
    background-image: url(/assets/image/sign-dark.png);
    background-size: cover;
  }

  nav a {
    margin-left: 30px;
    color: #374151;
    opacity: 0.8;
    vertical-align: middle;
    cursor: pointer;

    &[data-icon] {
      display: inline-block;
      width: 25px;
      height: 25px;
      background-size: cover;
    }

    &[data-icon=github] {
      background-image: url(/assets/icon/github.svg);
    }

    &[data-icon=twitter] {
      background-image: url(/assets/icon/twitter.svg);
      background-size: 23px 23px;
    }

    &[data-icon=email] {
      background-image: url(/assets/icon/email.svg);
    }

    &[data-icon=rss] {
      background-image: url(/assets/icon/rss.svg);
      background-size: 22px 22px;
      background-repeat: no-repeat;
    }

    &[data-icon=light] {
      background-image: url(/assets/icon/light.svg);
    }

    &:first-of-type { margin: 0;}
    &:hover {
      opacity: 1;
    }
  }
}

.overlay {
  background: rgba(0, 0, 0, .3);
}

input[type=search] {
  font-size: 17px;
  color: #646464;
  min-width: 500px;
  padding: 30px 25px;
  background: #fff;
  border-radius: 5px;
  letter-spacing: 2px;
  box-shadow: 1px 1px 3px 1px #939393;

  &::placeholder {
    color: #646464;
  }
}

.home__container {
  position: relative;
  max-width: 980px;
  margin: auto;
  height: 300px;
}

.home__intro__first {
  font-size: 40px;
  text-align: center;
  margin-bottom: 30px;
  color: var(--large-text-color)
}

.home__intro__second {
  font-size: 18px;
  margin: 50px 0 80px;
  text-align: center; 
  
}

.social-link {
  display: inline-block;
  padding: 5px 30px;
  border: 1px solid var(--border-color);
  border-radius: 100px;
  margin-right: 12px;
  cursor: pointer;
}


</style>
