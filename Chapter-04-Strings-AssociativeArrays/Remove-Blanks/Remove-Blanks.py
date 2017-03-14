# Create a function that given a string, returns all of the string's contents but without blanks. If given the string "Pl ayTh atF unkyMu sic", return "PlayThatFunkyMusic"

# Since strings are immutable, we cannot do this in-place. Hence the function will return a new string.
# 1. One way of doing this is using regular for loop and going through the string validating each character. 
# 2. Another way to do it is using the split string function and the reduce function

def removeBlank1(str):
    result = ''

    for i in range(len(str)):
        if (str[i] != ' '):
            result += str[i]

    return result

def removeBlank2(str):
    temp = str.split()
    result = reduce(lambda x,y: x+y, temp)

    return result

myStr = "  P l  ayTh atF unkyMu sic"
print("Original string is - '{}'").format(myStr)
print("Changed string is - '{}'").format(removeBlank1(myStr))
print("Changed string is - '{}'").format(removeBlank2(myStr))