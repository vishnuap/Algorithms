# Chapter-3: Arrays
# Array-Min-to-Front
# Given an array of comparable values, move the lowest element to array's front, shifting back any elements previous ahead of it. Do not otherwise change the order of the elements in the array. Given [4,2,1,3,5] return [1,4,2,3,5]. Do this without using built-in functions

# Assume argument passed is a non-empty array
def minToFront(arr):
    min = arr[0]
    minPos = 0

    for i in range(1, len(arr)):
        if min > arr[i]:
            min = arr[i]
            minPos = i

    for i in range(minPos, 0, -1):
        arr[i] = arr[i - 1]

    arr[0] = min

myArr = [8,9,4,10]
print("The original array is {}").format(myArr)
minToFront(myArr)
print("The changed array is {}").format(myArr)
