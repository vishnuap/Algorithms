// Chapter-1: Fundamentals
// Print-Low-Return-High
// Create a function that takes array of numbers. The function should print the lowest value in the array and return the highest value in the array

// Assume the argument passed is an array and it contains numbers
function plrh(arr){
  var low = arr[0],
      high = arr[0]

  for(let i = 1; i < arr.length; i++){
    low = ((low > arr[i]) ? arr[i] : low)
    high = ((high < arr[i]) ? arr[i] : high)
  }
  console.log(`The lowest element in ${arr} is ${low}`)
  return high
}

var myArr = [5,2,7,3,5,6,3,3,2,1]
console.log(`The highest element in ${myArr} is ${plrh(myArr)}`);
