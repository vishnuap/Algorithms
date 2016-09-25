# Chapter-1: Fundamentals
# Swap-Towards-Center
# Given array, swap first and last, third and third to last and so on. e.g., Input: [true, 42, "Ada", 2, "pizza"] becomes output: ["pizza", 42, "Ada", 2, true]. Input: [1,2,3,4,5,6] becomes output: [6,2,4,3,5,1]

# Assume argument passed is an array
def swapOdds(arr):
    length =len(arr)
    endPoint = length / 2

    for i in range(0, endPoint, 2):
        arr[i], arr[length - (i+1)] = arr[length - (i+1)], arr[i]

# myArr = [1,2,3,4,5,6]
myArr = [True, 42, "Ada", 2, "Pizza"]
print("The original array is {}").format(myArr)
swapOdds(myArr)
print("The changed array is {}").format(myArr)
