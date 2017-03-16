# Write your own function to recreate the string.split() function of python. python split works a little differently compared to javascript.

# Splits a string into an array of substrings. It takes in a seperator based on which to split the string. If the seperator is not specified, it splits the words present in the string (this behaviour is different than in javascript). It accepts a second parm which limits the number of splits (this way second parm is handled is different from js). It doesn't handle an empty string as seperator (different from js)

# 'stringstreet'.split() returns ['stringstreet']; 'string street'.split() returns ['string', 'street']; 'stringstreet'.split('t') returns ['s', 'rings', 'ree', '']; 'stringstreet'.split('t', 2) returns ['s', 'rings', 'reet']; 'stringstreet'.split('t', 1) returns ['s', 'ringstreet']



def split(str, sep = False, limit = False):
    # handle empty seperator
    if (type(sep).__name__ == 'str') and (not sep):
        return "seperator cannot be empty string"

    # handle no seperator
    if (type(sep).__name__ == 'bool'):
        result = []
        wordSep = False
        i = prev = 0
        while (not wordSep):
            if (str[i:i+1] != ' ') and (str[i:i+1] != '\n') and (str[i:i+1] != '\t') and (str[i:i+1] != '\r'):
                i += 1
            else:
                if prev != i:
                    result.append(str[prev:i])
                i += 1
                prev = i

            if i >= len(str):
                if prev != i:
                    result.append(str[prev:])
                wordSep = True

        return result

    # handle wrong value as seperator
    if (type(sep).__name__ != 'str'):
        return "seperator has to be a string or character"

    # handle limit = 0
    if (type(limit).__name__ == 'int') and limit == 0:
        return [str]

    result = []
    done = False
    i = prev = 0

    while (not done):
        if str[i:i+len(sep)] == sep:
            result.append(str[prev:i])
            i += len(sep)
            prev = i
        else:
            i += 1

        if (i >= len(str)) or (len(result) == limit):
            result.append(str[prev:])
            done = True

    return result

myStr = 'stringstreet'
myStr = 'stringstreetest'
myStr = 'string      street est'
myStr = 'string      street   '
myStr = '   my string      street   '
print(split(myStr, 'st'))
print(split(myStr, 's'))
print(split(myStr, 's', 0))
print(split(myStr, 's', 1))
print(split(myStr, 'xyz', 1))
print(split(myStr, 's', 2))
print(split(myStr, 's', 3))
print(split(myStr, 'st', 2))
print(split(myStr))
print(split(myStr, ' ', 3))
