// Chapter-2: Fundamentals-2
// Generate-Coin-Change
// Make generateCoinChange(cents) which accepts a number of american cents and compute how to represent that using the smallest number of coins. Common coins are pennies(1 cent), nickels(5 cents), dimes(10 cents), quarter(25 cents), half-dollar(50 cents) and dollar(100 cents)

// Assume the argument passed is a positive integer
function generateCoinChange(cents){
  var coins = [100, 50, 25, 10, 5, 1],
      names = ['Dollars', 'Half-Dollars', 'Quarters', 'Dimes', 'Nickels', 'Pennies'],
      change = {100:0, 50:0, 25:0, 10:0, 5:0, 1:0},
      input = cents

  for(let i = 0; i < coins.length; i++){
    change[coins[i]] = Math.floor(input / coins[i])
    input = input % coins[i]
  }

  console.log(`${cents} cents can be represented as:`)
  for(let i = 0; i < coins.length; i++){
    if (change[coins[i]] > 0){
      console.log(`${names[i]}: ${change[coins[i]]}`);
    }
  }
}

generateCoinChange(153)
