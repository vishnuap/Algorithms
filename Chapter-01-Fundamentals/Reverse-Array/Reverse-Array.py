# Chapter-1: Fundamentals
# Reverse-Array
# Given array write a function that reverses values in-place. e.g., reverse([3,1,6,4,2]) returns same array containing [2,4,6,1,3]

# Assume the argument passed is a non-empty array
def reverse(arr):
    length = len(arr)
    numberOfSwitches = length / 2
    idx = 0

    for i in range(0, numberOfSwitches):
        arr[idx], arr[length - (idx+1)] = arr[length - (idx+1)], arr[idx]
        idx += 1

myArr = [1,2,3,4,5,6,7,8]
print("The original array is {}").format(myArr)
reverse(myArr)
print("The reversed array is {}").format(myArr)
