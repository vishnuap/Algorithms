# Chapter-1: Fundamentals
# Double-Vision
# Given array create a function to return a new array where each value in the original has been doubled. Calling double([1,2,4]) should return [2,4,8] without changing the original

# Assume the argument passed is an array, is non-empty and consists of numbers
def double(arr):
    return map((lambda x: x * 2), arr)

myArr = [1,2,3,4,5]
print("The doubled array is {}").format(double(myArr))
print("The original array is {}").format(myArr)
