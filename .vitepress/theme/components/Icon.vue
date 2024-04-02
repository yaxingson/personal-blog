<script setup lang="ts">
import { computed, withDefaults, toRefs } from 'vue'

const props = withDefaults(defineProps<{
  name:string
  size?:number
}>(), {size:25})

const { name, size } = toRefs(props)

const url = computed(()=>`/assets/icon/${props.name}.svg`)

</script>

<template>
  <i :style="{width:`${size}px`, height:`${size}px`, backgroundImage:`url(${url})`}"></i>
</template>

<style scoped lang="scss">
i {
  display: inline-block;
  vertical-align: bottom;
  background-size: cover;
}

</style>