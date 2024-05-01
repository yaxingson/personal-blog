<script setup lang="ts">
import { withDefaults } from 'vue'

const props = withDefaults(defineProps<{
  name:string
  size?:number
}>(), { size:25 })

</script>

<template>
  <svg viewBox="0 0 1024 1024" width="25" height="25">
    <use :xlink:href="`#${props.name}`"/>
  </svg>
</template>

<style scoped lang="scss">
svg {
  display: inline-block;
  vertical-align: -7px;
}

</style>
