# Chapter-2: Fundamentals-2
# Sigma
# Create a function "sigma(num)" that given a number, returns the sum of all positive integers up to that number. e.g., sigma(3) = 6 (1+2+3)

# Assume the argument passed is a positive integers
# Approach-1: Math
# Sum of first 'n' integers = n*(n+1)/2
def sigma(num):
    return num * (num + 1)/2

# Approach-2: Loop
def sigma2(num):
    sum = 0
    for i in range(1, num+1):
        sum += i
    return sum

myNum = 3
print("The result of sigma({}) = {}").format(myNum, sigma(myNum))
print("The result of sigma2({}) = {}").format(myNum, sigma2(myNum))
