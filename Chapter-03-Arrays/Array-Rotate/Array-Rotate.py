# Chapter-3: Arrays
# Array-Rotate
# 1. Given an array, implement rotate(arr, shiftBy) that shifts the array's values to the right by the amount specified in shiftBy.Wrap-around any values that shift off the array's end to the other side. Operate in-place and don't use built-in functions
# 2. Allow for negative shiftBy. for negative shiftBy values, shift left instead of right
# 3. Minimize memory usage. Handle shifts in the millions
# 4. Minimize the touches of each element

# Assume the parameter passed is a non-empty array
def rotate(arr, shiftBy):
    # Since rotation is circular, the actual amount to shift by will always be less than the length of the array. So if a huge value is provided as input, reduce that to actual shift value.
    # convert a negative ShiftBy value (shift left) into a positive so that we can identify which shift would involve the least movement
    shift = shiftBy % len(arr) if (shiftBy % len(arr) >= 0) else (len(arr) + (shiftBy % len(arr)))

    if shift > (len(arr) / 2):
        return rotateLeft(arr, len(arr) - shift)
    else:
        return rotateRight(arr, shift)

def rotateRight(arr, shift):
    # print("RotateRight")
    done = False
    # blockIdx = Shift Block start index. index of element in array starting from which all subsequent elements will be rotated
    blockIdx = len(arr) - shift

    while not done:
        # move the elements as close to the desired end as possible by swapping them as a whole block with their adjacent blocks
        if blockIdx - shift >= 0:
            for i in range(blockIdx, blockIdx + shift):
                arr[i], arr[i - shift] = arr[i - shift], arr[i]

            if blockIdx - shift == 0:
                done = True
            else:
                blockIdx -= shift
        else:
        # Once block movement is not possible, move the elements one by one.
            numToBeShifted = blockIdx #this will give number of elements left to be shifted

            # The top loop is to make sure all elements of the shift block are covered
            for k in range(0, shift):
                # The second loop is to make sure that all the remaining elements of the array have been shifted
                for j in range(0, numToBeShifted):
                    # The third loop makes sure that the shifting happens as many times as required to finish the rotation
                    for i in range(k, k + numToBeShifted):
                        arr[i], arr[i + 1] = arr[i + 1], arr[i]

            done = True

def rotateLeft(arr, shift):
    # print("RotateLeft")
    done = False
    # blockIdx = Shift Block end index. End index of the block of elements in array that have to be rotated
    blockIdx = shift - 1
    length = len(arr)

    while not done:
        # move the elements as close to the desired end as possible by swapping them as a whole block with their adjacent blocks
        if blockIdx + shift < length:
            for i in range(blockIdx, blockIdx - shift, -1):
                arr[i], arr[i + shift] = arr[i + shift], arr[i]

            if blockIdx + shift == length - 1:
                done = True
            else:
                blockIdx += shift
        else:
        # Once block movement is not possible, move the elements one by one.
            numToBeShifted = length - 1 - blockIdx # this will give the number of elements at the end that are left to be shifted

            # The top loop is to make sure that all the elements in the shift block are covered
            for k in range(length - 1, length - 1 - shift, -1):
                # The second loop is to make sure that all the remaining elements of the array have been shifted
                for j in range(0, numToBeShifted):
                    # The third loop makes sure that the shifting happens as many times as required to finish the rotation
                    for i in range(k, k - numToBeShifted, -1):
                        arr[i], arr[i - 1], arr[i - 1], arr[i]

            done = True

myArr = [1,2,3,4,5,6,7,8,9,10,11,12]
myShift = -8

print("The original array is {}").format(myArr)
rotate(myArr, myShift)
print("The rotated array is {}. Rotated by {}").format(myArr, myShift)
