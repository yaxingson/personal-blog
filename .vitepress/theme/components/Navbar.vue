<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()

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
        <a data-icon="light"></a>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  padding: 32px;

  .sign {
    width: 135px;
    height: 30px;
    background-image: url(/assets/image/sign.png);
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

</style>