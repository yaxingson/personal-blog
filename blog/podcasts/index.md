---
layout: blog

---

<script setup>
import { data } from './podcasts.data'

</script>

<Outline v-for="item in data" v-bind="item" category="podcast"/>
