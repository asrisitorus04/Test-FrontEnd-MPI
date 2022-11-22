let number = [7, 7, 6, 2, 6, 5, 3, 2, 7]; 
 
function getOccurrence(array, value) { 
    let count = 0; 
    array.forEach((v) => (v === value && count++)); 
    return count; 
} 
 
console.log(getOccurrence(number, 0)); 
console.log(getOccurrence(number, 1)); 
console.log(getOccurrence(number, 2)); 
console.log(getOccurrence(number, 3)); 
console.log(getOccurrence(number, 4)); 
console.log(getOccurrence(number, 5)); 
console.log(getOccurrence(number, 6)); 
console.log(getOccurrence(number, 7)); 
console.log(getOccurrence(number, 8)); 
console.log(getOccurrence(number, 9));