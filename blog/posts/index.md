---
layout: blog

---
<script setup>
import { data } from './posts.data'

</script>

<div class="slide__container">
  <Outline v-for="item in data" v-bind="item" category="post"/>
</div>
