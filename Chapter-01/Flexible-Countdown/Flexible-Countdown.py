# Chapter-1: Fundamentals
# Flexible-Countdown
# Based on countdown by 4, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum using a FOR.

def flex(low, high, mult):
    if ((type(low) is int) and (type(high) is int) and (type(mult) is int) and mult):
        lowDiv = low / mult
        highDiv = high / mult
        for i in range(highDiv, lowDiv, -1):
            print("The number in the countdown is {}").format(i * mult)
    else:
        print("Invalid Parameters")

flex(2, 9, 3)
