// Chapter-3: Arrays
// Array-Remove-At
// Given array and an index into array, remove and return the array value at that index. Do this without using built-in methods except pop()

// The built-in method to use for this is "splice(idx, num)" - array.splice(idx, num) will return 'num' number of elements starting from 'idx'

// assume the arguments apssed are a non-empty array, index value within the length of the array
// Approach-1: using pop()
function removeAt(arr, idx){
  var result = arr[idx]
  for(let i = idx; i < arr.length-1; i++){
    arr[i] = arr[i + 1]
  }
  arr.pop()
  return result
}

var myArr = [1,2,3,4,5,6], myIdx = 0
console.log(`The original array is ${myArr}`)
console.log(`The item at index ${myIdx} = ${removeAt(myArr, myIdx)} and the changed array is ${myArr}`)

// Approach-2: Manipulate the length property
function removeAt2(arr, idx){
  var result = arr[idx]
  for(let i = idx; i < arr.length-1; i++){
    arr[i] = arr[i + 1]
  }
  arr.length--
  return result
}

var myArr2 = [11,21,31,41,51,61], myIdx2 = 0
console.log(`The original array is ${myArr2}`)
console.log(`The item at index ${myIdx2} = ${removeAt2(myArr2, myIdx2)} and the changed array is ${myArr2}`)
