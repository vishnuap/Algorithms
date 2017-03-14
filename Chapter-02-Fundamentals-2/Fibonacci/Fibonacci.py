# Chapter-2: Fundamentals-2
# Fibonacci
# Create a function to generate fibonacci numbers. In this sequence, each number is the sum of the previous two starting with 0 and 1. The function should accept one argument, an index into the sequence (where 0 corresponds to the initial value 0, 4 corresponds to the value four later, which is equal to 2). e.g., fibonacci(0) = 0; fibonacci(1) = 1; fibonacci(2) = 1;

# Assume argument is a positive integer
# Approach-1: Loop
def fibonacci(num):
    seq = []
    for i in range(0, num+1):
        if (i == 0) or (i == 1):
            seq.append(i)
        else:
            seq.append(seq[i-1] + seq[i-2])
    print(seq[len(seq) - 1])

# Approach-2: Recursion
def fibonacci2(num):
    if num == 0:
        return 0
    elif num == 1:
        return 1
    else:
        return fibonacci2(num - 1) + fibonacci2(num - 2)

myNum = 8
fibonacci(myNum)
print(fibonacci2(myNum))
