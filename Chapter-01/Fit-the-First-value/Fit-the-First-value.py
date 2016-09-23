# Chapter-1: Fundamentals
# Fit-the-First-value
# Your function should accept an array. If value at [0] is greater than array's length, print "Too big!"; if value at [0] is less than array's length, print "Too small!"; otherwise print "Just right!"

# Assuming argument passed is an array and first element is a number
def ftfv(arr):
    if arr[0] > len(arr):
        print("Too big!")
    elif arr[0] < len(arr):
        print("Too small!")
    else:
        print("Just right!")

myArr = [6,4,6,3,2]
ftfv(myArr)
