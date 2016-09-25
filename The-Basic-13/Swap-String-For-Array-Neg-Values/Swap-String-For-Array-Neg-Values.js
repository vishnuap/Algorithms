// The Basic 13
// Swap-String-For-Array-Neg-Values
// Given an array of numbers replace any negative values with the string "Dojo"

function swap(arr){
  for(let i = 0; i < arr.length; i++){
    if (arr[i] < 0){ arr[i] = "Dojo" }
  }
}

var myArr = [1, -1, 2, -3, 4, -5, 6]
console.log(`The original array is ${myArr}`)
swap(myArr)
console.log(`The changed array is ${myArr}`)
