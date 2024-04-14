<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useEffectCanvas } from '../composable'

const el = ref<HTMLCanvasElement|null>(null)

onMounted(()=>useEffectCanvas(el.value!))

</script>

<template>
  <canvas ref="el"></canvas>
</template>
