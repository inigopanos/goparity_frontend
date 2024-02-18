<template>
  <body>
    <h1>Amortization List</h1>
    <p>This is the list for the amortization items</p>
    <div v-for="amortization of amortizations" class="w-full max-w-[50%] shadow-[0_2px_3px_0_rgba(0,0,0,0.075)] p-4 rounded-[5px]">
      <div class="flex mb-2"><b>Amount: </b> {{ amortization.amount }}</div>
      <div class="flex mb-2 text-[#888]"><b>Project id: </b> {{ amortization.project_id }}</div>
      <div class="w-full max-w-[5rem] h-[3px] mt-4 mb-8 mx-0 bg-[#11b8ab]"></div>
      <div class="flex mb-2">Due: {{ amortization.schedule_date }}</div>
      <div class="flex mb-2"><b>Status: </b> {{ amortization.state }}</div>
    </div>
  </body>
</template>

<script setup lang="ts">
// Add your script setup here
import { ref } from 'vue'
import amortizations from '../assets/data/payment_data.js'
</script>

<style scoped>
/* Your component styles here */
</style>
