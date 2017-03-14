# Implement reverseString(), given stringm returns the string with the characters in reverse order. Given "creature" return "erutaerc". Do not use built-in functions

def reverseString(string):
    result = ''

    for i in range(1, len(string)+1):
        result += string[-i]

    return result

myStr = "creature this big"
print("The original string is '{}'").format(myStr)
print("The reversed string is '{}'").format(reverseString(myStr))
