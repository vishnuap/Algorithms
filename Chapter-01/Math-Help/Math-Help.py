# Chapter-1: Fundamentals
# Math-Help
# Cartman doesn't really like math class and needs help. You are given two numbers - the co-efficients M and B in the equation Y = MX + B. Build a function that returns the X-intercept

# X-intercept is where Y = 0. So
# 0 = MX + B
# => X = -B/M
# So given M and B, X = (-1 * B)/M

# Assume the arguments passed to the function are both numbers and m != 0
def math(m, b):
    return (-1.0 * b)/m

m = 3
b = 2
print("The X-intercept for Y=MX+B where M = {} and B = {} is {}").format(m, b, math(m,b))
