# Chapter-2: Fundamentals-2
# Factorial
# Write a function "factorial(num)" that given a number returns the product of all positive integers from 1 up to that number. e.g., factorial(3) = 6 (1 * 2 * 3)

# Assume the argument passed is a positive integer
# Approach-1: Recursion. The disadvantage is that this is in-efficient for large numbers
def factorial(num):
    if num == 1:
        return 1
    else:
        return num * factorial(num - 1)

# Approach-2: Loop
def factorial2(num):
    fact = 1
    for i in range(1, num+1):
        fact *= i
    return fact

myNum = 6
print("The result of factorial({}) = {}").format(myNum, factorial(myNum))
print("The result of factorial2({}) = {}").format(myNum, factorial2(myNum))
