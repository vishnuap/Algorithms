// Chapter-3: Arrays
// Array-Min-to-Front
// Given an array of comparable values, move the lowest element to array's front, shifting back any elements previous ahead of it. Do not otherwise change the order of the elements in the array. Given [4,2,1,3,5] return [1,4,2,3,5]. Do this without using built-in functions

// Assume argument passed is a non-empty array
function minToFront(arr){
  var min = arr[0],
      minPos = 0

  for(let i = 1; i < arr.length; i++){
    if (min > arr[i]){
      min = arr[i]
      minPos = i
    }
  }

  for(let i = minPos; i > 0; i--){
    arr[i] = arr[i - 1]
  }

  arr[0] = min
}

var myArr = [4,8,9,4,10]
console.log(`The original array is ${myArr}`)
minToFront(myArr)
console.log(`The changed array is ${myArr}`)
