// Chapter-3: Arrays
// Array-2nd-to-Last
// Return the 2nd to last element of an array. Given [1,2,-3,4] return -3. If array is too short return null

// Assume the argument passed is an array
function secondToLast(arr){
  if (arr.length < 2){
    return null
  } else {
    return arr[arr.length - 2]
  }
}

var myArr = [0,6]
console.log(`The second to last element in ${myArr} is ${secondToLast(myArr)}`)
