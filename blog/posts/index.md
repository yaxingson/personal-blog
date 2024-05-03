---
layout: blog

---
<script setup>
import { data } from './posts.data'

</script>

<Outline v-for="item in data" v-bind="item" category="post"/>
