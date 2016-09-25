// The Basic 13
// Shift-Array-Values
// Given an array move all values forward by one ndex dropping the first and leaving a '0' value at the end

function shift(arr){
  arr.shift()
  arr.push(0)
}

var myArr = [1,2,3,4,5]
console.log(`The original array is ${myArr}`)
shift(myArr)
console.log(`The changed array is ${myArr}`)
