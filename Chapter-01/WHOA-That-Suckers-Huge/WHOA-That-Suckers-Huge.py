# Chapter-1: Fundamentals
# WHOA-That-Suckers-Huge:
# Add odd integers from -30000 to 30000 and console log the final sum. Is there a shortcut?

# In this particular case, since the negative and positive limits are symmetrical, the sum will be zero.
#
# The usual way would be to use a for loop from -29999 till 29999 and incrementing each step by 2.
# import time

def loop(begin, end):
    oddSum = 0
    if not begin % 2:
        begin = begin + 1

    for i in range(begin, end + 1, 2):
        oddSum += i

    return oddSum

start = -30000
finish = 30000
print("The sum of all odd numbers between {} and {} is {}").format(start, finish, loop(start, finish))

# But the loop will run 30000 times. So instead we can use sequence formulae to sum them up.
#
# e.g., sum all odd numbers between 0 and 10:
# odd numbers are 1, 3, 5, 7, 9 => 1+0, 2+1, 3+2, 4+3, 5+4 (each odd number can be expressed as the sum of two consecutive integers). So their sum will be
# 1+3+5+7+9 => 1+0+2+1+3+2+4+3+5+4 => (1+2+3+4+5) + (0+1+2+3+4) => sum of all numbers from 1 to 5 + sum of all numbers from 1 to 4 => sum of 'n' integers + sum of 'n-1' integers => n*(n+1)/2 + (n-1)*n/2 => n^2
# For sum of odd numbers from 0 to 10, n=5. Hence the sum = 25
#
# Similarly, from 0 to 30000, the last odd number is 29999 = 15000+14999. (n=15000). So the sum of odd numbers from 0 to 30000 will be 15000^2 = 225000000
# Note that 15000 = 30000/2. Hence the sum of odd numbers from 0 to x = (x/2)^2 when x is even; (1 + x/2)^2 when x is odd

# The FOR loop way
def forLoop(limit):
    forSum = 0
    for i in range(1, limit+1, 2):
        forSum += i
    return forSum

# The mathematical way
def formula(limit):
    if limit % 2:
        mathSum = ((limit + 1) / 2) ** 2
    else:
        mathSum = (limit / 2) ** 2
    return mathSum

upperLimit = 2001
print("The sum of all odd numbers between 0 and {}").format(upperLimit)
print("Using a FOR loop - {}").format(forLoop(upperLimit))
print("Using a Formula  - {}").format(formula(upperLimit))

# Now if the starting point is a non-zero integer,
# 1. If start is a positive integer:
# e.g., find sum of all odd numbers between 34 and 100. We know that for 0 to 100, it is (100/2)^2. Similarly, for 0 to 34 it is (34/2)^2. So for 34 to 100 it will be (100/2)^2 - (34/2)^2
# 2. If start is a negative integer:
# e.g., find sum of all odd numbers between -34 and 75. Here we know that sum from -34 to 34 will be zero. So we need to calculate only from 34 to 75. Which will be (1 + 75/2)^2 - (34/2)^2

# Using FOR loop:
def forLoop2(ll, ul):
    if ll == ul:
        return "Nothing to sum"
    elif ll > ul:
        ll, ul = ul, ll

    forSum = 0
    if not ll % 2:
        ll = ll + 1

    for i in range(ll, ul + 1, 2):
        forSum += i

    return forSum

# Using formula:
def formula2(ll, ul):
    # If both inputs are same, nothing to do
    if ll == ul:
        return "Nothing to sum"
    # If the first parm is greater than the second, interchange the parms
    elif ll > ul:
        ll, ul = ul, ll

    # If the lower limit is negative and upper limit is positive
    if ll < 0 and ul > 0:
        if (ll * -1) < ul:
            ll = (ll * -1) + 1
        elif (ll * -1) > ul:
            ul = (ul * -1) - 1
        else:
            return 0

    if ll % 2:
        mathLLSum = ((ll - 1) / 2) ** 2
    else:
        mathLLSum = (ll / 2) ** 2

    if ul % 2:
        mathULSum = ((ul + 1) / 2) ** 2
    else:
        mathULSum = (ul / 2) ** 2

    return mathULSum - mathLLSum

lowerlimit = -30001
upperLimit = 20001
print("The sum of all odd numbers between {} and {}").format(lowerlimit, upperLimit)
# start_time = time.clock()
print("Using a FOR loop - {}").format(forLoop2(lowerlimit, upperLimit))
# print("Time taken by FOR loop is {}").format(time.clock() - start_time)

# start_time = time.clock()
print("Using a Formula  - {}").format(formula2(lowerlimit, upperLimit))
# print("Time taken by Formula is {}").format(time.clock() - start_time)
