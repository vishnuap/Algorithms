# Chapter-1: Fundamentals
# Multiples of 3 - but not all:
# Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6

# multiples from -300 down means multiply 3 with -100 and down. -3 and -6 are 3 * -1 AND 3 * -2. So if we skip them, the multipliers are -100 down to -3.

for i in range(-100, 1):
    if ((i != -1) and (i != -2)):
        print("Multiple of 3: {}").format(i * 3)