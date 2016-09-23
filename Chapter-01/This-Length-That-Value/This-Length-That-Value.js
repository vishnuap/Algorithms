// Chapter-1: Fundamentals
// This-Length-That-Value
// Given two numbers, return array of length num-1 with each value num-2. Print "Jinx" if they are same

// Assuming the arguments passed are numeric and non-zero, positive
function tltv(num1, num2){
  var result = []
  for(let i = 0; i < num1; i++){
    result.push(num2)
  }

  if (num1 === num2){
    console.log(`Jinx!`)
  }

  return result
}

var myNum1 = 4,
    myNum2 = 3,
    myResult = tltv(myNum1, myNum2)

console.log(`The result is ${myResult}`)
