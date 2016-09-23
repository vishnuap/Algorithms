# Chapter-1: Fundamentals
# First-Plus-Length
# Given an array, return the sum of the first value in the array plus the array's length. What happens when the array's first element is not a number but a string (like "what") or a boolean (like "false")?

# Not validating the array being passed. Assuming that it is a non-empty array

def firstPlusLength(arr):
    return arr[0] + len(arr)

myArr = [1,3,1,4,5,6]
print("For the array {} - the return value is {}").format(myArr, firstPlusLength(myArr))

myArr = ["This", "is", "not", "a", "string"]
print("For the array {} - the return value is {}").format(myArr, firstPlusLength(myArr)) # Note that this DOESn't work because of STRING + INTEGER operation. Fails in Python

myArr = [True, True]
print("For the array {} - the return value is {}").format(myArr, firstPlusLength(myArr)) # Returns a numerical value. Means the boolean in the array is treated a number internally. False = 0; True = 1
