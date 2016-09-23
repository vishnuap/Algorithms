# Chapter-1: Fundamentals
# Values-Greater-Than-Second
# For [1,3,5,7,9,13] print values that are greater than it's 2nd value. Return how many values this is

# Assuming that the parameter passed is an array and it has atleast 2 elements
def gtSecond(arr):
    second = arr[1]
    length = len(arr)
    count  = 0

    for i in range(0, length):
        if arr[i] > second:
            count += 1
            print("{} is greater than {}").format(arr[i], second)

    print("Number of values greater than {} = {}").format(second, count)

gtSecond([1,3,5,7,9,13])
