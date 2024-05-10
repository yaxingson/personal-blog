<script setup lang="ts">
import { withDefaults, toRefs } from 'vue'
import { Stream } from '../types'

interface StreamItemProps extends Stream {
  format:'list'|'grid'
}

const props = withDefaults(defineProps<StreamItemProps>(), {format:'list'})
const { title, views, poster, publish, duration } = toRefs(props)

</script>

<template>
  <div>
    <p>{{ title }}</p>
  </div>
</template>

<style scoped lang="scss">
p {
  padding: 12px 0;
  font-size: 18px;
  display: inline-block;
  cursor: pointer;
}

</style>
