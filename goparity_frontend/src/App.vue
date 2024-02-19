<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AmortizationList from './components/AmortizationList.vue'

console.log('App.vue script setup')

</script>

<template>  
  <h1 class="text-center font-bold text-3xl mt-10">Amortizations Data</h1>
  <AmortizationList />
</template>

<style scoped>

</style>
