# Create a function that, given an input string 'str', returns a boolean whether parentheses in 'str' are valid. Valid sets of parentnteses always open before they close. e.g., 'Y(3(p)p(3)r)s' returns "True". 'N(0(p)3' returns "False" since not all parentheses are closed. 'N(0)t )0(k' returns "False" since4 it has an extra closing parentheses

def parenValid(str):
    parenCount = 0

    for char in str:
        if char == '(':
            parenCount += 1
        elif char == ')':
            parenCount -= 1

        if parenCount < 0:
            return False

    if parenCount == 0:
        return True
    else:
        return False

parenStr = 'Y(3(p)p(3)r)s'
# parenStr = 'N(0(p)3'
# parenStr = 'N(0)t )0(k'
print("The string is '{}' and parenValid is '{}'").format(parenStr, parenValid(parenStr))
