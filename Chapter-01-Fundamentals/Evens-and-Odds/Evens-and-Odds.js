// Chapter-1: Fundamentals
// Evens-and-Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That's odd!". Every time the array has three even numbers in a row print "Even more so!"

// Assume the argument is an array, is non-empty and consists of numbers
// Approach-1: For any given 4 odd or 4 even numbers, we could consider them as two sets of 3 odd numbers (or even numbers). e,g., [2,4,6,8] has (2,4,6) and (4,6,8) as two sets of 3 even numbers in a row.
function evenOdd1(arr){
  for(let i = 0; i < arr.length - 2; i++){
    if ((arr[i] % 2 == 0) && (arr[i+1] % 2 == 0) && (arr[i+2] % 2 == 0)){
      console.log(`(${arr[i]}, ${arr[i+1]}, ${arr[i+2]}) - Even more so!`)
    } else if ((arr[i] % 2 == 1) && (arr[i+1] % 2 == 1) && (arr[i+2] % 2 == 1)){
      console.log(`(${arr[i]}, ${arr[i+1]}, ${arr[i+2]}) - That's odd!`)
    }
  }
}

// Approach-2: After any set of 3 consecutive odd/even numbers, start counting the next set from the 4th element. e.g., in [2,4,6,8,10,12], one set is (2,4,6) and then the next set is (8,10,12)
function evenOdd2(arr){
  var len = arr.length - 2,
      i = 0
  while (i < len){
    if ((arr[i] % 2 == 0) && (arr[i+1] % 2 == 0) && (arr[i+2] % 2 == 0 )){
      console.log(`(${arr[i]}, ${arr[i+1]}, ${arr[i+2]}) - Even more so!`)
      i += 3
    } else if ((arr[i] % 2 == 1) && (arr[i+1] % 2 == 1) && (arr[i+2] % 2 == 1 )){
      console.log(`(${arr[i]}, ${arr[i+1]}, ${arr[i+2]}) - That's odd!`)
      i += 3
    } else {
      i += 1
    }
  }
}

var myArr = [3,5,7,9,11,13,15]
evenOdd1(myArr)
console.log(`---------`)
evenOdd2(myArr)
