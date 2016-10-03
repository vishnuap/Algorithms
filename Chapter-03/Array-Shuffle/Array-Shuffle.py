# Chapter-3: Arrays
# Array-Shuffle
# Create shuffle(arr) to efficiently shuffle a given array's values. Work in-place.

# Assume the argument passed is an array contaning integers

import random as rd

def shuffle(arr):
    length = len(arr)

    while length > 0:
        rIdx = rd.randint(0, length-1)
        arr[rIdx], arr[length - 1] = arr[length - 1], arr[rIdx]
        length -= 1

myArr = [1,2,3,4,5]
print("The original array is {}").format(myArr)
shuffle(myArr)
print("The shuffled array is {}").format(myArr)
