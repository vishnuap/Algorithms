// Chapter-2: Fundamentals-2
// Is-Prime
// Return whether a given integer is prime.

// Assume the argument passed is nun-zero, positive integer
// Approach - for checking if any number is prime, we need to check that it is not divisible by any number greater than 1 and less than its square root.
function isPrime(num){
  if (num <= 2){ return true }

  var sqrtNum = Math.floor(Math.sqrt(num))

  for(let i = 2; i <= sqrtNum; i++){
    if (num % i == 0){ return false}
  }
  return true
}

myNum = 89
console.log(`${myNum} isPrime : ${isPrime(myNum)}`);
