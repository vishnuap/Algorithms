// Chapter-3: Arrays
// Array-Filter-Range
// Gievn 'arr' and values 'min', 'max', remove array values between 'min' and 'max'. Work in-place and do not use built-in functions.

// Assume the argument passed is an array, is non-empty and contains integers. Assume that min and max are integers
// Assume that the size of the array has to be modified as we remove the values
// Assume that the range limits are inclusive
function filterRange(arr, min, max){
  // If min and max values are mixed up, this will set them right
  [min, max] = (min > max) ? [max, min] : [min, max]

  var len = arr.length,
      idx = 0,
      done = false

  for(let i = 0; i < len; i++){
    arr[i] = ((arr[i] >= min) && (arr[i] <= max)) ? arr[i] : ''
  }

  while (!done){
    if (idx < len){
      if (arr[idx] == ''){
        for (x = idx; x < len - 1; x++){
          arr[x] = arr[x + 1]
        }
        len -= 1
      } else {
        idx += 1
      }
    } else {
      done = true
    }
  }

  arr.length = len
}

var myArr = [4,1,2,5,3,7,8,3,3,1,4], myMin = 5, myMax = 10
console.log(`The original array is ${myArr}`)
filterRange(myArr, myMin, myMax)
console.log(`Filter range - [${myMin} - ${myMax}]. The filtered array is ${myArr}`)
