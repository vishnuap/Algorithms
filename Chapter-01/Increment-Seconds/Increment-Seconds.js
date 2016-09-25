// Chapter-1: Fundamentals
// Increment-Seconds
// Given an array of numbers, add 1 to every second element specifically those whose index is odd. Afterward, print each array value and return array

// Assume the argument is an array and consists of numbers
function incrementSeconds(arr){
  for(let i = 1; i < arr.length; i += 2){
    arr[i] += 1
  }
  arr.forEach( function(x){ console.log(x) } )
}

var myArr = [1,2,3,4,5,6,7,8,9]
console.log(`The original array is ${myArr}`)
incrementSeconds(myArr)
console.log(`The changed array is ${myArr}`)
