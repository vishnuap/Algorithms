// Chapter-3: Arrays
// Array-Concat
// Create a standalone function that concatenates two arrays. Return a new array containing the first array's elements followed by the second array's. e.g., arrConcat([1,2,3], ["a", "b", "c"]) will return [1,2,3,"a","b","c"]

// Assume both the arguments passed are Arrays
// Approach-1: without using built-in methods
function arrConcat(arr1, arr2){
  var result = []
  result.length = arr1.length + arr2.length

  for(let i = 0; i < result.length; i++){
    if (i >= arr1.length){
      result[i] = arr2[i - arr1.length]
    } else {
      result[i] = arr1[i]
    }
  }
  return result
}

// Approach-2: using built-in methods
function arrConcat2(arr1, arr2){
  var result = []

  for(let i = 0; i < arr1.length + arr2.length; i++){
    if (i >= arr1.length){
      result.push(arr2[i - arr1.length])
    } else {
      result.push(arr1[i])
    }
  }
  return result
}

var myArr2 = ["a", "b", "c"],
    myArr1 = [1,2,3,5,6,7],
    myResult = arrConcat(myArr1, myArr2),
    myResult2 = arrConcat2(myArr2, myArr1)

console.log(`The original arrays:`)
console.log(`Arr1: ${myArr1}`)
console.log(`Arr2: ${myArr2}`)
console.log(`The concatenated arrays:`)
console.log(`${myResult}`)
console.log(`${myResult2}`)
