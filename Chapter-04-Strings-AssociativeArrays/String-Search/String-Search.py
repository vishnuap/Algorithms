# Write your own function to recreate the string search (str.find()) function of python. It returns the starting position (index) of the substring being searched. If the substring is not found, it returns -1.

# when an empty string is used as the substring, it returns 0 (first position)
# when no substring is passed, it fails
# it also takes in only a string as parameter. if non-string parm is passed, it fails

def search(str, sub=None):
    if type(sub).__name__ == 'NoneType':
        return "search() takes exactly 2 arguments (1 given)"

    if type(sub).__name__ != 'str':
        return "expected a string or other character buffer object"

    result = -1
    l = len(sub)

    for pos in range(0, len(str)):
        if str[pos:pos+l] == sub:
            result = pos
            break

    return result

myStr = 'stringstreet'
myStr = 'string1street'
print search(myStr)
print search(myStr,'')
print search(myStr,' ')
print search(myStr,'st')
print search(myStr,'gs')
print search(myStr,'e')
print search(myStr,'i')
print search(myStr,1)
print search(myStr,'1')
