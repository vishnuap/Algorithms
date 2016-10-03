// Chapter-3: Arrays
// Array-Pop-Front
// Given array, remove and return the value at the beginning of the array. Do this without using any built-in methods except pop()

// The built-in method for doing this is "shift" - array.shift()

// Assume the arguments passed is a non-empty array
// Approach-1: Using pop()
function popFront(arr){
  var first = arr[0]
  for(let i = 0; i < arr.length - 1; i++){
    arr[i] = arr[i + 1]
  }
  arr.pop()
  return first
}

var myArr = [2,4,6,8,0]
console.log(`The original array is ${myArr}`)
var myResult = popFront(myArr)
console.log(`The value popped from front is ${myResult} and the changed array is ${myArr}`)

// Approach-2: Manipulating array.length
function popFront2(arr){
  var first = arr[0]
  for(let i = 0; i < arr.length - 1; i++){
    arr[i] = arr[i + 1]
  }
  arr.length--
  return first
}

var myArr2 = [0,1,3,5,7,9]
console.log(`The original array is ${myArr2}`)
var myResult2 = popFront2(myArr2)
console.log(`The value popped from front is ${myResult2} and the changed array is ${myArr2}`)
