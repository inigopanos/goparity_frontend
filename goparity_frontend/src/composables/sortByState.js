import { ref } from 'vue'

let sortOrderState = ref('asc')

// Compares the state property depending on sorting order
function compareByState(a, b) {
  // If states are the same no need to compare
  if (a.state === b.state) {
    return 0
  }
  // If sorting order is ascending, pending state comes first
  if (sortOrderState.value === 'asc') {
    return a.state === 'pending' ? -1 : 1
  }
  // If sorting order is descending, pending state comes last
  else {
    return a.state === 'pending' ? 1 : -1
  }
}

export default function sortAmortizationsByState(amortizations) {
  // If amortizations is not an array, create one
  if (!Array.isArray(amortizations)) {
    return []
  }

  // Change sorting order
  sortOrderState.value = sortOrderState.value === 'asc' ? 'desc' : 'asc'

  // Make a copy of the amortizations array
  const sortedAmortizations = [...amortizations]
  sortedAmortizations.sort(compareByState)

  // Emit sorted amortizations to parent component (AmortizationList.vue)
  return sortedAmortizations
}
