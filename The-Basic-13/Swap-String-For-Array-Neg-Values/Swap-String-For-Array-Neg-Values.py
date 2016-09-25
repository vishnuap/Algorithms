# The Basic 13
# Swap-String-For-Array-Neg-Values
# Given an array of numbers replace any negative values with the string "Dojo"

def swap(arr):
    for i in range(0, len(arr)):
        if arr[i] < 0:
            arr[i] = "Dojo"

myArr = [1, -1, 2, -3, 4, -5, 6]
print("The original array is {}").format(myArr)
swap(myArr)
print("The changed array is {}").format(myArr)
