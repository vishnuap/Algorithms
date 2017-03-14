# Chapter-3: Arrays
# Array-Pop-Front
# Given array, remove and return the value at the beginning of the array. Do this without using any built-in methods except pop()

# The built-in method for doing this is "pop(0)" - array.pop() will return last value; array.pop(0) will return value at 'index = 0'

# Assume the arguments passed is a non-empty array
def popFront(arr):
    first = arr[0]
    for i in range(0, len(arr) - 1):
        arr[i] = arr[i + 1]

    arr.pop()
    return first

myArr = [2,4,6,8,0]
print("The original array is {}").format(myArr)
myResult = popFront(myArr)
print("The value popped from front is {} and the changed array is {}").format(myResult, myArr)

# Approach using array length is not applicable in python
