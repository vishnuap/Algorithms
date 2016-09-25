// Chapter-1: Fundamentals
// Outlook-Negative
// Given an array create and return and new one containing all the values of the provided array made negative. Given [1,-3,5], return [-1,-3,-5]

// Assume the argument passed is an array, is non-zero and contains numbers
// Can also be done using the Array.forEach method or using the Array.map 
function negative(arr){
  var result = []
  for(let i = 0; i < arr.length; i++){
    result.push((arr[i] < 0) ? arr[i] : (arr[i] * -1))
  }
  return result
}

var myArr = [1,-3,5]
console.log(`The negative array is ${negative(myArr)}`)
console.log(`The original array is ${myArr}`)
