# Without using the "len" method, find the number of elements in a given array

def arrLen(arr):
    result = 0

    for key in arr:
        result += 1

    return result

myArr = [1,2,3,4,5]
myArr = ['a', 'b', 3, 'd', 5, 'f']
# myArr = {'a': 1, 'b': 2, 'c': 3}
print(arrLen(myArr))
