<template>
  <div class="my-12 flex flex-col items-center justify-center mh-4">
    <h1 class="mr-4">Sort by:</h1>
    <div>
      <button @click="amountSorting()" class="font-bold py-2 px-4 rounded ml-4">Amount</button>

      <button @click="stateSorting()" class="font-bold py-2 px-4 rounded ml-4">State</button>

      <button @click="projectIdSorting()" class="font-bold py-2 px-4 rounded ml-4">
        ProjectID
      </button>

      <button @click="dateSorting()" class="font-bold py-2 px-4 rounded ml-4">
        Scheduled Date
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import sortAmortizationsByProjectID from '../composables/sortByProject.js'
import sortAmortizationsByState from '../composables/sortByState.js'
import sortAmortizationsByAmount from '../composables/sortByAmount.js'
import sortAmortizationsByDate from '../composables/sortByDate.js'

// Define props and receive amortizations data from parent component (AmnortizationList.vue)
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

// Set props and define emits, from and to AmortizationList.vue
const amortizations = ref(props.data)
const emits = defineEmits(['sortedAmortizations'])

function amountSorting() {
  let sortedAmortizations = sortAmortizationsByAmount(amortizations.value)
  // Emit sorted amortizations to parent component (AmortizationList.vue)
  emits('sortedAmortizations', sortedAmortizations)
}

function stateSorting() {
  let sortedAmortizations = sortAmortizationsByState(amortizations.value)
  // Emit sorted amortizations to parent component (AmortizationList.vue)
  emits('sortedAmortizations', sortedAmortizations)
}

function projectIdSorting() {
  let sortedAmortizations = sortAmortizationsByProjectID(amortizations.value)
  // Emit sorted amortizations to parent component (AmortizationList.vue)
  emits('sortedAmortizations', sortedAmortizations)
}

function dateSorting(){
  let sortedAmortizations = sortAmortizationsByDate(amortizations.value)
  // Emit sorted amortizations to parent component (AmortizationList.vue)
  emits('sortedAmortizations', sortedAmortizations)
}
</script>

<style scoped>
/* Your style code here */
</style>
