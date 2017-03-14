# Chapter-3: Arrays
# Array-Concat
# Create a standalone function that concatenates two arrays. Return a new array containing the first array's elements followed by the second array's. e.g., arrConcat([1,2,3], ["a", "b", "c"]) will return [1,2,3,"a","b","c"]

# Assume both the arguments passed are Arrays
# Approach-1: without using built-in methods
def arrConcat(arr1, arr2):
    result = ['' for i in range(0, len(arr1) + len(arr2))]

    for i in range(0, len(result)):
        if i >= len(arr1):
            result[i] = arr2[i - len(arr1)]
        else:
            result[i] = arr1[i]

    return result

# Approach-2: using built-in methods
def arrConcat2(arr1, arr2):
    result = []

    for i in range(0, len(arr1) + len(arr2)):
        if i >= len(arr1):
            result.append(arr2[i - len(arr1)])
        else:
            result.append(arr1[i])

    return result

myArr2 = ["a", "b", "c"]
myArr1 = [1,2,3,5,6,7]
myResult = arrConcat(myArr1, myArr2)
myResult2 = arrConcat2(myArr2, myArr1)

print("The original arrays:")
print("Arr1: {}").format(myArr1)
print("Arr2: {}").format(myArr2)
print("The concatenated arrays:")
print("{}").format(myResult)
print("{}").format(myResult2)
