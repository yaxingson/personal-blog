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
  <div class="column-grid-item" @click="router.go('/blog/columns/vue/')">
    <div><img :src="poster" alt=""></div>
    <div>
      <div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      <div>
        <span>2020-10-21</span>
        <span>文章数 {{ posts }}</span>
        <span>订阅量 {{ subscribers }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.column-grid-item {
  margin: 8px;
  background: #e2e2e2;
  border-radius: 12px;
  overflow: hidden;
}


</style>
