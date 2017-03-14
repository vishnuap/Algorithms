# Chapter-2: Fundamentals-2
# Most-Significant-Digit
# Create a function which, given a number, returns the most significant digit of the number. The most significant digit is the left most, non-zero digit of the number. e.g., for 10340, most significant digit is 1. for 00.0403, most significant digit is 4

# Assume the argument passed is a non-zero number
def mostSignificant(num):
    found = False
    sigDig = 0

    if int(abs(num)) == 0:
        while not found:
            sigDig = int(abs(num) * 10)
            if sigDig > 0:
                found = True
            else:
                num = num * 10
    else:
        whole = int(abs(num))
        while not found:
            if whole / 10 == 0 and whole % 10 > 0:
                sigDig = whole
                found = True
            else:
                whole = whole / 10

    return sigDig

myNum = -0.09
print("The most significant digit of {} is {}").format(myNum, mostSignificant(myNum))
