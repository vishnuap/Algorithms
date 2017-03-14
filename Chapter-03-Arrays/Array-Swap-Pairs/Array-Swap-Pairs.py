# Chapter-3: Arrays
# Array-Swap-Pairs
# Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. e.g, for [1,2,3,4] return [2,1,4,3]. for ["Brendan", true, 42] return [true, "Brendan", 42]. Do this without using built-in methods

# Assume the array passed is a non-empty array
def swapPairs(arr):
    for i in range(0, len(arr), 2):
        if (i + 1) < len(arr):
            arr[i], arr[i + 1] = arr[i + 1], arr[i]

myArr = [1,2,3,5,'',4]
print("The original array is {}").format(myArr)
swapPairs(myArr)
print("The swapped array is {}").format(myArr)
