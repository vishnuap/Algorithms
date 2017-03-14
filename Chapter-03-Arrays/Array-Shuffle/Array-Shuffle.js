// Chapter-3: Arrays
// Array-Shuffle
// Create shuffle(arr) to efficiently shuffle a given array's values. Work in-place.

// Assume the argument passed is an array contaning integers
function shuffle(arr){
  var len = arr.length,
      rIdx

  while (len > 0){
    // generate a random index within the array
    rIdx = Math.floor(Math.random() * len);
    // swap the value at the random index with the last array value
    [ arr[rIdx], arr[len - 1] ] = [ arr[len - 1], arr[rIdx] ]
    // decrease the effective length of the array to be shuffled.
    len -= 1
  }
}

var myArr = [1,2,3,4,5]
console.log(`The original array is ${myArr}`)
shuffle(myArr)
console.log(`The shuffled array is ${myArr}`)
