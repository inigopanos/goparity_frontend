<template>
  <div class="my-12 flex justify-center">
    <h1>Sorting</h1>
    <p>Number of amortizations: {{amortizations.length}}</p>
</div>
</template>

<script setup>
import {defineProps, readonly,} from 'vue';

// Define props and receive amortizations data from parent component (AmnortizationList.vue)
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const amortizations = readonly(props.data);

</script>

<style scoped>
/* Your style code here */
</style>
