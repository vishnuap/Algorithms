# Chapter-3: Arrays
# Array-Insert-At
# Given array, index and additional value, insert the value in the array at the given index. Do this without using built-in array methods.

# The built-in method to do this is "insert" - array.index(idx, value) inserts 'value' at index 'idx'

# Assume the argument passed is an array and a non-negative index value which is less than or equal to 1 more than the length of the array passed

# In python referencing the array[length of array] will throw an error unlike in JS. Hence the only way forward for building this function is to setup and populate a new array and return it
def insertAt(arr, idx, val):
    result = ['' for i in range(0, len(arr)+1)]
    for i in range(0, idx):
        result[i] = arr[i]
    result[idx] = val
    for i in range(idx+1, len(result)):
        result[i] = arr[i - 1]

    return result

myArr = [1,2,3,4,5,6]
myIdx = 6
myVal = "insert"
print("The original array is {}").format(myArr)
myResult = insertAt(myArr, myIdx, myVal)
print("After inserting '{}' at the index {}, the changed array is {}").format(myVal, myIdx, myResult)

# We could of course do this without introducing the new array by using array.append to increase the length of the given array. Am not doing it to strictly adhere to the "do not use built-in methods" directive
