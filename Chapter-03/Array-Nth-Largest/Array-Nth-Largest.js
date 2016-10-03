// Chapter-3: Arrays
// Array-Nth-Largest
// Given 'arr' and 'N', return the Nth largest element, where N-1 elements are larger. Return null if needed

// Assume the arguments are an array with integers and an integer and both are passed to the function
// Since we want Nth largest such that N-1 elements are larger, if there are duplicates in the array, then Nth largest will not necessarily be the Nth element from the last in a sorted-in-ascending-order array. Hence the sorted array will have to be looped through to find the Nth largest element
function nthLargest(arr, num){
  if (num > arr.length){
    return null
  }

  var sortedArray = sort(arr),
      len = sortedArray.length,
      max = sortedArray[len - 1],
      count = 1

  for(let i = len-2; i > -1; i--){
    if (sortedArray[i] < max){
      if (count == (num-1)){
        return sortedArray[i]
      } else {
        max = sortedArray[i]
        count += 1
      }
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

var myArr = [42, 1, 4, 72, 42, 72, 42, 72], myNum = 5
console.log(`The Nth largest in ${myArr} where N = ${myNum} is ${nthLargest(myArr, myNum)}`)
