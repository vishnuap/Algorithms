// Chapter-3: Arrays
// Intermediate-Sums
// Given an array of numbers, add an additional element after every 10 elements which will be equal to the sum of the preceeding 10 values. If the end of the array doesn't align evenly with 10, add an element at the end with the sum of the values that have not been included yet. e.g., given [1,1,1,1,1,1,1,1,1,1,2,3,2,] return [1,1,1,1,1,1,1,1,1,1,10,2,3,2,7]

// Assume argument passed is an array containing integers
// Since we have already done the 'Array-Insert-At' without using built-in methods, refer to that logic to do this without built ins. I am doing this here using the 'splice' built-in method
function interSum(arr){
  var len = arr.length,
      count = 0,
      sum = 0,
      i = 0

  while(i < len){
    sum += arr[i]
    count += 1
    if ((count % 10 == 0) || (i == (arr.length-1))){
      arr.splice(i + 1, 0, sum)
      sum = 0
      i++
      len++
    }
    i++
  }
}

var myArr = [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,4,5,6,6]
console.log(`The original array is ${myArr}`)
interSum(myArr)
console.log(`The changed array is ${myArr}`)
