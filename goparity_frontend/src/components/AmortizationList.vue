<template>
  <body>
    <h1>Amortization List</h1>
    <p>This is the list for the amortization items</p>

    <!-- Table of Amortizations -->
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
    <Pagination :numOfPages="totalPages" @pageChanged="handlePageChange"/>
  </body>
</template>

<script setup lang="ts">
// Add your script setup here
import { ref, computed, defineProps } from 'vue'
import amortizations from '../assets/data/payment_data.js'

import Pagination from './Pagination.vue'

// Props. Receive page number
const props = defineProps({
  currentPage: Number,
})


// Pagination variables. 3*3
const currentPage = ref(0)
const pageSize = 9

// Pagination computed properties, total number of pages and paginated data
const totalPages = computed(() => Math.ceil(amortizations.length / pageSize))
const paginatedData = computed(() => {
  const start = currentPage.value * pageSize
  const end = start + pageSize
  return amortizations.slice(start, end)
})

const handlePageChange = (newPage: number) => {
  currentPage.value = newPage;
};


</script>

<style scoped>
/* Your component styles here */
</style>
