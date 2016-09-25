# The Basic 13
# Max-Min-Avg
# Given an array print the max, min and average values for that array

def mma(arr):
    max = reduce((lambda x,y: x if x > y else y), arr)
    min = reduce((lambda x,y: x if x < y else y), arr)
    sum = reduce((lambda x,y: x+y), arr)

    print("The max is {}; min is {}; avg is {}").format(max, min, (sum * 1.0)/len(arr))

myArr = [1,2,3,4,5]
mma(myArr)
