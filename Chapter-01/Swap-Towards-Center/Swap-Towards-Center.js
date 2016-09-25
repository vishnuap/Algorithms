// Chapter-1: Fundamentals
// Swap-Towards-Center
// Given array, swap first and last, third and third to last and so on. e.g., Input: [true, 42, "Ada", 2, "pizza"] becomes output: ["pizza", 42, "Ada", 2, true]. Input: [1,2,3,4,5,6] becomes output: [6,2,4,3,5,1]

// Assume argument passed is an array
function swapOdds(arr){
  var len = arr.length,
      endPoint = Math.floor(len / 2),
      temp
  for(let i = 0; i < endPoint; i += 2){
    temp = arr[i]
    arr[i] = arr[len - (i+1)]
    arr[len - (i+1)] = temp
  }
}

// var myArr = [1,2,3,4,5,6]
var myArr = [true,42,"Ada",2,"pizza"]
console.log(`The original array is ${myArr}`)
swapOdds(myArr)
console.log(`The changed array is ${myArr}`)
