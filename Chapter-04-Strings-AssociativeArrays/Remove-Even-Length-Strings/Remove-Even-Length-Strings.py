# Build a standalone function to remove strings of even lengths from a given array. Given ['Nope!', 'Its', 'kris', 'strating', 'with', 'K!', '(instead', 'of', 'Chris', 'with', 'C)', '.'], change it to ['Nope!', 'Its', 'Chris']

def removeEven(strArr):
    i = 0
    while i < len(strArr):
        if (len(strArr[i]) % 2 == 0):
            strArr.remove(strArr[i])
        else:
            i += 1

myStrArr = ['Nope!', 'Its', 'kris', 'starting', 'with', 'K!', '(instead', 'of', 'Chris', 'with', 'C)', '.']
print("The original array is {}").format(myStrArr)
removeEven(myStrArr)
print("The changed array is {}").format(myStrArr)
