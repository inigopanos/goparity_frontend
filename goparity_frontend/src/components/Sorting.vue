<template>
  <div class="my-12 flex justify-center">
    <h1>Sorting</h1>
    <button @click="sortAmortizations()">Sort</button>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

// Define props and receive amortizations data from parent component (AmnortizationList.vue)
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const amortizations = ref(props.data)

// A compare function that compares the amount property of two objects
function compareByAmount(a, b) {
  return a.amount - b.amount
}
function sortAmortizations() {
  if (!Array.isArray(amortizations.value)) {
    return []
  }

  const sortedAmortizations = [...amortizations.value] // Hacemos una copia del array
  sortedAmortizations.sort(compareByAmount)
  return sortedAmortizations
}

</script>

<style scoped>
/* Your style code here */
</style>
