// Chapter-2: Fundamentals-2
// Sigma
// Create a function "sigma(num)" that given a number, returns the sum of all positive integers up to that number. e.g., sigma(3) = 6 (1+2+3)

// Assume the argument passed is a positive integers
// Approach-1: Math
// Sum of first 'n' integers = n*(n+1)/2
function sigma(num){
  return num * (num + 1)/2
}

// Approach-2: Loop
function sigma2(num){
  var sum = 0
  for(let i = 1; i <= num; i++){
    sum += i
  }
  return sum
}

var myNum = 6
console.log(`The result of sigma(${myNum}) = ${sigma(myNum)}`)
console.log(`The result of sigma2(${myNum}) = ${sigma2(myNum)}`)
