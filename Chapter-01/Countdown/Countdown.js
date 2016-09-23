// Chapter-1: Fundamentals
// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number down to 0. How long is the array

function retArr(num){
  var respArr = []
  for(let i = num; i >= 0; i--){
    respArr.push(i)
  }
  return respArr
}

var getArr = retArr(24)
console.log(`The array is ${getArr} and its length is ${getArr.length}`)
