# Chapter-2: Fundamentals-2
# Statistics-Until-Doubles
# Implement a 20-sided die that randomly returns integers between 1 and 20 (inclusive). Roll the die, tracking statistics until you get a value twice in a row. After that display number of rolls, min, max and average

import random as rd

def stats():
    done = False
    max = 1
    min = 20
    sum = 0
    count = 0
    prev = 0
    roll = 0

    while not done:
        roll = rd.randint(1,20)
        max = max if max > roll else roll
        min = min if min < roll else roll
        sum += roll
        count += 1
        if (prev == roll):
            done = True
        else:
            prev = roll

    print("After {} rolls, the value repeated is {}. The stats are Max = {}; Min = {}; Sum = {}; Avg = {}").format(count, prev, max, min, sum, sum * 1.0 / count)

stats()
