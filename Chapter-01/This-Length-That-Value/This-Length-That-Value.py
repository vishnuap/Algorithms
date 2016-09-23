# Chapter-1: Fundamentals
# This-Length-That-Value
# Given two numbers, return array of length num-1 with each value num-2. Print "Jinx" if they are same

# Assuming the arguments passed are numeric and non-zero, positive
def tltv(num1, num2):
    result = []
    for i in range(0, num1):
        result.append(num2)

    if num1 == num2:
        print("Jinx!")

    return result

myNum1 = 4
myNum2 = 3
myResult = tltv(myNum1, myNum2)
print("The result is {}").format(myResult)
