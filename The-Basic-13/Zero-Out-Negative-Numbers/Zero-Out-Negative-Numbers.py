# The Basic 13
# Zero-Out-Negative-Numbers
# Return the given array after setting any negative numbers to Zero-Out-Negative-Numbers

def zeroOut(arr):
    for i in range(0, len(arr)):
        if arr[i] < 0:
            arr[i] = 0

myArr = [1, -1, 2, -3, 4, -5, 6, -6]
print("The original array is {}").format(myArr)
zeroOut(myArr)
print("The changed array is {}").format(myArr)
