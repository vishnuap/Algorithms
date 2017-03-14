# Create a function that, given a string, returns the integer made from the strin's digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function would return 1357924680

def getNumber(string):
    result = ''

    for char in string:
        try:
            x = int(char)
            result += char
        except:
            pass

    return int(result)

myStr = "0s1a3y5w7h9a2t4?6!8?0"
print("Original string is {}").format(myStr)
print("The number in the string is {}").format(getNumber(myStr))