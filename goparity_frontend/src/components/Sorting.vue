<template>
  <div class="my-12 flex flex-col items-center justify-center mh-4">
    <h1 class="mr-4">Sort by:</h1>
    <div>
      <button @click="sortAmortizationsByAmount()" class="font-bold py-2 px-4 rounded ml-4">
        Amount
      </button>

      <button @click="sortAmortizationsByState()" class="font-bold py-2 px-4 rounded ml-4">
        Status
      </button>
    </div>
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

// Define variables to check sorting order
let sortOrderAmount = ref('asc')
let sortOrderState = ref('asc')

// Compares the amount property depending on sorting order
function compareByAmount(a, b) {
  return sortOrderAmount.value === 'asc' ? a.amount - b.amount : b.amount - a.amount
}

// Sort amortizations by amount
function sortAmortizationsByAmount() {
  if (!Array.isArray(amortizations.value)) {
    return []
  }

  // Make a copy of the amortizations array
  const sortedAmortizations = [...amortizations.value]
  sortedAmortizations.sort(compareByAmount)

  // Change sorting order
  sortOrderAmount.value = sortOrderAmount.value === 'asc' ? 'desc' : 'asc'

  // Emit sorted amortizations to parent component (AmortizationList.vue)
  emits('sortedAmortizations', sortedAmortizations)
  return sortedAmortizations
}

// Compares the status property depending on sorting order
function compareByState(a, b) {
  // If states are the same no need to compare
  if (a.state === b.state) {
    return 0
  }
  // If sorting order is ascending, pending state comes first
  if (sortOrderState.value === 'asc') {
    return a.state === 'pending' ? -1 : 1
  }
  // If sorting order is descending, pending state comes last
  else {
    return a.state === 'pending' ? 1 : -1
  }
}

function sortAmortizationsByState() {
  if (!Array.isArray(amortizations.value)) {
    return []
  }

  // Change sorting order
  sortOrderState.value = sortOrderState.value === 'asc' ? 'desc' : 'asc'

  // Make a copy of the amortizations array
  const sortedAmortizations = [...amortizations.value]
  sortedAmortizations.sort(compareByState)

  // Emit sorted amortizations to parent component (AmortizationList.vue)
  emits('sortedAmortizations', sortedAmortizations)
  return sortedAmortizations
}
</script>

<style scoped>
/* Your style code here */
</style>
