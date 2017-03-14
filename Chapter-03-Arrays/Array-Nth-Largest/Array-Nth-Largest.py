# Chapter-3: Arrays
# Array-Nth-Largest
# Given 'arr' and 'N', return the Nth largest element, where N-1 elements are larger. Return null if needed

# Assume the arguments are an array with integers and an integer and both are passed to the function
# Since we want Nth largest such that N-1 elements are larger, if there are duplicates in the array, then Nth largest will not necessarily be the Nth element from the last in a sorted-in-ascending-order array. Hence the sorted array will have to be looped through to find the Nth largest element

import math

def nthLargest(arr, num):
    if num > len(arr):
        return None

    sortedArray = sort(arr)
    length = len(sortedArray)
    max = sortedArray[-1]
    count = 1

    for i in range(length - 2, -1, -1):
        if (sortedArray[i] < max):
            if count == num - 1:
                return sortedArray[i]
            else:
                max = sortedArray[i]
                count += 1

    return None

# I am implementing a Radix sort. Currently works with only positive integers
# Will use push() built-in function
def sort(arr):
    buckets = []   # empty array to hold the intermediate values
    bucketLen = 0  # length of each bucket
    bucketIdx = 0
    length = len(arr)
    div = 10
    curSize = 0
    maxSize = 0
    iter = 0

    # Find the maximum number of digits comprising any element in the array. That will decide how many iterations we go into
    for i in range(0, length):
        curSize = int(math.log10(arr[i])) + 1
        maxSize = maxSize if maxSize > curSize else curSize

    # Now iterate over the array to sort it. per Wikipedia, I am doing an LSD radix sort (least significant digit)
    while iter < maxSize:
        # create the empty buckets
        buckets = [[] for i in range(0,10)]

        # Populate the buckets
        for i in range(0, length):
            # Find the lest significant digit to sorton. With each iteration, this moves 1 digit to the left
            bucketIdx = (arr[i] % div) / (div / 10)
            buckets[bucketIdx].append(arr[i])

        # Reset the array.
        arr = []
        # Write contents of buckets back into array
        for i in range(0, 10):
            for j in range(0, len(buckets[i])):
                arr.append(buckets[i][j])

        # increment the divisor
        div *= 10
        # increment the iteration count
        iter += 1

    # return the sorted array
    return arr

myArr = [42, 1, 4, 72, 42, 72, 42, 72]
myNum = 4
print("The Nth largest in {} where N = {} is {}").format(myArr, myNum, nthLargest(myArr, myNum))
