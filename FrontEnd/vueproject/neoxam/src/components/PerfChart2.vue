

<template>
    <canvas ref='perf' id="test"></canvas>
</template>

<script setup>
console.log('hello')

import {onMounted, ref} from 'vue'
import Chart from 'chart.js'
import perfChartData from '../perf-data.js'

const perf = ref(null)
const test = ref(0)

onMounted( () => {
  
  console.log('mounted')
  const perfchart = new Chart(
perf.value, perfChartData);
}) 





</script>
