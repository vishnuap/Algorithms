// The Basic 13
// Zero-Out-Negative-Numbers
// Return the given array after setting any negative numbers to Zero-Out-Negative-Numbers

function zeroOut(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){ arr[i] = 0 }
  }
}

var myArr = [1, -1, 2, -3, 4, -5, 6, -6]
console.log(`The original array is ${myArr}`)
zeroOut(myArr)
console.log(`The changed array is ${myArr}`)
