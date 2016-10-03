# Chapter-3: Arrays
# Array-Remove-Duplicates
# Given a sorted array, remove the duplicate values in the array. Do not use any built-in methods

# Using and manipulating the array.length is not an option in python. Which means removing duplicates (and reducing the array size accordingly) without introducing a new array is not going to be possible without using a built-in method. I am using the 'del' method to achieve this

# Assume the array passed is non-empty and is sorted in ascending order
def remDup(arr):
    cur = arr[0]
    curPos = 0

    for i in range(1, len(arr)):
        if cur != arr[i]:
            cur = arr[i]
            arr[i], arr[curPos + 1] = arr[curPos + 1], arr[i]
            curPos += 1

    discardLen = len(arr) - (curPos + 1)
    for i in range(1, discardLen+1):
        del arr[-1]

myArr = [1,1,2,2,3,4,5,5,5,7,7,8,9,9]
# myArr = [9,9,8,7,7,5,5,5,4,3,2,2,1,1]
print("The original array is {}").format(myArr)
remDup(myArr)
print("The array after removing duplicates is {}").format(myArr)
