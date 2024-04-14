---
layout: blog

---

<script setup>
import { data } from './notes.data'

</script>

<Outline v-for="item in data" v-bind="item" category="note"  />
