# Chapter-1: Fundamentals
# Print-and-Return
# Your function will receive an array with two numbers. Print the first value and return the second

# Assuming that the parms passed to the function are valid. Not doing validations
def pNr(arr):
    print("The first element in the array printed inside the function is {}").format(arr[0])
    return arr[1]

myArr = [2,1]
print("The second element in the array returned from the function is {}").format(pNr(myArr))
