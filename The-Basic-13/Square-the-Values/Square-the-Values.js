// The Basic 13
// Square-the-Values
// Square each value in a given array returning the same array with changed values

function square(arr){
  for(let i = 0; i < arr.length; i++){
    arr[i] *= arr[i]
  }
}

var myArr = [1,2,3,4,5]
console.log(`The original array is ${myArr}`)
square(myArr)
console.log(`The changed array is ${myArr}`)
