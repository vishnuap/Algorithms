# Chapter-1: Fundamentals
# Increment-Seconds
# Given an array of numbers, add 1 to every second element specifically those whose index is odd. Afterward, print each array value and return array

# Assume the argument is an array and consists of numbers
def incrementSeconds(arr):
    for i in range(1, len(arr), 2):
        arr[i] += 1

    for i in range(0, len(arr)):
        print arr[i]

myArr = [1,2,3,4,5,6,7,8,9]
print("The original array is {}").format(myArr)
incrementSeconds(myArr)
print("The changed array is {}").format(myArr)
