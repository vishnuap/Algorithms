# Chapter-2: Fundamentals-2
# Gaming-Fun
# 1. Create a function "rollone()" to return a randomly selected integer between 1 and 6 (inclusive) (6 sided dice)
# 2. Create a function "playFives(num)" to call "rollone()" 'num' times. Each time it should print the value of rollone() and if that value = 5, also print "That's good luck!"
# 3. Create a new function "playStatistics(num)" which calls "rollone()" 'num' times. After calling it 'num' times, print lowest, highest, sum and average value of the rolls

import random as rd

# Assume the arguments passed are non-zero positive integers
def rollOne():
    return rd.randint(1, 6)

def playFives(num):
    for i in range(0, num):
        roll = rollOne()
        if (roll == 5):
            print("Roll = {} - That's good luck!").format(roll)
        else:
            print("Roll = {}").format(roll)

def playStatistics(num):
    high = 1
    low = 6
    sum = 0
    roll = 0

    for i in range(0, num):
        roll = rollOne()
        high = high if high > roll else roll
        low = low if low < roll else roll
        sum += roll

    print("After {} rolls of the dice, Highest = {}; Lowest = {}; Sum = {}; Avg = {}").format(num, high, low ,sum ,sum * 1.0 / num)

myNum = 8
playFives(myNum)
playStatistics(myNum)
