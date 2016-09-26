# Chapter-2: Fundamentals-2
# Messy-Math-Mashup
# Create a function "messyMath(num)" that will return the following sum:
# add all integers from 0 up to the num except for the following special cases of our "count" value:
# - If current "count" (not 'num') is evenly divisible by 3, don't add to 'sum'; skip to the next 'count'
# - Otherwise if current 'count' is evenly divisble by 7, include twice in 'sum' instead of once
# - Regardless of the above, if current 'count' is exactly 1/3 of 'num', return -1 immediately
# e.g., input-4, output-7. input-8, output-34. input-15, output- -1

# Assume the argument poassed is positive integers
def messyMath(num):
    # count is 1/3 of num means the num is divisible by 3. So check for that and return -1
    if num % 3 == 0:
        return -1

    sum = 0
    for i in range(0, num + 1):
        if i % 3 != 0:
            if i % 7 != 0:
                sum += i
            else:
                sum += 2 * i
    return sum

myNum = 20
print("When myNum = {} - messyMath({}) = {}").format(myNum, myNum, messyMath(myNum))
