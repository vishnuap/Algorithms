# Chapter-3: Arrays
# Array-Reverse
# Given a numerical array, reverse the order of values in-place. Do no use any built-in methods

# Assume that the argument passed is a non-empty array containing numbers
def reverse(arr):
    mid = len(arr) / 2
    length = len(arr)

    for i in range(0, mid):
        arr[i], arr[length - 1 - i] = arr[length - 1 - i], arr[i]

myArr = [1,2,3,4,5]
print("The original array is {}").format(myArr)
reverse(myArr)
print("The changed array is {}").format(myArr)
