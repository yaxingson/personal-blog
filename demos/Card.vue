<script setup lang="ts">
const props = defineProps<{
  poster:string
  description:string
  links:Array<{
    icon:string
    url:string
  }>
  created:Date
}>()

</script>

<template>
  <div class="demo-wrapper">


  </div>
</template>

<style scoped lang="scss">
.demo-wrapper {
  width: 600px;
  height: 500px;
  border:1px solid #d7d7d7;
  margin-bottom: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 3px 3px #eee;
  }
}


</style>