---
layout: blog

---
<script setup>
import { data } from './posts.data'

</script>

<div class="flex overflow-hidden">
  <Outline v-for="item in data" v-bind="item" category="post"/>
</div>
