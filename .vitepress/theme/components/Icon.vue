<script setup lang="ts">
const props = defineProps<{
  name:string
  size?:number
}>()

</script>

<template>
  <svg width="30px" height="30px">
    <use :xlink:href="`#${props.name}`" width="30px" height="30px"></use>
  </svg>
</template>

<style scoped lang="scss">


</style>