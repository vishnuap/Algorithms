# The Basic 13
# Square-the-Values
# Square each value in a given array returning the same array with changed values

def square(arr):
    for i in range(0, len(arr)):
        arr[i] *= arr[i]

myArr = [1,2,3,4,5]
print("The original array is {}").format(myArr)
square(myArr)
print("The changed array is {}").format(myArr)
