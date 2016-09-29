# Chapter-2: Fundamentals-2
# Rockin-the-Dojo-Sweatshirt
# Let's say the Dojo sweatshirt costs $20(incl. tax). Friendly Josh gives a 9% discount if you buy 2, a nice 19% discount if you buy 3 or a sweet 35% discount if you buy 4 or more. He only accepts cash and says he doesn't have coins, so you should round UP to the nearest dollar. Build function sweatshirtPricing(num) that, given number of sweatshirts, returns the cost

import math
# Assume the argument passed is a non-zero positive integer
def sweatshirtPricing(num):
    if num == 1:
        return 20
    elif num == 2:
        return int(math.ceil(20 * (1 - 0.09) * num))
    elif num == 3:
        return int(math.ceil(20 * (1 - 0.19) * num))
    else:
        return int(math.ceil(20 * (1 - 0.35) * num))

myNum = 2
print("The price of {} sweatshirts = {}").format(myNum, sweatshirtPricing(myNum))
