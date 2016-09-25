# The Basic 13
# Greater-Than-Y
# Given an array and a value Y, count and print the number of array values that are greater than Y

def greater(arr, y):
    count = 0
    for i in range(0, len(arr)):
        if arr[i] > y:
            count += 1

    print("In the array {}, the number of elements greater than {} is {}").format(arr, y, count)

myArr = [1,2,3,4,5,6,7,8,9]
myY = 5
greater(myArr, myY)
