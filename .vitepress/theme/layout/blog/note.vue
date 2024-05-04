<script setup lang="ts">


</script>

<template>
  <main class="relative">
    <div>
      <div>
        xxx
      </div>
    </div>
  </main>
</template>

<style langs="scss" scoped>
main {
  overflow: hidden;
}

main > div {
  width: 920px;
  margin: 120px auto;
  background: #fff;
  overflow:auto;
  max-height: 80vh;

  > div {
    min-height: 800px;
  }
}


main::before {
  content:"";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 33.33vh;
  background-image: url(/assets/photo/IMG20240406145852.jpg);
  background-size: cover;
  background-position: 0;
  z-index: -999;

}


</style>