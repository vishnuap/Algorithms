# Chapter-1: Fundamentals
# Scale-the-Array
# Given an array "arr" and number "num" multiply all values in "arr" by "num" and return the changed array "arr"

# Assume the arguments passed are an array which consists of numbers and a number
def scale(arr, num):
    for i in range(0, len(arr)):
        arr[i] *= num

myArr = [1,2,3,4,5,6,7,8,9]
myNum = 3
print("The original array is {}").format(myArr)
scale(myArr, myNum)
print("The changed array is {}").format(myArr)
