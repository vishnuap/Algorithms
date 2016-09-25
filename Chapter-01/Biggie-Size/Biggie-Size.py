# Chapter-1: Fundamentals
# Biggie-Size
# Given an array write a function that changes all positive numbers in the array to "big".

# Assume the argument passed is an array containing numbers
def makeItBig(arr):
    for i in range(0, len(arr)):
        if arr[i] > 0:
            arr[i] = 'big'

myArr = [1,-1,2,4,-5,-2,8,-7]
print("Array before making it big - {}").format(myArr)
makeItBig(myArr)
print("Array after making it big - {}").format(myArr)
