// Chapter-3: Arrays
// Array-2nd-Largest
// Return the second largest element of an array. Given [42,1,4,Math.PI,7] return 7. If the array is too short, return null

// Assume the argument passed is an array with positive integers.
// Assume that if all elements are of equal value, there is no second largest and so return null
// Finding the largest will mean the array has to be sorted. Am writing the sort routine (the other way is to use the inbuilt sort function)
function secondLargest(arr){
  var sortedArray = sort(arr),
      len = arr.length,
      max = sortedArray[len - 1]

  for(let i = len - 2; i >= 0; i--){
    if (sortedArray[i] < max){
      return sortedArray[i]
    }
  }

  return null
}

// I am implementing a Radix sort. Currently works with only positive integers
// Will use push() built-in function
function sort(array){
  var buckets = [],            // empty array to hold the intermediate values during the sort.
      bLen = 0,                // length of each bucket
      len = array.length,
      div = 10,
      bucketIdx = 0,
      curSize = 0,
      maxSize = 0,
      iter = 0

  // Find the maximum number of digits comprising any element in the array. That will decide how many iterations we go into
  for(let i = 0; i < len; i++){
    curSize = Math.floor(Math.log10(array[i])) + 1
    maxSize = (maxSize < curSize) ? curSize : maxSize
  }

  // Now iterate over the array to sort it. per Wikipedia, I am doing an LSD radix sort (least significant digit)
  while (iter < maxSize){
    // create the empty buckets
    buckets = []
    for(let i = 0; i < 10; i++){
      buckets.push([])
    }

    // Populate the buckets
    for(let i = 0; i < len; i++){
      // Find the lest significant digit to sorton. With each iteration, this moves 1 digit to the left
      bucketIdx = Math.floor((array[i] % div) / (div/10))
      buckets[bucketIdx].push(array[i])
    }

    // Reset the array.
    array = []
    // write contents of buckets back into array
    for(let i = 0; i < 10; i++){
      bLen = buckets[i].length
      if (bLen > 0){
        for(let j = 0; j < buckets[i].length; j++)
        array.push(buckets[i][j])
      }
    }

    // increment the divisor
    div *= 10
    // increment the iteration count
    iter += 1
  }

  // return the sorted array
  return array
}

var myArr = [72, 72, 72]
console.log(`The second largest in ${myArr} is ${secondLargest(myArr)}`)
