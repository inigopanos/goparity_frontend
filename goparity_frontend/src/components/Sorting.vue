<template>
  <div class="my-12 flex justify-center">
    <h1>Sorting</h1>
    <button @click="sortAmortizations()">Sort</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

// Define props and receive amortizations data from parent component (AmnortizationList.vue)
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

// Define props and emits, from and to AmortizationList.vue
const amortizations = ref(props.data)
const emits = defineEmits(['sortedAmortizations'])

// A compare function that compares the amount property
function compareByAmount(a, b) {
  return a.amount - b.amount
}

// Sort amortizations by amount
function sortAmortizations() {
  if (!Array.isArray(amortizations.value)) {
    return []
  }

  const sortedAmortizations = [...amortizations.value] // Make a copy of the amortizations array
  sortedAmortizations.sort(compareByAmount)
  emits('sortedAmortizations', sortedAmortizations); // Emit sorted amortizations to parent component (AmortizationList.vue)
  return sortedAmortizations
}

</script>

<style scoped>
/* Your style code here */
</style>
