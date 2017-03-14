# Chapter-2: Fundamentals-2
# Claire-is-Where
# Create 4 functions to track the travels of Claire:
# 1. reset() - moves Claire home to the origin (0,0)
# 2. moveBy(xOffset, yOffset) - moves Claire by those amounts in those directions
# 3 & 4. xLocation() & yLocation - return how far Claire is from home in X and Y directions respectively.
# 5. distFromHome() - return the diagonal distance from home
# e.g., after reset(), moveBy(1,-2), moveBy(3,1) calling xLocation() and yLocation should return 4 and -1

import math
claire = {'x':0, 'y':0}

def reset():
    claire['x'] = 0
    claire['y'] = 0

def moveBy(xOffset, yOffset):
    claire['x'] += xOffset
    claire['y'] += yOffset

def xLocation():
    print("Claire's current X location is {}").format(claire['x'])

def yLocation():
    print("Claire's current Y location is {}").format(claire['y'])

def distFromHome():
    print("Claire's distance from home is {}").format(math.sqrt(claire['x'] ** 2 + claire['y'] ** 2))

reset()
moveBy(3, 1)
moveBy(1, -2)
xLocation()
yLocation()
distFromHome()
