// Chapter-3: Arrays
// Array-Remove-Negatives
// Implement removeNegatives(arr) that accepts an array removes, negative values and returns the same array (not a copy. Do this in-place) preserving the non-negative order. Do not use built-in functions. Do not use nested-loops

// This is similar to the "Array-Remove-Duplicates" problem earlier in this chapter. The only change will be in the logic used to identify duplicates vs logic used to identify negatives.

// Assume argument passed is an array with integers
function removeNegatives(arr){
  var curPos = -1

  for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 0){
      [ arr[i], arr[curPos + 1] ] = [ arr[curPos + 1], arr[i] ]

      curPos += 1
    }
  }

  arr.length = curPos + 1
}

var myArr= [-1, -2, 3, 4, -5]
console.log(`The original array is ${myArr}`)
removeNegatives(myArr)
console.log(`The changed array is ${myArr}`)
