# Chapter-2: Fundamentals-2
# Extract-O-Matic
# 1. Create extractDigit(num, digitNum) function that given a number and a digit number, returns the digit in the corresponding position. 0 represents the 1's digit, 1 represents the 10's digit and so on. e.g., extractDigit(1824, 2) returns 8. extractDigit(1824, 7) returns 0
# 2. Handle negative digitNum values where -1 represents the tenths digit (0.x), -2 represents the hundrreths digit (0.0x) and so on. extractDigit(123.45, -1) returns 4
# 3. Handle negative values for num as well

# For 3, I am just handling it like in #1
def extractDigit(num, digit):
    if (num % 1 == 0) and (digit < 0):
        return 0

    if (digit < 0):
        whole = int(abs(num) * (10 ** abs(digit)))
        return whole % 10
    else:
        # use 10.0 for division here since python will not return a float unless one of the operands in the division is a float. if we use just 10, the result of the division will always be an INT
        whole = (abs(num) / (10.0 ** (digit + 1)))
        return extractDigit(whole, -1)

myNum = 1824
myDigit = 1
print("extractDigit({}, {}) = {}").format(myNum, myDigit, extractDigit(myNum, myDigit))
