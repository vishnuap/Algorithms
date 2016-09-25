// Chapter-1: Fundamentals
// Reverse-Array
// Given array write a function that reverses values in-place. e.g., reverse([3,1,6,4,2]) returns same array containing [2,4,6,1,3]

// Assume the argument passed is a non-empty array
function reverse(arr){
  var len = arr.length,
      numberOfSwitches = Math.floor(len / 2),
      idx = 0,
      temp

  for(let i = 1; i <= numberOfSwitches; i++){
    temp = arr[idx]
    arr[idx] = arr[len - (idx + 1)]
    arr[len - (idx + 1)] = temp
    idx++
  }
}

var myArr = [1,2,3]
console.log(`The original array is ${myArr}`)
reverse(myArr)
console.log(`The reversed array is ${myArr}`)
