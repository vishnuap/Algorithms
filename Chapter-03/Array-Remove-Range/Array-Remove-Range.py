# Chapter-3: Arrays
# Array-Remove-Range
# Given an array and the start and end indices, remove values in that index range. e.g., given ([10, 20, 30, 40, 50, 60, 70], 2,4), return [10, 20, 60, 70]. Work in-place

# Assume the arguments passed are an array and two integers
def removeRange(arr, start, end):
    (start, end) = (start, end) if start <= end else (end, start)

    if start < 0 or end > len(arr) - 1:
        return None
    else:
        for i in range(start, end+1):
            for j in range(start, len(arr) - 1):
                arr[j] = arr[j + 1]
            arr.pop()

        return arr

myArr = [10, 20, 30, 40, 50, 60, 70]
myStart = 6
myEnd = 5

print("The original array is {}").format(myArr)
print("The changed array is {}").format(removeRange(myArr, myStart, myEnd))
