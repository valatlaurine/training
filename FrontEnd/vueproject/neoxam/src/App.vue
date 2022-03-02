<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup


import TopNav from './components/TopNav.vue'
import SideNav from './components/SideNav.vue'
import KPI from './components/KPI.vue'
import PerfChart from './components/PerfChart.vue'
import PerfChart2 from './components/PerfChart2.vue'
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
        <h1>Laurine2</h1>
        <div class=" flex flex-1  bg-blue-800 shadow-lg">
          <!-- <h1>Performances historiques</h1> -->
          <PerfChart/>

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
