---
layout: project

---

<script setup lang="ts">
import ProjectContainer from './ProjectContainer.vue'
import { data } from './projects.data'

</script>

<ProjectContainer v-for="{ name, projects } in data" :name="name" :projects="projects" />