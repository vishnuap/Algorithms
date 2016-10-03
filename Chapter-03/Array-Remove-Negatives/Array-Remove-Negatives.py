 # Chapter-3: Arrays
 # Array-Remove-Negatives
 # Implement removeNegatives(arr) that accepts an array removes, negative values and returns the same array (not a copy. Do this in-place) preserving the non-negative order. Do not use built-in functions. Do not use nested-loops

 # This is similar to the "Array-Remove-Duplicates" problem earlier in this chapter. The only change will be in the logic used to identify duplicates vs logic used to identify negatives.

# As usual, the array length is a read-only in python so to reduce the array size I am using the del() built in function. There is not other way of doing it in-place

 # Assume argument passed is an array with integers
def removeNegatives(arr):
    curPos = -1

    for i in range(0, len(arr)):
        if arr[i] >= 0:
            arr[i], arr[curPos + 1] = arr[curPos + 1], arr[i]
            curPos += 1

    length = len(arr)
    for i in range(curPos + 1, length):
        del arr[-1]

myArr = [1, -2, -3, -4, 5]
print("The original array is {}").format(myArr)
removeNegatives(myArr)
print("The changed array is {}").format(myArr)
