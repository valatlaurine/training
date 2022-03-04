<script setup>
const props = defineProps({
  title: String,
  mainnum: String,
  scdtxt: String,
  scdnum: String,
  thrdtxt: String,
  thrdnum: String,
})


</script>

<template>
<div class="card">
    <div class="row">
        <div class="titre column">{{title}}</div>
        <div class="mainnum column">{{mainnum}}</div>
    </div>
    <div class="row">
        <div class="scdtext column">{{scdtxt}}</div>
        <div class="secondnum column">{{scdnum}}</div>
    </div>
    <div class="row">
        <div class="scdtext column">{{thrdtxt}}</div>
        <div class="secondnum column">{{thrdnum}}</div>
    </div>
</div>

<!-- <div class="card column">
    <div class="row">
        <div class="titre column">{{title}}</div>
        <div class="mainnum column">{{mainnum}}</div>
    </div>
    <div class="row">
        <div class="scdtext column">{{scdtxt}}</div>
        <div class="secondnum column">{{scdnum}}</div>
    </div>
    <div v-if="props.thrdtxt.length > 0" class="row">
        <div class="scdtext column">{{scdtxt}}</div>
        <div class="secondnum column">{{scdnum}}</div>
    </div>
</div> -->
</template>

<style>
.column {
    float: left;
    width: 25%;
    padding: 0 10px;
    padding-top: 10px;
}

/* Remove extra left and right margins, due to padding */
.row { @apply flex flex-row}
.column { @apply flex flex-col flex-1}

.titre  {display: flex; flex:3; color:black; text-align: left;}
.mainnum {display: flex; flex:1; color:#0ed8b8; text-align: right;}
.scdtext {display: flex; flex:3; color:#b4bac6; text-align: left;}
.secondnum {display: flex; flex:1; color:#b4bac6; text-align: right;}

/* .card {
    display: flex;
    justify-content: center;
    flex:1;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;
    background-color: white;
    font-family: Avenir;
    text-align:justify;
    text-justify: inter-word;
    vertical-align: middle;
    min-width: 150px;
} */
.card {
    @apply flex flex-col flex-1 justify-center shadow-lg p-4 bg-white min-w-fit h-36
}


</style>