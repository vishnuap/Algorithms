// Chapter-3: Arrays
// Array-Remove-Duplicates
// Given a sorted array, remove the duplicate values in the array. Do not use any built-in methods

// Assume the array passed is non-empty and is sorted in ascending order
function remDup(arr){
  var cur = arr[0],
      curPos = 0,
      temp

  for(let i = 1; i < arr.length; i++){
    if (cur != arr[i]){
      cur = arr[i]

      temp = arr[i]
      arr[i] = arr[curPos + 1]
      arr[curPos + 1] = temp

      curPos += 1
    }
    console.log(`i = ${i}; array = ${arr}`);
  }

  arr.length = curPos + 1
}

// var myArr = [1,1,2,2,3,4,5,5,5,7,7,8,9,9]
var myArr = [9,9,8,7,7,5,5,5,4,3,2,2,1,1]
console.log(`The original array is ${myArr}`)
remDup(myArr)
console.log(`The array after removing duplicates is ${myArr}`)

// Using and manipulating the array.length is the only way we can currently modify the existing array without using built-in methods. There is no other way of reducing the length of an array. The bare minimum we have to use is pop()
