# Chapter-2: Fundamentals-2
# Is-Prime
# Return whether a given integer is prime.

# Assume the argument passed is nun-zero, positive integer
# Approach - for checking if any number is prime, we need to check that it is not divisible by any number greater than 1 and less than its square root.
import math

def isPrime(num):
    if num <= 2:
        return True

    sqrtNum = int(math.sqrt(num))

    for i in range(2, sqrtNum+1):
        if num % i == 0:
            return False

    return True

myNum = 89
print("{} isPrime : {}").format(myNum, isPrime(myNum))
