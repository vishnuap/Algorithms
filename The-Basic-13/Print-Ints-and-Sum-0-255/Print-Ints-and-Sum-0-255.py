# The Basic 13
# Print-Ints-and-Sum-0-255
# Print integers from 0 to 255. With each integer print the sum so far

def printIntsSum():
    sum = 0
    for i in range(0, 256):
        sum += i
        print("{} - Sum so far = {}").format(i, sum)

printIntsSum()
