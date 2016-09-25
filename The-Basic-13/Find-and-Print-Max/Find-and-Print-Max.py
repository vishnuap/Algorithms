# The Basic 13
# Find-and-Print-Max
# Given an array find and print the largest element

def largest(arr):
    largest = reduce((lambda x,y: x if x > y else y), arr)
    print(largest)

myArr = [1,5,3,7,5]
largest(myArr)
