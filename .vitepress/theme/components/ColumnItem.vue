<script setup lang="ts">
import { withDefaults, toRefs } from 'vue'
import { Column } from '../types'
import { useRouter } from 'vitepress'

interface ColumnItemProps extends Column {
  format:'list'|'grid'
}

const router = useRouter()

const props = withDefaults(defineProps<ColumnItemProps>(), {format:'list'})
const { poster, title, description, publish, posts, subscribers } = toRefs(props)

</script>

<template>
  <div @click="router.go('/blog/columns/vue/')">
    {{ title }}
  </div>
</template>

<style scoped lang="scss">



</style>
