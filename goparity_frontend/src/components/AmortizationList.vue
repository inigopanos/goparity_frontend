<template>
  <Sorting :data="amortizations"  @sortedAmortizations="handleSortedAmortizations" />
  <body class="flex justify-center">
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
            <span
              :class="{
                'text-yellow-500': amortization.state === 'pending',
                'text-green-500': amortization.state === 'paid'
              }"
              >{{ amortization.state }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </body>

  <!-- Pagination -->
  <Pagination :numOfPages="totalPages" @pageChanged="handlePageChange" />
</template>

<script setup lang="ts">
// Add your script setup here
import { ref, computed, watchEffect } from 'vue'
import importedAmortizations from '../assets/data/payment_data.js'

import Pagination from './Pagination.vue'
import Sorting from './Sorting.vue'
import type { AmortizationI } from '@/types/amortization.interface'

// Pagination variables. 3*3
const currentPage = ref(0)
const pageSize = 9

let amortizations = ref(importedAmortizations)

// Pagination computed properties, total number of pages and paginated data
const totalPages = computed(() => Math.ceil(amortizations.value.length / pageSize))
const paginatedData = computed(() => {
  const start = currentPage.value * pageSize
  const end = start + pageSize
  return amortizations.value.slice(start, end)
})

// Sets the current page after being emitted by Pagination component
const handlePageChange = (newPage: number) => {
  currentPage.value = newPage
}

// Sets the sorted amortizations after being emitted by Sorting component
const handleSortedAmortizations = (sortedAmortizations: AmortizationI[]) => {
  amortizations.value = sortedAmortizations
}

</script>

<style scoped>
/* Your component styles here */
</style>
