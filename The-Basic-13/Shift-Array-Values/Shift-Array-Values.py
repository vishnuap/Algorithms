# The Basic 13
# Shift-Array-Values
# Given an array move all values forward by one ndex dropping the first and leaving a '0' value at the end

def shift(arr):
    del arr[0]
    arr.append(0)

myArr = [1,2,3,4,5]
print("The original array is {}").format(myArr)
shift(myArr)
print("The changed array is {}").format(myArr)
