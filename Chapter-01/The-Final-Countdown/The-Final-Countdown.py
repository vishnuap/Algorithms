# Chapter-1: Fundamentals
# The-Final-Countdown
# Based on "Flexible Countdown". Given 4 parameters - param1, param2, param3, param4 - print multiples of param1, starting at param2 and extending till param3. If a multiple is equal to param4, exclude it from the result. Do using a WHILE loop

def final(mult, low, high, excl):
    if (type(mult) is int and type(low) is int and type(high) is int and type(excl) is int and mult):
        lowDiv = (low / mult) + 1
        highDiv = (high / mult)
        counter = lowDiv

        while counter <= highDiv:
            if (counter * mult != excl):
                print("The countdown number is {}").format(mult * counter)
            counter += 1
    else:
        print("Invalid Parameters")

final(3, 5, 17, 9)
