// Chapter-3: Arrays
// Array-Reverse
// Given a numerical array, reverse the order of values in-place. Do no use any built-in methods

// Assume that the argument passed is a non-empty array containing numbers
function reverse(arr){
  var mid = Math.floor(arr.length / 2),
      len = arr.length

  for(let i = 0; i < mid; i++){
    // swap values without using a temp variable!!!
    [ arr[i], arr[len - 1 - i] ] = [ arr[len - 1 - i], arr[i] ]
  }
}

var myArr = [1,2,3,4,5,6,7]
console.log(`The original array is ${myArr}`)
reverse(myArr)
console.log(`The changed array is ${myArr}`)
