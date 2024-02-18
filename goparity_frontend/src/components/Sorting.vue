<template>
  <div class="my-12 flex justify-center mh-4">
    <h1>Sort</h1>
    <div class="inline-block relative">
      <button class="bg-green-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <span>Sort by: </span>
        <svg
          class="fill-current h-4 w-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 12.586l-4.293-4.293a1 1 0 0 1 1.414-1.414L10 10.172l3.293-3.293a1 1 0 0 1 1.414 1.414L10 12.586z"
          />
        </svg>
      </button>
      <ul class="absolute hidden text-gray-700 pt-1">
        <li>
          <a
            class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="#"
            >Amount</a
          >
        </li>
        <li>
          <a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"
            >ProjectID</a
          >
        </li>
        <li>
          <a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"
            >Due date</a
          >
        </li>
        <li>
          <a
            class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="#"
            >Status</a
          >
        </li>
      </ul>
    </div>

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
  emits('sortedAmortizations', sortedAmortizations) // Emit sorted amortizations to parent component (AmortizationList.vue)
  return sortedAmortizations
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.relative').addEventListener('click', function () {
    let dropdown = this.querySelector('ul')
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none'
  })
})
</script>

<style scoped>
/* Your style code here */
</style>
