# Write your own function to recreate the string concat function of python. Given str1, str2, str3 ... strn return a single concatenated string 'str1str2str3...strn'

# python doesn't have a specific string.concat() kind of function. So we are just writing one now!! Am using the same array reduce approach here also

def concat(str1, arrStr):
    # str1 is the main string
    # arrStr is the array of additional strings to be concatenated
    return reduce((lambda main, secondary: main + secondary), arrStr, str1)

def concatWithSep(str1, arrStr, sep):
    # sep is the seperator you want between strings being concatenated
    return reduce((lambda main, sec: main + sep + sec), arrStr, str1)

myStr = 'string1'
myArr = ['string2', 'string3', 'string4', 'string5']
mySep = ' '
print(concat(myStr, myArr))
print(concatWithSep(myStr, myArr, mySep))
