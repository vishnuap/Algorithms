# Given two arrays, create an associative array (object/map) containing keys of the first array and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}

# assume equal length arrays

def zip(arr1, arr2):
    result = {}

    for i in range(0, len(arr1)):
        result[arr1[i]] = arr2[i]

    return result

myArr1 = ["abc", 3, "yo"]
myArr2 = [42, "wassup", True]
print(zip(myArr1, myArr2))
