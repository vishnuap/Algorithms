// Chapter-1: Fundamentals
// Print-One-Return-Another
// Build a function that takes array of numbers. The function should print second to last value in the array and return first odd value in array

// Assume the argument passed is an array and it consists of numbers
// Assume the array has 2 or more elements
function pora(arr){
  console.log(`The second to last element is ${arr[arr.length - 2]}`)

  for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2) { return arr[i] }
  }

  return "No odd numbers in the array"
}

var myArr = [2,4,6,8,0]
console.log(`The first odd number is "${pora(myArr)}"`);
