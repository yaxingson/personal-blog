<script setup lang="ts">
import { useData } from 'vitepress'
// @ts-ignore
import { data } from '../../data/posts.data'

const { page } = useData()
const { outline } = data.find(item=>{
  return item.url.slice(1, -5) === page.value.filePath.slice(0, -3)
}) || { outline:[]}

</script>

<template>
  <header>

  </header>
  <main>
    <div>


    </div>
  </main>
</template>

<style scoped lang="scss">
header {
  height: 60px;
  border-bottom: 1px solid #eee;
}

main > div {
  width: 60%;
  min-height: 500px;
  margin: auto;
  background: #eee;
}


</style>
