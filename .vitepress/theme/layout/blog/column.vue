<script setup lang="ts">

</script>

<template>
  <main>
    <div class="wrapper">
      <section class="header"></section>
      <section class="posts">
        <ul>
          <li><a href="/blog/columns/vue/component">component</a></li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background: #eee;
}

.wrapper {
  width: 980px;
  margin: auto;
  overflow: hidden;

  .header {
    height: 300px;
    margin: 30px 0;
    background-color: #fff;
  }

  .posts {
    height: 800px;
    background-color: #fff;
  }

}


</style>