---
layout: blog

---
<script setup>
import { data } from './posts.data'

</script>

<Outline v-for="item in [data[0]]" v-bind="item" category="post"/>
