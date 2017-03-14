# Given a string array and a value, remove any strings shorter than value from the array

def removeShortString(stringArr, length):
    i = 0
    while (i < len(stringArr)):
        if length > len(stringArr[i]):
            stringArr.remove(stringArr[i])
        else:
            i += 1

myStrArr = ['this', 'is', 'a', 'string', 'array']
length = 3

print("The string array is {}").format(myStrArr)
print("The given length is {}").format(length)
removeShortString(myStrArr, length)
print("The string array after removing the shorter strings is {}").format(myStrArr)
