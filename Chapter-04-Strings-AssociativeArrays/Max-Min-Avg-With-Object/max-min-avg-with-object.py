# Given an array of numbers, return an object containing the array's max, min and average values
# Dont use built-ins

def maxMinAvg(arr):
    if len(arr):
        result = {'max': arr[0], 'min': arr[0], 'avg': 0}
        l = len(arr)
        s = arr[0]

        for i in range(1, l):
            result['max'] = arr[i] if result['max'] < arr[i] else result['max']
            result['min'] = arr[i] if result['min'] > arr[i] else result['min']
            s += arr[i]

        result['avg'] = s / (l * 1.0)

        return result
    else:
        return "Empty String"

myArr = [1,2,3,4,5]
myArr = [-1,-2,3,-4,5,0,0]
myArr = []
myArr = [1]
print(maxMinAvg(myArr))
