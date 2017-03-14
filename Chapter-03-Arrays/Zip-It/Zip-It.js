// Chapter-3: Arrays
// Zip-It
// 1. Create a function that accepts two arrays and combines their values sequentially into a new array at alternating indices starting with the first array. Extra values of either array should be included afterwards. Given [1,2] and [10,20,30], return [1,10,2,20,30]
// 2. Combine the two arrays in the same way but in the first array instead of creating a new array

// Assume the arguments being passed are both arrays
// Assume use of built in functions (for doing this without builtin functions, use the approach from the Array-Insert-At solution earlier in this chapter)
// 1
function zipIt(arr1, arr2){
  var result = [],
      len = (arr1.length > arr2.length) ? arr1.length : arr2.length

  for(let i =0; i < len; i++){
    if (i < arr1.length){
      result.push(arr1[i])
    }
    if (i < arr2.length){
      result.push(arr2[i])
    }
  }

  return result
}

// 2
function zipIt2(arr1, arr2){
  var arr1Len = arr1.length,
      arr2Len = arr2.length,
      idx = 0

  while (arr1.length < (arr1Len + arr2Len)){
    if (idx < arr1Len){
      arr1.splice(((idx*2) + 1), 0, arr2[idx])
    } else {
      arr1.splice(arr1.length, 0, arr2[idx])
    }
    idx += 1
  }
}

var myArr1 = [1,2,3,4,5],
    myArr2 = [10,20,30,40,50]
console.log(`The original arrays are ${myArr1} and ${myArr2}`)
console.log(`The zipped array is ${zipIt(myArr1, myArr2)}`)
console.log(`The zipped array is ${zipIt(myArr2, myArr1)}`)
zipIt2(myArr1, myArr2)
console.log(`The zipped array is ${myArr1}`)
