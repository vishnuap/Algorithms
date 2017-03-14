# Given a sequence of parentheses, braces and brackets, determine whether it is valid. e.g., "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]" => true; "D(i{a}l[ t]o)n{e" => false; "A(1)s[O(n]0{t) 0}k" => false

def braceValid(str):
    matchOpenBrace = {
    ')': '(', '}': '{', ']': '['
    }

    openBraces = ['[', '{', '(']
    closeBraces = [']', '}', ')']

    lastOpenBrace = []

    for char in str:
        if char in openBraces:
            lastOpenBrace.append(char)
        elif char in closeBraces:
            if matchOpenBrace[char] != lastOpenBrace.pop():
                return False

    if lastOpenBrace:
        return False
    else:
        return True

braceStr = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]"
# braceStr = "D(i{a}l[ t]o)n{e"
# braceStr = "A(1)s[O(n]0{t) 0}k"
print("The string is '{}' and braceValid is '{}'").format(braceStr, braceValid(braceStr))
