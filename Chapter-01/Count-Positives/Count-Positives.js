// Chapter-1: Fundamentals
// Count-Positives
// Given array of numbers create a function to replace the last value with the number of positive values. e.g., countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it

// Assume argument sent is an array, is non-zero and consists of numbers
function countPositives(arr){
  var count = 0
  for(let i = 0; i < arr.length; i++){
    count += ((arr[i] > 0) ? 1 : 0)
  }
  arr[arr.length - 1] = count
}

var myArr = [-1,1,1,1]
console.log(`The array is ${myArr}`)
countPositives(myArr)
console.log(`The changed array is ${myArr}`)
