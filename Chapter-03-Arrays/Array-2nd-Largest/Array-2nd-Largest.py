# Chapter-3: Arrays
# Array-2nd-Largest
# Return the second largest element of an array. Given [42,1,4,Math.PI,7] return 7. If the array is too short, return null

# Assume the argument passed is an array with positive integers.
# Assume that if all elements are of equal value, there is no second largest and so return null
# Finding the largest will mean the array has to be sorted. Am writing the sort routine (the other way is to use the inbuilt sort function)

import math

def secondLargest(arr):
    sortedArray = sort(arr)
    length = len(sortedArray)
    max = sortedArray[-1]

    for i in range(length-2, -1, -1):
        if sortedArray[i] < max:
            return sortedArray[i]

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

myArr = [42, 1, 4, 7, 3, 72]
print("The second largest in {} is {}").format(myArr, secondLargest(myArr))
