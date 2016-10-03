# Chapter-3: Arrays
# Skyline-Heights
# Given an array with heights of consecutive buildings, starting closest to you and extending away ([-1, 7,3] would represent 3buildings, first is actually out of view below street level, second is 7 stories high and third is 3 stories high and hidden behind the second), return an array containing heights of buildings you can see, in order, from street level. e.g., given [-1, 1,1,7,3], return [1,7]. Given [0,4] return [4]. Do not use built in methods.

# Assume the argument is an array, is non-empty and contains integers
# Assume we have to return a new array and keep the original intact. Use the append() method.
def skyline(arr):
    result = [] if arr[0] < 0 else [arr[0]]
    cur = arr[0]

    for i in range(1, len(arr)):
        if arr[i] > cur:
            result.append(arr[i])
            cur = arr[i]

    return result

mySkyline = [1,3,2,4,7,3,5]
myView = skyline(mySkyline)

print("For a skyline of {}, my view is {}").format(mySkyline, myView)

# Doing it without using the .append() would mean we must write and use a custom concat function or go through the input array twice (once to count and second time to extract)
