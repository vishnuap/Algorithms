// Chapter-3: Arrays
// Array-Nth-to-Last
// Return the element that is N from array's end. Given ([5,2,3,6,4,9,7], 3), return 4. If the array is too short return null

// Assume the arguments are an array and an integer and both are passed
function nthToLast(arr, num){
  return (num > arr.length) ? null : arr[arr.length - num]
}

var myArr = [5,2,3,6,4,9,7], myNum = 3
console.log(`The element that is ${myNum} from the last in ${myArr} is ${nthToLast(myArr, myNum)}`)
