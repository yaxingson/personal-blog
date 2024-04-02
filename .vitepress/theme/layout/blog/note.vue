<script setup lang="ts">


</script>

<template>
  <header>
    <div class="banner"></div> 
  </header>
  <main class="m-auto flex justify-center">
    <div class="my-20 p-5 container min-h-screen">
      <Content />
    </div>
  </main>
</template>

<style scoped>
.banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 300px;
  background-image: url(/assets/image/2.jpg);
  background-size: cover;
  z-index: -1;
}

.container {
  width: 800px;
  box-shadow: 1px 1px 3px 3px #eee;
  border-radius: 5px;
  background: #fff;
}


</style>