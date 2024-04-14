---
layout: blog

---

<script setup>
import { data } from './column.data'

</script>

<Outline v-for="item in data" v-bind="item" category="column" />
