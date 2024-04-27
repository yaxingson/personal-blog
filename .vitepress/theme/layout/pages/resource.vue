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
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section class="main__container__section">
        <h2>文档</h2>
        <div class="grid grid-cols-3 resource__container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section class="main__container__section">
        <h2>友链</h2>
        <div class="grid grid-cols-3 resource__container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
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
  width: 70%;
  margin: auto;
  padding-top: 60px;
}

.main__container__section {
  margin-bottom: 30px;

  h2 {
    font-size: 25px;
    margin-bottom: 30px;
  }

  .resource__container { grid-gap: 30px;}

  .resource__container > div {
    min-height: 150px;
    background: #fff;
    border: 1px solid rgb(196 196 196 / 30%);
    border-radius: 3px;
    
    cursor: pointer;
  }
}


</style>