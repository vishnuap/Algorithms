# Given a positive integer, return a string containing that value represented in roman numerals.In this representation, I = 1; V = 5; X = 10; L = 50; C = 100; D = 500; M = 1000; 4 = IV; 9 = IX; 40 = XL; 90 = XC; 400 = CD; 900 = CM

# Conversion of integers to romans will have to start by seperating the big, rounded integers, converting them to roman and just adding the strings together. for e.g., 4397 = 4000 + 300 + 90 + 7 which traslates to 'MMMM' + 'CCC' + 'XC' + 'VII' = 'MMMMCCCXCVII'

import math

def i2r(numInt):
    roman = {
    1000: 'M',
    500 : 'D',
    100 : 'C',
    50  : 'L',
    10  : 'X',
    5   : 'V',
    1   : 'I'
    }

    ul = ll = 0
    numArrIdx = 0
    numArr = []

    result = ''

    # the simple way of converting a num into array of digits is the while loop
    # this will give a reversed array
    # while numInt > 0:
    #     numArr.append(numInt % 10)
    #     numInt = numInt / 10

    # Another way of getting the array is to use a list-comprehension
    # this will give array in the same order
    # numArr = [(numInt / (10 ** i)) % 10 for i in range(int(math.ceil(math.log10(numInt)))-1, -1, -1)]
    # math.ceil(math.log10(num)) will give the number of digits in the number
    # can also be done as math.ceil(math.log(num, 10))

    # using list comprehension but casting the input as a string and converting the result back to int
    # this will also give the same order array
    # numArr2 = [int(digit) for digit in str(numInt)]

    # using list comprehension to generate a reversed array because the roman conversion logic depends on a reversed array
    numArr = [(numInt % (10 ** (i+1))) / (10 ** i) for i in range(0, int(math.ceil(math.log10(numInt))))]

    for idx in range(len(numArr)-1, -1, -1):
        mul = 10 ** idx
        num = numArr[idx] * mul

        if num in roman:
            result += roman[num]
        else:
            if num > 1000:
                ll = 1000
                ul = 0
            elif num < 1000 and num > 500:
                ll = 500
                ul = 1000
            elif num < 500 and num > 100:
                ll = 100
                ul = 500
            elif num < 100 and num > 50:
                ll = 50
                ul = 100
            elif num < 50 and num > 10:
                ll = 10
                ul = 50
            elif num < 10 and  num > 5:
                ll = 5
                ul = 10
            elif num < 5 and num > 1:
                ll = 1
                ul = 5
            else:
                ll = 0
                ul = 0

        if ll or ul:
            if (ul - num) in roman:
                result += roman[ul - num] + roman[ul]
            else:
                result += roman[ll] + getLL(roman, num-ll, mul)

    return result

def getLL(r, n, l):
    multiple = n / l
    retVal = ''

    for i in range(1, multiple+1):
        retVal += r[l]

    return retVal

intVal = 5678
print("Integer is {}").format(intVal)
print("{} in Roman is {}").format(intVal, i2r(intVal))
