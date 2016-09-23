# Chapter-1: Fundamentals
# Values-Greater-Than-Second-Generalized
# Write a function that accepts any array and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

def gtSecond(arr):
    if type(arr) is not list:
        result = "Parameter passed is not an Array"
    elif len(arr) < 2:
        result = "The array passed is not long enough"
    else:
        result = []
        second = arr[1]
        length = len(arr)

        for i in range(0, length):
            if arr[i] > second:
                result.append(arr[i])

    return result

myArr = [1]
myResult = gtSecond(myArr)

print("The array is {}").format(myArr)
if type(myResult) is list:
    if len(myResult):
        print("The values greater than {} are {}. There are {} of them").format(myArr[1], myResult, len(myResult))
    else:
        print("There are no values greater than {}").format(myArr[1])
else:
    print("{}").format(myResult)
