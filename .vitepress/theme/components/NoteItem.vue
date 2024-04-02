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
  <div v-show="props.format === 'list'" class="note-list-item flex justify-between" @click="router.go('/blog/notes/202403191612')">
    <div class="flex items-center">
      <div class="square"></div>
      <h2>{{ props.title }}</h2>
    </div>
    <div>2020-02-10</div>
  </div>
  <div v-show="props.format === 'grid'" class="note-grid-item">
    <h2>{{ props.title }}</h2>
    <div>2020-10-21</div>
  </div>
</template>

<style scoped lang="scss">
.note-list-item {
  height: 80px;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
  align-items: center;

  .square {
    width: 30px;
    height: 30px;
    border: 1px solid #e5e5e5;
    margin-right: 12px;
  }
}

.note-grid-item {
  width: 45%;
  height: 300px;
  box-shadow: 1px 1px 3px 3px #eee;
  margin: 8px;
  padding: 8px;

  h2 { font-size: 25px; }


}


</style>
