<template>
  <div class="my-12 flex justify-center mh-4">
    <h1 class="mr-4">Sort by:</h1>
    <div>
      <button
        @click="sortAmortizationsByAmount()"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded ml-4"
      >
        Amount
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
let sortOrder = ref('asc')

// Compares the amount property depending on sorting order
function compareByAmount(a, b) {
  return sortOrder.value === 'asc' ? a.amount - b.amount : b.amount - a.amount
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
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'

  // Emit sorted amortizations to parent component (AmortizationList.vue)
  emits('sortedAmortizations', sortedAmortizations)
  return sortedAmortizations
}

</script>

<style scoped>
/* Your style code here */
</style>
