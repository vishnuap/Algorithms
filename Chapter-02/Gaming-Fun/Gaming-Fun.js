// Chapter-2: Fundamentals-2
// Gaming-Fun
// 1. Create a function "rollone()" to return a randomly selected integer between 1 and 6 (inclusive) (6 sided dice)
// 2. Create a function "playFives(num)" to call "rollone()" 'num' times. Each time it should print the value of rollone() and if that value = 5, also print "That's good luck!"
// 3. Create a new function "playStatistics(num)" which calls "rollone()" 'num' times. After calling it 'num' times, print lowest, highest, sum and average value of the rolls

// Assume the arguments passed are non-zero positive integers
function rollOne(){
  return Math.floor(Math.random() * 6) + 1
}

function playFives(num){
  for(let i = 1; i <= num; i++){
    var roll = rollOne()

    if (roll == 5){
      console.log(`Roll = ${roll} - That's good luck!`)
    } else {
      console.log(`Roll = ${roll}`)
    }
  }
}

function playStatistics(num){
  var high = 0,
      low = 6,
      sum = 0,
      roll = 0

  for (let i = 1; i <= num; i++){
    roll = rollOne()
    high = ((high < roll) ? roll : high)
    low = ((low > roll) ? roll : low)
    sum += roll
  }
  console.log(`After ${num} rolls of the dice, Highest = ${high}; Lowest = ${low}; Sum = ${sum}; Avg = ${sum / num}`)
}

var myNum = 8
playFives(myNum)
playStatistics(myNum)
