# Chapter-2: Fundamentals-2
# Sum-to-One-Digit
# Kaitlin sees beauty in numbers but also believes that less is more. Implement sumToOne(num) that sums a given integer's digits repeatedly until the sum is only one digit. Return that one-digit result. e.g., sumToOne(928) returns 1 => 9+2+8 = 19 => 1+9 = 10 => 1+0 = 1

# Assume the argument is a non-zero positive integer
# Approach-1: loop and modulo
def sumToOne(num):
    sum = 0
    done = False

    while not done:
        while num > 0:
            sum += num % 10
            num = num / 10

        if sum % 10 == sum:
            done = True
        else:
            num = sum
            sum = 0

    return sum

# Approach-2: String and Number conversion
def sumToOne2(num):
    sum = 0
    done = False

    while not done:
        strNum = str(num)
        for i in range(0, len(strNum)):
            sum += int(strNum[i])

        if len(str(sum)) > 1:
            num = sum
            sum = 0
        else:
            done = True

    return sum

# Approach-3: Recursion
def sumToOne3(num):
    if num % 10 == num:
        return num
    else:
        sum = 0
        while num > 0:
            sum += num % 10
            num = num / 10

        return sumToOne3(sum)

myNum = 128
print("The original number is {}").format(myNum)
print("The sumToOne({}) = {}").format(myNum, sumToOne(myNum))
print("The sumToOne2({}) = {}").format(myNum, sumToOne2(myNum))
print("The sumToOne3({}) = {}").format(myNum, sumToOne3(myNum))
