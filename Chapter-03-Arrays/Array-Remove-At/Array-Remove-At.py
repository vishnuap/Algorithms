# Chapter-3: Arrays
# Array-Remove-At
# Given array and an index into array, remove and return the array value at that index. Do this without using built-in methods except pop()

# The built-in method to use for this is "pop(idx)" - array.pop(idx) will return the element at index 'idx'

# assume the arguments passed are a non-empty array, index value within the length of the array
def removeAt(arr, idx):
    result = arr[idx]
    for i in range(idx, len(arr) - 1):
        arr[i] = arr[i + 1]
    arr.pop()
    return result

myArr = [1,2,3,4,5,6]
myIdx = 3
print("The original array is {}").format(myArr)
print("The item at index {} = {} and the changed array is {}").format(myIdx, removeAt(myArr, myIdx), myArr)
