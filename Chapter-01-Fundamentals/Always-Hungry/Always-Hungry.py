# Chapter-1: Fundamentals
# Always-Hungry
# Create a function that accepts an array and prints "yummy" each time one of the values is equal to "food". If no array element is "food", then print "I'm hungry" once

# Assume the argument passed is an array
def yummy(arr):
    hungry = 1
    for i in range(0, len(arr)):
        if arr[i] == 'food':
            hungry = 0
            print("Yummy")
    if hungry:
        print("I'm hungry")

myArr = ['I', 'food', 'to', 'food']
yummy(myArr)
