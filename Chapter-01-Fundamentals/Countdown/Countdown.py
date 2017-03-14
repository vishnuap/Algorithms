# Chapter-1: Fundamentals
# Countdown
# Create a function that accepts a number as an input. Return a new array that counts down by one, from the number down to 0. How long is the array

def retArr(num):
    respArr = []
    for i in range(num, -1, -1):
        respArr.append(i)

    return respArr

getArr = retArr(24)
print("The array is {} and its length is {}").format(getArr, len(getArr))
