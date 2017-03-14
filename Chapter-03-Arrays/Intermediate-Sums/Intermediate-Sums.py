# Chapter-3: Arrays
# Intermediate-Sums
# Given an array of numbers, add an additional element after every 10 elements which will be equal to the sum of the preceeding 10 values. If the end of the array doesn't align evenly with 10, add an element at the end with the sum of the values that have not been included yet. e.g., given [1,1,1,1,1,1,1,1,1,1,2,3,2,] return [1,1,1,1,1,1,1,1,1,1,10,2,3,2,7]

# Assume argument passed is an array containing integers
# Since we have already done the 'Array-Insert-At' without using built-in methods, refer to that logic to do this without built ins. I am doing this here using the 'insert' built-in method
def interSum(arr):
    length = len(arr)
    count = 0
    sum = 0
    idx = 0

    while idx < length:
        sum += arr[idx]
        count += 1

        if count % 10 == 0 or idx == (len(arr) - 1):
            arr.insert(idx + 1, sum)
            sum = 0
            idx += 1
            length += 1

        idx += 1

myArr = [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,4,5,6,6]
print("The original array is {}").format(myArr)
interSum(myArr)
print("The  changed array is {}").format(myArr)
