# Chapter-1: Fundamentals
# Only-Keep-The-Last-Few
# Stan learned something today: that reducing an array's length immediately shortens it by that amount. Given array "arr" and number "x", remove all except the last "x" elements and return changed "arr". e.g., Input: ([2,4,6,8,10], 3) - output: [6,8,10]

# Assume the arguments passed are an array with numbers and a numbers
# Approach: In python, the array length cannot be manipulated directly. Hence this cannot be solved by trying to manipulate the array length.
def lastFew(arr, num):
    if num > len(arr):
        print("The given number is bigger than the array length")
    elif num < len(arr):
        length = len(arr)
        for i in range(0, length - num):
            del arr[0]

myArr = [1,2,3,4,5,6,7]
myNum = 4
print("The original array is {}").format(myArr)
lastFew(myArr, myNum)
print("The changed array is {}").format(myArr)
