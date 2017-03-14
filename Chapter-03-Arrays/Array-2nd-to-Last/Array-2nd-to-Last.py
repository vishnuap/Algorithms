# Chapter-3: Arrays
# Array-2nd-to-Last
# Return the 2nd to last element of an array. Given [1,2,-3,4] return -3. If array is too short return null

# Assume the argument passed is an array
def secondToLast(arr):
    if len(arr) < 2:
        return None
    else:
        return arr[len(arr) - 2]

myArr = [6]
print("The second to last element in {} is {}").format(myArr, secondToLast(myArr))
