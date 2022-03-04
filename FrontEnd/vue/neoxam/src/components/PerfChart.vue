

<template>
<div class="chart-container w-full bg-yellow-100" >
    <canvas ref='perf' id="test" ></canvas>
</div>
</template>

<script setup>

const props = defineProps({
  serie_name: String,
  data: Array
})

console.log('TEST')
console.log(props.serie_name)

import {onMounted, ref } from 'vue'
import Chart from 'chart.js'
const perf = ref(null)


// console.log(input_data.value)

const serie_name = props.serie_name
const labels = props.data.map(d => d.date)
const data = props.data.map(d => d.nav)

console.log('data:')
console.log(data)

const perfChartData = {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: serie_name,
          data: data,
          backgroundColor: null,
          borderColor: "#36495d",
          borderWidth: 2,
          fill: false,
          pointRadius: 0,
          tension: 0, //straight
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      lineTension: 1,
      parsing: false,
      animation: false
    }
  }

onMounted( async () => {
  console.log('mounted')
  var perfchart = new Chart(
  perf.value, perfChartData);
}) 

</script>
<style>

</style>
