// The Basic 13
// Max-Min-Avg
// Given an array print the max, min and average values for that array

function mma(arr){
  var max = arr.reduce(function(prev, cur){
        return ((prev > cur) ? prev : cur)
      }, arr[0]),
      min = arr.reduce(function(prev, cur){
        return ((prev < cur) ? prev : cur)
      }, arr[0]),
      sum = arr.reduce(function(prev, cur){
        return prev + cur
      })

  console.log(`The max is ${max}; min is ${min}; avg is ${sum / arr.length}`)
}

var myArr = [1,2,3,4,5]
mma(myArr)
