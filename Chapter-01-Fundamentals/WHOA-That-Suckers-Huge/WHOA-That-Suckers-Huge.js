// Chapter-1: Fundamentals
// WHOA-That-Suckers-Huge:
// Add odd integers from -30000 to 30000 and console log the final sum. Is there a shortcut?

// In this particular case, since the negative and positive limits are symmetrical, the sum will be zero.
//
// The usual way would be to use a for loop from -29999 till 29999 and incrementing each step by 2.

function loop(begin, end){
  var oddSum = 0
  if ((begin % 2) != 1){
    begin = begin + 1
  }

  for(let i = begin; i <= end; i += 2){
    oddSum += i
  }

  return oddSum
}

var start = -30000
var finish = 30000
console.log(`The sum of all odd numbers between ${start} and ${finish} is ${loop(start, finish)}`)

// But the loop will run 30000 times. So instead we can use sequence formulae to sum them up.
//
// e.g., sum all odd numbers between 0 and 10:
// odd numbers are 1, 3, 5, 7, 9 => 1+0, 2+1, 3+2, 4+3, 5+4 (each odd number can be expressed as the sum of two consecutive integers). So their sum will be
// 1+3+5+7+9 => 1+0+2+1+3+2+4+3+5+4 => (1+2+3+4+5) + (0+1+2+3+4) => sum of all numbers from 1 to 5 + sum of all numbers from 1 to 4 => sum of 'n' integers + sum of 'n-1' integers => n*(n+1)/2 + (n-1)*n/2 => n^2
// For sum of odd numbers from 0 to 10, n=5. Hence the sum = 25
//
// Similarly, from 0 to 30000, the last odd number is 29999 = 15000+14999. (n=15000). So the sum of odd numbers from 0 to 30000 will be 15000^2 = 225000000
// Note that 15000 = 30000/2. Hence the sum of odd numbers from 0 to x = (x/2)^2 when x is even; (1 + x/2)^2 when x is odd

// The FOR loop way
function forLoop(limit){
  var forSum = 0

  for(let i = 1; i <= limit; i += 2){
    forSum += i
  }

  return forSum
}

// The mathematical way
function formula(limit){
  if ((limit % 2) != 0){
    var mathSum = Math.pow(((limit + 1) / 2), 2)
  } else {
    var mathSum = Math.pow((limit / 2), 2)
  }

  return mathSum
}

var upperLimit = 2001
console.log(`The sum of all odd numbers between 0 and ${upperLimit}`)
console.log(`Using a FOR loop - ${forLoop(upperLimit)}`)
console.log(`Using a Formula  - ${formula(upperLimit)}`)

// Now if the starting point is a non-zero integer,
// 1. If start is a positive integer:
// e.g., find sum of all odd numbers between 34 and 100. We know that for 0 to 100, it is (100/2)^2. Similarly, for 0 to 34 it is (34/2)^2. So for 34 to 100 it will be (100/2)^2 - (34/2)^2
// 2. If start is a negative integer:
// e.g., find sum of all odd numbers between -34 and 75. Here we know that sum from -34 to 34 will be zero. So we need to calculate only from 34 to 75. Which will be (1 + 75/2)^2 - (34/2)^2

// Using FOR loop:
function forLoop2(ll, ul){
  switch (true){
    case ll == ul:
      return "Nothing to sum"
    case ll > ul:
      var temp = ll
      ll = ul
      ul = temp
      break
  }

  var forSum = 0

  if ((ll % 2) == 0){
    ll += 1
  }

  for(let i = ll; i <= ul; i += 2){
    forSum += i
  }

  return forSum
}

// Using formula:
function formula2(ll, ul){
  switch (true){
    case ll == ul:
      return "Nothing to sum"
    case ll > ul:
      var temp = ll
      ll = ul
      ul = temp
      break
  }

  if ((ll < 0) && (ul > 0)){
    if ((ll * -1) < ul){
      ll = (ll * -1) + 1
    } else if ((ll * -1) > ul){
      ul = (ul * -1) - 1
    } else {
      return 0
    }
  }

  if ((ll % 2) == 0){
    mathLLSum = Math.pow((ll / 2), 2)
  } else {
    mathLLSum = Math.pow(((ll - 1) / 2), 2)
  }

  if ((ul % 2) == 0){
    mathULSum = Math.pow((ul / 2), 2)
  } else {
    mathULSum = Math.pow(((ul + 1) / 2), 2)
  }

  return mathULSum - mathLLSum
}

var lowerlimit = -30001
var upperLimit = 20001
console.log(`The sum of all odd numbers between ${lowerlimit} and ${upperLimit}`)

// var start_time = new Date().getTime()
console.log(`Using a FOR loop - ${forLoop2(lowerlimit, upperLimit)}`)
// var end_time = new Date().getTime()
// console.log(`Time taken by FOR loop is ${end_time - start_time}`)

// start_time = new Date().getTime()
console.log(`Using a Formula  - ${formula2(lowerlimit, upperLimit)}`)
// end_time = new Date().getTime()
// console.log(`Time taken by Formula is ${end_time - start_time}`)
