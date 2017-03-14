# Chapter-1: Fundamentals
# Print-Low-Return-High
# Create a function that takes array of numbers. The function should print the lowest value in the array and return the highest value in the array

# Assume the argument passed is an array and it contains numbers
def plrh(arr):
    low = arr[0]
    high = arr[0]

    for i in range(1, len(arr)):
        low = arr[i] if arr[i] < low else low
        high = arr[i] if arr[i] > high else high

    print("The lowest element in {} is {}").format(arr, low)
    return high

myArr = [5,2,7,3,5,6,3,3,2,1]
print("The highest element in {} is {}").format(myArr, plrh(myArr))
