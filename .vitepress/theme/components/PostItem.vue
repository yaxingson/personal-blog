<script setup lang="ts">
import { withDefaults, toRefs, computed } from 'vue'
import { Post } from '../types'
import { useRouter } from 'vitepress'

interface PostItemProps extends Post {
  format:'list'|'grid'
}

const router = useRouter()

const props = withDefaults(defineProps<PostItemProps>(), {format:'grid'})

const { title, description, poster, format, publish, comments, readTime } = toRefs(props)

const date = computed(()=>{
  const createdDate = new Date(publish.value)
  const year = createdDate.getFullYear()
  const month = `${createdDate.getMonth()+1}`.padStart(2, '0')
  const day = `${createdDate.getDate()}`.padStart(2, '0')

  return `${year}-${month}-${day}`
})

const link = computed(()=>{
  return `/blog/posts/202403252244`
})

</script>

<template>
  <div class="post-list-item" v-show="format === 'list'">
    <p @click="router.go(link)">{{  title  }}</p>
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