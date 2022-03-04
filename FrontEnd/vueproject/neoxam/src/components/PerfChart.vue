

<template>
<!-- <button @click="toggleFund">Change Fund</button> -->
<div class="chart-container w-full bg-yellow-100" >
    <canvas ref='perf' id="test" ></canvas>
</div>
</template>

<script setup>
import { computed } from 'vue';

console.log('hello')

import {onMounted, ref} from 'vue'
import Chart from 'chart.js'
import {perfChartData} from '../perf-data.js'

const perf = ref(null)
const test = ref(0)
var funded_1=true;

function toggleFund(){
   funded_1 = !funded_1;
   console.log(funded_1);
   
}



onMounted( async () => {
  console.log('mounted')
  var perfchart = new Chart(
  perf.value, perfChartData(funded_1));

}) 

// computed( () => {
//   perfchart = Chart(
//   perf.value, perfChartData(funded_1));
//   console.log('changed')
// })

//style="position: relative; height:40vh; width:80vw"

</script>
<style>

</style>
