// Chapter-1: Fundamentals
// First-Plus-Length
// Given an array, return the sum of the first value in the array plus the array's length. What happens when the array's first element is not a number but a string (like "what") or a boolean (like "false")?

// Not validating the array being passed. Assuming that it is a non-empty array
function firstPlusLength(arr){
  return arr[0]+arr.length
}

var myArr = [1,3,1,4,5,6]
console.log(`For the array ${myArr} - the return value is ${firstPlusLength(myArr)}`)

myArr = ["This", "is", "not", "a", "string"]
console.log(`For the array ${myArr} - the return value is ${firstPlusLength(myArr)}`); //Note that this works though we are doing a STRING + NUMBER operation

myArr = [true, true]
console.log(`For the array ${myArr} - the return value is ${firstPlusLength(myArr)}`); // Returns a numerical value. Means the boolean in the array is treated a number internally. false = 0; true = 1
