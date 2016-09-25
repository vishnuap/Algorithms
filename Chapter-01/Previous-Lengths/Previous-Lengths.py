# Chapter-1: Fundamentals
# Previous-Lengths
# You are passed an array containing strings. Working within that same array replace each string with a number - the length of the string at previous array index - and return the array

# Assume the argument to the function is an array containing strings
# We need to start this processing from the end since starting from the first element would mean that by the time we go to the next one, the previous element (the one we started with) would have become a number
# The first element can get the length of the last element
def prevLen(arr):
    lastLen = len(arr[len(arr) - 1])
    for i in range(len(arr)-1, 0, -1):
        arr[i] = len(arr[i-1])
    arr[0] = lastLen

myArr = ["first", "second", "third", "fourth", "fifth", "sixth"]
print("The array before replacement - {}").format(myArr)
prevLen(myArr)
print("The array after replacement - {}").format(myArr)
