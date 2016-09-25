// Chapter-1: Fundamentals
// Double-Vision
// Given array create a function to return a new array where each value in the original has been doubled. Calling double([1,2,4]) should return [2,4,8] without changing the original

// Assume the argument passed is an array, is non-empty and consists of numbers
function double(arr){
  return arr.map( function(num){ return num * 2 } )
}

var myArr = [1,2,3,4,5]
console.log(`The doubled array is ${double(myArr)}`)
console.log(`The original array is ${myArr}`)
