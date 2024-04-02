---
layout: demo

---

<script setup lang="ts">
import Card from './Card.vue'
import { data } from './demos.data'

</script>

<div class="flex justify-between" style="flex-wrap: wrap;">
  <Card v-for="demo in data" v-bind="demo"/>

</div>

