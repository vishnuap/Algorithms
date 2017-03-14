# Chapter-1: Fundamentals
# Outlook-Negative
# Given an array create and return and new one containing all the values of the provided array made negative. Given [1,-3,5], return [-1,-3,-5]

# Assume the argument passed is an array, is non-zero and contains numbers
def negative(arr):
    result = []
    map((lambda x: result.append(x if x < 0 else (x * -1))), arr)
    return result

myArr = [1,-3,5]
print("The negative array is {}").format(negative(myArr))
print("The original array is {}").format(myArr)
