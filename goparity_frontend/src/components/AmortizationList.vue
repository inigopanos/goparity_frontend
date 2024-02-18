<template>
  <body>
    <h1>Amortization List</h1>
    <p>This is the list for the amortization items</p>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="amortization in paginatedData" class="flex flex-wrap">
        <div class="border border-gray-300 p-4 rounded-lg">
          <!-- Amount -->
          <div class="flex items-center mb-2">
            <b class="mr-2">Amount:</b>
            <span class="text-gray-700">{{ amortization.amount }}</span>
          </div>
          <!-- Project ID -->
          <div class="flex items-center mb-2">
            <b class="mr-2">Project ID:</b>
            <span class="text-gray-700">{{ amortization.project_id }}</span>
          </div>

          <div class="w-full max-w-[5rem] h-[3px] mt-4 mb-8 mx-0 bg-[#11b8ab]"></div>

          <!-- Schedule Date -->
          <div class="flex items-center mb-2">
            <b class="mr-2">Due Date:</b>
            <span class="text-gray-700">{{ amortization.schedule_date }}</span>
          </div>

          <!-- State -->
          <div class="flex items-center">
            <b class="mr-2">State:</b>
            <span class="text-green-500">{{ amortization.state }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="m-10 flex justify-center items-center">
      <button
        @click="nextPage()"
        :disabled="currentPage === totalPages - 1"
        class="px-4 py-2 bg-blue-500 text-white rounded"
      >
        <img src="../assets/icons/circle_chev_right.svg" alt="" />
      </button>
      <span class="mx-8"> {{ currentPage + 1 }} / {{ totalPages }} </span>
      <button
        @click="previousPage()"
        :disabled="currentPage === 0"
        class="px-4 py-2 bg-blue-500 text-white rounded"
      >
        <img src="../assets/icons/circle_chev_left.svg" alt="" />
      </button>
    </div>
  </body>
</template>

<script setup lang="ts">
// Add your script setup here
import { ref, computed } from 'vue'
import amortizations from '../assets/data/payment_data.js'

// Pagination variables. 3*3
const currentPage = ref(0)
const pageSize = 9

// Pagination computed properties, total number of pages and paginated data
const totalPages = computed(() => Math.ceil(amortizations.length / pageSize))
const paginatedData = computed(() => {
  const start = currentPage.value * pageSize
  const end = start + pageSize
  console.log(start, end, amortizations.slice(start, end))
  return amortizations.slice(start, end)
})

// Pagination controls
const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++
  }
}
const previousPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}
</script>

<style scoped>
/* Your component styles here */
</style>
