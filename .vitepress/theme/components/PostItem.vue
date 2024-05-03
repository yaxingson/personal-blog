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
  <div class="post-list-item" v-show="format === 'list'" @click="router.go(link)">
    <div class="flex flex-col justify-between">
      <div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      <div class="flex justify-between icon-ground">
        <div><Icon name="calendar"/><span>{{ date }}</span></div>
        <div><Icon name="comment"/><span>{{ comments }}</span></div>
        <div><Icon name="clock"/><span>{{ readTime }}</span></div>
      </div>
    </div>
    <div><img :src="poster" alt=""></div>
  </div>
</template>

<style scoped lang="scss">
.post-list-item {
  display: flex;
  min-height: 180px;
  padding: 18px;
  margin: 30px 0;
  cursor: pointer;
  background: var(--panel-color);
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.02);
  }


  > div:first-child {
    flex:1;

    h2 {
      font-size: 22px;
    }

    .icon-ground {
      width: 300px;

    }

  }

  > div:last-child {
    width: 155px;

  }
  
}


</style>