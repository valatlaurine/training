<script setup>

import { computed } from 'vue'

const props = defineProps({
  msg: String,
  A: Number,
  B: Number
})

console.log(props.msg)
console.log(props.A)
console.log(props.B)

const SumAB = computed(() => {return props.A + props.B;})

console.log(SumAB)

</script>

<template>

<h1>{{msg || 'Pas de message'}}</h1>

<h4>A vaut {{A}} et B vaut {{B}}</h4>

<h4>Leur somme vaut {{SumAB}}</h4>

</template>

<style>

</style>