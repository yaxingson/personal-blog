<script setup lang="ts">
import { withDefaults } from 'vue'
import { Note } from '../types'
import { useRouter } from 'vitepress'

interface NoteItemProps extends Note {
  format:'list'|'grid'
}

const router = useRouter()
const props = withDefaults(defineProps<NoteItemProps>(), {format:'list'})

</script>

<template>
  <div class="note-list-item" @click="router.go('/blog/notes/202403191612')">
    <p>{{ props.title }}</p>
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
