// Chapter-3: Arrays
// Double-Trouble
// Create a function that changes a given array to list each element twice, retaining the original order. e.g., convert [4, "Ulysses", 42, false] to [4,4,"Ulysses", "Ulysses", 42,42,false, false]

// Assume the argument passed is an array
// Again using the splice() built in. For approach without using any built-in refer to the Array-Insert-At assignment
function double(arr){
  var idx = 0,
      len = arr.length

  while(idx < len){
    arr.splice(idx + 1, 0, arr[idx])
    len += 1
    idx += 2
  }
}

var myArr = [4, "Ulysses", 42, false]
console.log(`The original array is ${myArr}`)
double(myArr)
console.log(`The changed array is ${myArr}`)
