# Chapter-3: Arrays
# Array-Nth-to-Last
# Return the element that is N from array's end. Given ([5,2,3,6,4,9,7], 3), return 4. If the array is too short return null

# Assume the arguments are an array and an integer and both are passed
def nthToLast(arr, num):
    return None if num > len(arr) else arr[-1 * num]

myArr = [5,2,3,6,4,9,7]
myNum = 3
print("Th element that is {} from the last in {} is {}").format(myNum, myArr, nthToLast(myArr, myNum))
