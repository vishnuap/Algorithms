// Chapter-3: Arrays
// Array-Rotate
// 1. Given an array, implement rotate(arr, shiftBy) that shifts the array's values to the right by the amount specified in shiftBy.Wrap-around any values that shift off the array's end to the other side. Operate in-place and don't use built-in functions
// 2. Allow for negative shiftBy. for negative shiftBy values, shift left instead of right
// 3. Minimize memory usage. Handle shifts in the millions
// 4. Minimize the touches of each element

// Assume the parameter passed is a non-empty array
function rotate(arr, shiftBy){
  // Since rotation is circular, the actual amount to shift by will always be less than the length of the array. So if a huge value is provided as input, reduce that to actual shift value.
  // convert a negative ShiftBy value (shift left) into a positive so that we can identify which shift would involve the least movement
  var shift = ((shiftBy % arr.length < 0) ? (arr.length + (shiftBy % arr.length)) : (shiftBy % arr.length))

  if (shift > Math.floor(arr.length / 2)){
    return rotateLeft(arr, arr.length - shift)
  } else {
    return rotateRight(arr, shift)
  }
}

function rotateRight(arr, shift){
  var done = false,
      // bs = Shift Block start index. index of element in array starting from which all subsequent elements will be rotated
      bs = arr.length - shift

  while (!done){
    // move the elements as close to the desired end as possible by swapping them as a whole block with their adjacent blocks
    if ((bs - shift) >= 0){
      for(let i = bs; i < bs + shift; i++){
        [ arr[i], arr[i - shift] ] = [ arr[i - shift], arr[i] ]
      }
      if (bs - shift == 0){
        done = true
      } else {
        bs = bs - shift
      }
    } else {
    // Once block movement is not possible, move the elements one by one.
      var numToBeShifted = bs // this will give the number of elements at the start that are left to be shifted

      for(let k = 0; k < shift; k++){ // ------------------> This loop to loop through all elements in the shift block
        for(let j = 0; j < numToBeShifted; j++){ // -------> This loop to keep count of how many elements before the shift block that have to be moved
          for(let i = k; i < k + numToBeShifted; i++){ // -> This loop to move the elements before the shift block
            [ arr[i], arr[i + 1] ] = [ arr[i + 1], arr[i] ]
            // console.log(`k = ${k}; j = ${j}; i = ${i}; array = ${arr}`)
          }
        }
      }

      done = true
    }
  }
}

function rotateLeft(arr, shift){
  var done = false,
      // bs = Shift Block end index. End index of the block of elements in array that have to be rotated
      bs = shift - 1,
      len = arr.length

  while (!done){
    // move the elements as close to the desired end as possible by swapping them as a whole block with their adjacent blocks
    if ((bs + shift) < len){
      for(let i = bs; i > bs - shift; i--){
        [ arr[i], arr[i + shift] ] = [ arr[i + shift], arr[i] ]
      }
      if (bs + shift == (len - 1)){
        done = true
      } else {
        bs = bs + shift
      }
    } else {
    // Once block movement is not possible, move the elements one by one.
      var numToBeShifted = len - 1 - bs // this will give the number of elements at the end that are left to be shifted

      for(let k = len - 1; k > len - 1 - shift; k--){ // -------> This loop to loop through all elements in the shift block
        for(let j = 0; j < numToBeShifted; j++){      // -------> This loop to keep count of how many elements after the shift block that have to be moved
          for(let i = k; i > k - numToBeShifted; i--){ // ------> This loop to move the elements after the shift block
            [ arr[i], arr[i - 1] ] = [ arr[i - 1], arr[i] ]
            // console.log(`k = ${k}; j = ${j}; i = ${i}; array = ${arr}`)
          }
        }
      }

      done = true
    }
  }
}

var myArr = [1,2,3,4,5,6,7,8,9,10,11,12], myShift = 6
console.log(`The original array is ${myArr}`)
rotate(myArr, myShift)
console.log(`The rotated array is ${myArr}. Rotated by ${myShift}`)
