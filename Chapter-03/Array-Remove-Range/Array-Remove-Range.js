// Chapter-3: Arrays
// Array-Remove-Range
// Given an array and the start and end indices, remove values in that index range. e.g., given ([10, 20, 30, 40, 50, 60, 70], 2,4), return [10, 20, 60, 70]. Work in-place

// Assume the arguments passed are an array and two integers
function removeRange(arr, start, end){
  // Make sure the start index is lower than the end index
  [start, end] = (start > end) ? [end, start] : [start, end]

  // Make sure the index range provided is valid
  if ((start < 0) || (end > arr.length - 1)){
    return null
  } else {
    for(let j = start; j <= end; j++){
      for(let i = start; i < arr.length - 1; i++){
        arr[i] = arr[i + 1]
      }
      arr.pop()
    }
    return arr
  }
}

var myArr = [10, 20, 30, 40, 50, 60, 70], myStart = 5, myEnd = 6
console.log(`The original array is ${myArr}`)
console.log(`The changed array is ${removeRange(myArr, myStart, myEnd)}`)
