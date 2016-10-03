// Chapter-3: Arrays
// Array-Push-Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods

// Built-in array method that can be used for this is "unshift" - array.unshift(val)

// Assuming that the arguments passed are an array and a single additional value
// Approach-1: Return a new array
function pushFront(arr, val){
  var result = [val]
  for (let i = 0; i < arr.length; i++){
    result[i + 1] = arr[i]
  }

  return result
}

var myArr = [1,2,3,4], myVal = "Front"
console.log(`The original array is ${myArr}`)
myArr = pushFront(myArr, myVal)
console.log(`The new array is ${myArr}`)

// Approach-2: Manipulate the length property
function pushFront2(arr, val){
  var len = arr.length

  arr.length += 1
  for (let i = len - 1; i >= 0; i--){
    arr[i + 1] = arr[i]
  }
  arr[0] = val
}

var myArr2 = [1,3,5,7], myVal2 = "Start"
console.log(`The original array is ${myArr2}`)
pushFront2(myArr2, myVal2)
console.log(`The new array is ${myArr2}`)
