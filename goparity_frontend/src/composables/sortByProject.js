import { ref } from 'vue'

let sortOrderProjectID = ref('asc')

function compareByProjectID(a, b){
    return sortOrderProjectID.value === 'asc' ? a.project_id - b.project_id : b.project_id - a.project_id
}

export default function sortAmortizationsByProjectID(amortizations){
    if (!Array.isArray(amortizations)){
        return []
    }
    
    const sortedAmortizations = [...amortizations]
    sortedAmortizations.sort(compareByProjectID)

    // Change sorting order
    sortOrderProjectID = sortOrderProjectID === 'asc' ? 'desc' : 'asc'

    return sortedAmortizations
}