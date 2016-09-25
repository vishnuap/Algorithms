// Chapter-1: Fundamentals
// Biggie-Size
// Given an array write a function that changes all positive numbers in the array to "big".

// Assume the argument passed is an array containing numbers
function makeItBig(arr){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){ arr[i] = 'big' }
  }
}

var myArr = [1,-1,2,4,-5,-2,8,-7]
console.log(`Array before making it big - ${myArr}`)
makeItBig(myArr)
console.log(`Array after making it big - ${myArr}`)
