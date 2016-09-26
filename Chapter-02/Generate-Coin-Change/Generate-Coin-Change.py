# Chapter-2: Fundamentals-2
# Generate-Coin-Change
# Make generateCoinChange(cents) which accepts a number of american cents and compute how to represent that using the smallest number of coins. Common coins are pennies(1 cent), nickels(5 cents), dimes(10 cents), quarter(25 cents), half-dollar(50 cents) and dollar(100 cents)

# Assume the argument passed is a positive integer
def generateCoinChange(cents):
    coins = [100, 50, 25, 10, 5, 1]
    names = ['Dollars', 'Half-Dollars', 'Quarters', 'Dimes', 'Nickels', 'Pennies']
    change = {100:0, 50:0, 25:0, 10:0, 5:0, 1:0}
    inp = cents

    for i in range(0, len(coins)):
        change[coins[i]] = inp / coins[i]
        inp = inp % coins[i]

    print("{} cents can be represented as:").format(cents)
    for i in range(0, len(coins)):
        if change[coins[i]] > 0:
            print("{}: {}").format(names[i], change[coins[i]])

generateCoinChange(153)
