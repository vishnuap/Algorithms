# Chapter-1: Fundamentals
# Evens-and-Odds
# Create a function that accepts an array. Every time that array has three odd values in a row, print "That's odd!". Every time the array has three even numbers in a row print "Even more so!"

# Assume the argument is an array, is non-empty and consists of numbers
# Approach-1: For any given 4 odd or 4 even numbers, we could consider them as two sets of 3 odd numbers (or even numbers). e,g., [2,4,6,8] has (2,4,6) and (4,6,8) as two sets of 3 even numbers in a row.
def evenOdd1(arr):
    for i in range(0, len(arr)-2):
        if arr[i] % 2 == 0 and arr[i+1] % 2 == 0 and arr[i+2] % 2 == 0:
            print("({}, {}, {}) - Even more so!").format(arr[i], arr[i+1], arr[i+2])
        elif arr[i] % 2 == 1 and arr[i+1] % 2 == 1 and arr[i+2] % 2 == 1:
            print("({}, {}, {}) - That's odd!").format(arr[i], arr[i+1], arr[i+2])

# Approach-2: After any set of 3 consecutive odd/even numbers, start counting the next set from the 4th element. e.g., in [2,4,6,8,10,12], one set is (2,4,6) and then the next set is (8,10,12)
def evenOdd2(arr):
    length = len(arr) - 2
    i = 0
    while (i < length):
        if arr[i] % 2 == 0 and arr[i+1] % 2 == 0 and arr[i+2] % 2 == 0:
            print("({}, {}, {}) - Even more so!").format(arr[i], arr[i+1], arr[i+2])
            i += 3
        elif arr[i] % 2 == 1 and arr[i+1] % 2 == 1 and arr[i+2] % 2 == 1:
            print("({}, {}, {}) - That's odd!").format(arr[i], arr[i+1], arr[i+2])
            i += 3
        else:
            i += 1

myArr = [3,5,7,9,11,13,15]
evenOdd1(myArr)
print("------------")
evenOdd2(myArr)
