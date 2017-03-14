# write a function that, given an array of strings, returns the longest common suffix (word-end) among all of them. given ["determination", "nation", "communication", "promotion"], return "tion". Given ["nice", "ice", "baby"], return "" (empty string)


# assuming the validations are not required for the array being passed
# It is not empty and contains strings

def suffix(arr):
    # the lambda function returns the same type as the input. Thats why we return the smallest string in the array and then find its length seperately
    smallestStr = reduce(lambda a, b: a if len(a) < len(b) else b, arr)
    minLen = len(smallestStr)

    suffix = ''

    if not minLen:
        return suffix

    j = 1
    while j <= minLen:
        for i in range(0, len(arr)-1):
            if arr[i][len(arr[i])-j:] != arr[i+1][len(arr[i+1])-j:]:
                return suffix

        suffix = arr[i][len(arr[i])-j:]
        j+=1

    return suffix

myArr = ["determination", "nation", "communication", "promotion"]
# myArr = ["determination", "nation", "damnation", "carnation", "crenation"]
# myArr = ["determination", "ruination", "contamination", "procrastination"]
# myArr = ["dog", "cat", "cow", "pig"]
print("The array of strings is {}").format(myArr)
print("The longest common suffix is '{}'").format(suffix(myArr) if suffix(myArr) else 'An empty string')
