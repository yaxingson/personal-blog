<script setup lang="ts">


</script>

<template>
  <div class="flex justify-center">
    <ul class="flex pager">
      <li>上一页</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>...</li>
      <li>下一页</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.pager {
  margin: 30px 0;

  li {
    padding: 2px 14px;
    border:1px solid #eee;
    margin: 0 12px;
    cursor: pointer;
  }
}


</style>