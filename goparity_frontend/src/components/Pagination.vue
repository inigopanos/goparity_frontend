<template>
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
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  numOfPages: {
    type: Number,
    required: true,
  },
  
});

// Pagination variables. 3*3
const currentPage = ref(0)
const totalPages = ref(props.numOfPages)
const emits = defineEmits(['pageChanged']);

// Pagination controls
const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    emits('pageChanged', currentPage.value + 1);
    currentPage.value++
  }
}
const previousPage = () => {
  if (currentPage.value > 0) {
    emits('pageChanged', currentPage.value - 1);
    currentPage.value--
  }
}
</script>

<style scoped>
/* Your component's styles go here */
</style>
