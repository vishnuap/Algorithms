// Chapter-1: Fundamentals
// Add-Seven-to-Most
// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array

// Assume the argument sent is an array and it contains numbers
function Add7(arr){
  var result = []
  for(let i = 1; i < arr.length; i++){
    result.push(arr[i] + 7)
  }
  return result
}

var myArr = [1,2,3,4,5,6,7,8]
console.log(`The original array is ${myArr}`)
console.log(`The Add7 array is ${Add7(myArr)}`)
