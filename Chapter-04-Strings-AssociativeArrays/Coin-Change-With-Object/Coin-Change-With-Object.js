// Given a number of US cents, return the optimal configuration of coins in an object

function makeChange(cents){
  var result = {}
  var i = 0
  const coins = [100, 50, 25, 10, 5]

  while(cents >= 10){
    console.log(`cents = ${cents}`)
    if (Math.floor(cents / coins[i])){
      result[coins[i]] = Math.floor(cents / coins[i])
      cents = cents % coins[i]
    }
    i++
  }

  if (cents){
    result[1] = cents
  }

  return result
}

var myCoins = 123
myCoins = 120
myCoins = 110
myCoins = 1234
myCoins = 1220
console.log(makeChange(myCoins))
