import { ref } from 'vue'

let sortOrderProjectID = ref('asc')

function compareByProjectID(a, b) {
  return sortOrderProjectID.value === 'asc'
    ? a.project_id - b.project_id
    : b.project_id - a.project_id
}

export default function sortAmortizationsByProjectID(amortizations) {
  // If amortizations is not an array, create one
  if (!Array.isArray(amortizations)) {
    return []
  }

  // Change sorting order
  sortOrderProjectID.value = sortOrderProjectID.value === 'asc' ? 'desc' : 'asc'

  const sortedAmortizations = [...amortizations]
  sortedAmortizations.sort(compareByProjectID)

  return sortedAmortizations
}
