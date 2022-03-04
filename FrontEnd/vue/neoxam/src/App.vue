<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import {onMounted, ref, watch} from 'vue'
import TopNav from './components/TopNav.vue'
import SideNav from './components/SideNav.vue'
import KPI from './components/KPI.vue'
import PerfChart from './components/PerfChart.vue'

const select_value = ref('FUND_1')
const data = ref([])

const query_data = async (fund_id) => {
  console.log('QUERY:',fund_id)
  const req = 'http://localhost:4000/data?fund_id='+fund_id
  return  await (await fetch(req)).json();
}

onMounted( async () => {
  data.value = await query_data(select_value.value)
}) 

// watch works directly on a ref
watch(select_value, async (newselect_value, oldselect_value) => {
  data.value = await query_data(select_value.value)
})

</script>

<template>

    <TopNav/>

      <SideNav/>
      <div class="rightside flex flex-col p-5 w-full">

        <h1>Performance</h1>

        <div class="maincontainer">
          <KPI :title="'perf'" :mainnum="'10%'" :scdtxt="'indice'" :scdnum="'11%'"/>
          <KPI :title="'perfoo'" :mainnum="'20%'" :scdtxt="'indice n°2'" :scdnum="'21%'"/>
          <KPI :title="'perfor'" :mainnum="'30%'" :scdtxt="'indice n°3'" :scdnum="'31%'"/>
          <KPI :title="'perform'" :mainnum="'40%'" :scdtxt="'indice n°4'" :scdnum="'41%'" :thrdtxt="'indice bis'" :thrdnum="'12%'"/>
        </div>
        <div class=" flex flex-1 flex-col bg-white shadow-lg">
          <!-- <h1>Performances historiques</h1> -->
          <div class="flex flex-row max-h-7">
            <h1>Performance</h1>
            <select v-model="select_value">
              <option value="FUND_1"> fonds 1</option>
              <option value="FUND_2"> fonds 2</option>
           </select>
          </div>
          <div class="flex flex-1">
             <PerfChart :key="data[0].fund_id" :serie_name="select_value" :data="data" v-if="data.length"/>
          </div>
          

        </div> 
      
      
    </div>

    

</template>

<style>
:root {
    --nav-icon-width: 80px;
    --nav-side-width: 250px;
    --nav-border-width: 10px;
  }

body {
  margin:0px;
}




/* .maincontainer {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    margin:20px 0px;
    align-items: stretch;
} */

.maincontainer{
  @apply flex flex-row flex-wrap gap-5 mb-5 mt-5 
}
</style>
