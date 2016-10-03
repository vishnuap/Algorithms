# Chapter-3: Arrays
# Array-Push-Front
# Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods

# Built-in array method that can be used for this is "insert" - array.insert(index, val)

# Assuming that the arguments passed are an array and a single additional value
def pushFront(arr, val):
    # This is to set up an array with empty elements having length 1 more than the original
    result = ['' for i in range(0, len(arr)+1)]

    result[0] = val

    for i in range(0, len(arr)):
        result[i+1] = arr[i]

    return result

myArr = [1,2,3,4]
myVal = "First"
print("The original array is {}").format(myArr)
myArr = pushFront(myArr, myVal)
print("The changed array is {}").format(myArr)

# The approach manipulating the array length is not possible in python
