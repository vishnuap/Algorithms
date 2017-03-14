// Chapter-3: Arrays
// Array-Swap-Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. e.g, for [1,2,3,4] return [2,1,4,3]. for ["Brendan", true, 42] return [true, "Brendan", 42]. Do this without using built-in methods

// Assume the array passed is a non-empty array
function swapPairs(arr){
  var temp
  for(let i = 0; i < arr.length; i += 2){
    if ((i + 1) < arr.length){
      temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
    }
  }
}

var myArr = [1,2,3,5,,4]
console.log(`The original array is ${myArr}`)
swapPairs(myArr)
console.log(`The swapped array is ${myArr}`)
