# Chapter-1: Fundamentals
# Add-Seven-to-Most
# Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array

# Assume the argument sent is an array and it contains numbers
def Add7(arr):
    result = []

    for i in range(1, len(arr)):
        result.append(arr[i] + 7)

    return result

myArr = [1,2,3,4,5,6,7,8]
print("The original array is {}").format(myArr)
print("The Add7 array is {}").format(Add7(myArr))
