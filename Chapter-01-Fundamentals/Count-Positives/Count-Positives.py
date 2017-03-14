# Chapter-1: Fundamentals
# Count-Positives
# Given array of numbers create a function to replace the last value with the number of positive values. e.g., countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it

# Assume argument sent is an array, is non-zero and consists of numbers
def countPositives(arr):
    count = 0
    for i in range(0, len(arr)):
        count += 1 if arr[i] > 0 else 0
    arr[len(arr) - 1] = count

myArr = [-1,1,1,1]
print("The array is {}").format(myArr)
countPositives(myArr)
print("The changed array is {}").format(myArr)
