# Given a number of US cents, return the optimal configuration of coins in an object

def makeChange(cents):
    result = {}
    coins = [100, 50, 25, 10, 5]

    i = 0
    while cents >= 10:
        if cents / coins[i]:
            result[coins[i]] = cents / coins[i]
            cents = cents % coins[i]
        i+=1

    if cents:
        result[1] = cents

    return result

myCoins = 123
myCoins = 120
myCoins = 110
myCoins = 1234
myCoins = 1220
print(makeChange(myCoins))
