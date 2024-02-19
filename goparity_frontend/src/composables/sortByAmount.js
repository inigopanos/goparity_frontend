import { ref } from 'vue'

// Define variable to check sorting order
let sortOrderAmount = ref('asc')

// Compares the amount property depending on sorting order
function compareByAmount(a, b) {
  return sortOrderAmount.value === 'asc' ? a.amount - b.amount : b.amount - a.amount
}

// Sort amortizations by amount
export default function sortAmortizationsByAmount(amortizations) {
  // If amortizations is not an array, create one
  if (!Array.isArray(amortizations)) {
    return []
  }

  // Make a copy of the amortizations array
  const sortedAmortizations = [...amortizations]
  sortedAmortizations.sort(compareByAmount)

  // Change sorting order
  sortOrderAmount.value = sortOrderAmount.value === 'asc' ? 'desc' : 'asc'

  return sortedAmortizations
}
