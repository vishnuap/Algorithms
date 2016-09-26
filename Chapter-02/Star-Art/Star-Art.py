# Chapter-2: Fundamentals-2
# Star-Art
# Write 3 functions:
# Write function "drawLeftStars(num)" that accepts a number and prints that many 'stars'
# Write function "drawRightStars(num)" that accepts a number and prints 75 characters in total with that many 'stars' from the right side. The last 'num' characters of the 75 must be 'stars'
# Write function "drawCenterStars(num)" that prints 75 characters total. The stars should be centered in the 75.

# Assume the argument passed is a positive integer <= 75
def drawLeftStars(num):
    print("{}").format('*' * num)

def drawRightStars(num):
    star1 = "-" * (75 - num)
    star2 = "*" * num
    print("{}").format(star1 + star2)

def drawCenterStars(num):
    star1 = "-" * ((75 - num)/2)
    star2 = "*" * num
    star3 = "-" * (75 - ((75 - num)/2 + num))
    print("{}").format(star1+star2+star3)

drawLeftStars(35)
drawRightStars(40)
drawCenterStars(35)
