import { ref } from 'vue'

// Define variable to check sorting order
let sortOrderDate = ref('asc')

// Compares the Date property depending on sorting order
function compareByDate(a, b) {
  // Set the Dates
  const dateA = new Date(a.schedule_date)
  const dateB = new Date(b.schedule_date)

  return sortOrderDate.value === 'asc' ? dateA - dateB : dateB - dateA
}

// Sort amortizations by Date
export default function sortAmortizationsByDate(amortizations) {
  // If amortizations is not an array, create one
  if (!Array.isArray(amortizations)) {
    return []
  }

  // Make a copy of the amortizations array
  const sortedAmortizations = [...amortizations]
  sortedAmortizations.sort(compareByDate)
  // Change sorting order
  sortOrderDate.value = sortOrderDate.value === 'asc' ? 'desc' : 'asc'

  return sortedAmortizations
}
