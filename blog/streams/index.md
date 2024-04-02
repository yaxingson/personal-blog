---
layout: blog

---

<script setup>
import { data } from './stream.data'

</script>

<div class="flex overflow-hidden">
  <Outline v-for="item in data" v-bind="item" category="stream"/>
</div>

