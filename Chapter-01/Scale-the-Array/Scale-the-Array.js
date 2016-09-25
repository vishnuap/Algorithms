// Chapter-1: Fundamentals
// Scale-the-Array
// Given an array "arr" and number "num" multiply all values in "arr" by "num" and return the changed array "arr"

// Assume the argument passed is an array and consists of numbers
function scale(arr, num){
  for(let i = 0; i < arr.length; i++){
    arr[i] *= num
  }
}

var myArr = [1,2,3,4,5,6],
    myNum = 3
console.log(`The original array is ${myArr}`)
scale(myArr, myNum)
console.log(`The changed array is ${myArr}`)
