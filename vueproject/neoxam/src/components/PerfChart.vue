

<template>
<div class="chart-container w-full bg-yellow-100" >
    <canvas ref='perf' id="test" ></canvas>
</div>
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

//style="position: relative; height:40vh; width:80vw"

</script>
<style>

</style>
