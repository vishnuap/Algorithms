# Chapter-3: Arrays
# Zip-It
# 1. Create a function that accepts two arrays and combines their values sequentially into a new array at alternating indices starting with the first array. Extra values of either array should be included afterwards. Given [1,2] and [10,20,30], return [1,10,2,20,30]
# 2. Combine the two arrays in the same way but in the first array instead of creating a new array

# Assume the arguments being passed are both arrays
# Assume use of built in functions (for doing this without builtin functions, use the approach from the Array-Insert-At solution earlier in this chapter)
# 1
def zipIt(arr1, arr2):
    result = []
    length = len(arr1) + len(arr2)

    for i in range(0, length):
        if i < len(arr1):
            result.append(arr1[i])
        if i < len(arr2):
            result.append(arr2[i])

    return result

# 2
def zipIt2(arr1, arr2):
    arr1Len = len(arr1)
    arr2Len = len(arr2)
    idx = 0

    while (len(arr1) < arr1Len + arr2Len):
        if (idx < arr1Len):
            arr1.insert((idx * 2) + 1, arr2[idx])
        else:
            arr1.insert(len(arr1), arr2[idx])
        idx += 1

myArr1 = [1,2,3,4,5]
myArr2 = [10,20,30,40,50]
print("The original arrays are {} and {}").format(myArr1, myArr2)
print("The zipped array is {}").format(zipIt(myArr1, myArr2))
print("The zipped array is {}").format(zipIt(myArr2, myArr1))
zipIt2(myArr1, myArr2)
print("The zipped array is {}").format(myArr1)
