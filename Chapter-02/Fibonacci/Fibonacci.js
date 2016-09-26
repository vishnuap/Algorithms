// Chapter-2: Fundamentals-2
// Fibonacci
// Create a function to generate fibonacci numbers. In this sequence, each number is the sum of the previous two starting with 0 and 1. The function should accept one argument, an index into the sequence (where 0 corresponds to the initial value 0, 4 corresponds to the value four later, which is equal to 2). e.g., fibonacci(0) = 0; fibonacci(1) = 1; fibonacci(2) = 1;

// Assume argument is a positive integer
// Approach-1: Loop
function fibonacci(num){
  var seq = []

  for (let i = 0; i <= num; i++){
    switch (i){
      case 0:
      case 1:
        seq.push(i)
        break
      default:
        seq.push(seq[i-1] + seq[i-2])
    }
  }
  console.log(seq[seq.length - 1])
}

// Approach-2: Recursion
function fibonacci2(num){
  switch (num){
    case 0:
      return 0
    case 1:
      return 1
    default:
      return fibonacci2(num-1) + fibonacci2(num-2)
  }
}

var myCount = 8
fibonacci(myCount)
console.log(fibonacci2(myCount));
