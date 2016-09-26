// Chapter-2: Fundamentals-2
// Threes-and-Fives
// Create threesFives() that adds values from 100 to 4000000 if that value is divisible by 3 or 5 but not both. Display the sum.
// Create betterThreesFives(lower, upper) that does the same but accepts the upper and lower limits as arguments

// I am writing only betterThreesFives(lower, upper). thrresFives() is nothing but betterThreesFives(100, 4000000)

// Assume the arguments passed are positive integers and upper is greater than lower
function betterThreesFives(low, up){
  var sum = 0
  for(let i = low; i <= up; i++){
    if (((i % 3 == 0) && (i % 5 != 0)) || ((i % 3 != 0) && (i % 5 == 0))){
      sum += i
    }
  }
  console.log(`The result between ${low} and ${up} is ${sum}`)
}

var myLow = 100, myUp = 4000000
betterThreesFives(myLow, myUp)
