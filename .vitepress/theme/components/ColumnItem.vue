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
  <div v-show="props.format === 'list'" class="flex column-list-item" @click="router.go('/blog/columns/vue/')">
    <div><img :src="poster" alt=""></div>
    <div class="flex flex-col justify-between">
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
  <div v-show="props.format === 'grid'" class="column-grid-item">
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
.column-list-item {
  width: 100%;
  padding: 30px 12px;
  border-bottom: 1px solid #e6e6e6;
  cursor: pointer;

  &:hover {
    background: #eee;
  }

  img {
    width: 250px;
    margin-right: 30px;
  }

  h2 { font-size: 20px;}
}

.column-grid-item {
  width: 45%;
  margin: 8px;
  background: #e2e2e2;
  border-radius: 12px;
  overflow: hidden;
}


</style>
