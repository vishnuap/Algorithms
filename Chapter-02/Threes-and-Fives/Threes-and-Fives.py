# Chapter-2: Fundamentals-2
# Threes-and-Fives
# Create threesFives() that adds values from 100 to 4000000 if that value is divisible by 3 or 5 but not both. Display the sum.
# Create betterThreesFives(lower, upper) that does the same but accepts the upper and lower limits as arguments

# I am writing only betterThreesFives(lower, upper). thrresFives() is nothing but betterThreesFives(100, 4000000)

# Assume the arguments passed are positive integers and upper is greater than lower
def betterThreesFives(low, up):
    sum = 0
    for i in range(low, up+1):
        if (i % 3 == 0 and i % 5 != 0) or (i % 3 != 0 and i % 5 == 0):
            sum += i
    print("The result between {} and {} is {}").format(low, up, sum)

myLow = 100
myUp = 4000000
betterThreesFives(myLow, myUp)
