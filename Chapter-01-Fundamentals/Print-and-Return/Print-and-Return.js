// Chapter-1: Fundamentals
// Print-and-Return
// Your function will receive an array with two numbers. Print the first value and return the second

// Assuming that the parms passed to the function are valid. Not doing validations
function pNr(arr){
  console.log(`The first element in the array printed inside the function is ${arr[0]}`)
  return arr[1]
}

var myArr = [2,1]
console.log(`The second element in the array returned from the function is ${pNr(myArr)}`)
