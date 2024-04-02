<script setup lang="ts">
const props = defineProps<{
  name:string
  projects:Array<{
    name:string
    description:string
    logo:string
  }>
}>()

</script>

<template>
  <div>
    <div>
      <h3 class="text-center font-bold mb-2 mt-16">{{ props.name }}</h3>
    </div>
    <ul class="flex flex-wrap justify-between">
      <li v-for="project in props.projects">
      
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul li {
  width: 360px;
  height: 70px;
  margin-bottom: 18px;
  cursor: pointer;

  &:hover {
    background-color: #e8e8e8;
  }
}


</style>