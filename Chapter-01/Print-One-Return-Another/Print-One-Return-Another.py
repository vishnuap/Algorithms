# Chapter-1: Fundamentals
# Print-One-Return-Another
# Build a function that takes array of numbers. The function should print second to last value in the array and return first odd value in array

# Assume the argument passed is an array and it consists of numbers
# Assume the array has 2 or more elements
def pora(arr):
    print("The second to last element is '{}'").format(arr[len(arr) - 2])

    for i in range(0, len(arr)):
        if arr[i] % 2:
            return arr[i]

    return "No odd numbers in the array"

myArr = [2,4,6,8,0]
print("The first odd number is '{}'").format(pora(myArr))
