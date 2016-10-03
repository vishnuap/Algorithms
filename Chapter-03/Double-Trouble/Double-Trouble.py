# Chapter-3: Arrays
# Double-Trouble
# Create a function that changes a given array to list each element twice, retaining the original order. e.g., convert [4, "Ulysses", 42, false] to [4,4,"Ulysses", "Ulysses", 42,42,false, false]

# Assume the argument passed is an array
# Again using the insert() built in. For approach without using any built-in refer to the Array-Insert-At assignment
def double(arr):
    length = len(arr)
    idx = 0

    while idx < length:
        arr.insert(idx + 1, arr[idx])
        length += 1
        idx += 2

myArr = [4, "Ulysses", 42, False]
print("The original array is {}").format(myArr)
double(myArr)
print("The changed array is {}").format(myArr)
