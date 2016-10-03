// Chapter-3: Arrays
// Array-Insert-At
// Given array, index and additional value, insert the value in the array at the given index. Do this without using built-in array methods.

// The built-in method to do this is "splice" - array.splice(idx, 0, value) inserts 'value' at index 'idx'

// Assume the argument passed is an array and a non-negative index value which is less than or equal to 1 more than the length of the array passed
function insertAt(arr, idx, val){
  for(let i = arr.length; i > idx; i--){
    arr[i] = arr[i - 1]
  }
  arr[idx] = val
}

var myArr = [1,2,3,4,5,6], myIdx = 0, myVal = "insert"
console.log(`The original array is ${myArr}`)
insertAt(myArr, myIdx, myVal)
console.log(`After inserting "${myVal}" at index ${myIdx}, the changed array is ${myArr}`)
