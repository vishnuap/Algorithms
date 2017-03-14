// Chapter-2: Fundamentals-2
// Factorial
// Write a function "factorial(num)" that given a number returns the product of all positive integers from 1 up to that number. e.g., factorial(3) = 6 (1 * 2 * 3)

// Assume the argument passed is a positive integer
// Approach-1: Recursion. The disadvantage is that this is in-efficient for large numbers
function factorial(num){
  if (num == 1){
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

// Approach-2: Loop
function factorial2(num){
  var fact = 1
  for(let i = 1; i <= num; i++){
    fact *= i
  }
  return fact
}

var myNum = 6
console.log(`The result of factorial(${myNum}) = ${factorial(myNum)}`)
console.log(`The result of factorial2(${myNum}) = ${factorial2(myNum)}`)
