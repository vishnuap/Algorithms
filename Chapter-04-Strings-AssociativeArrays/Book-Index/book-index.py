# Given a sorted array of numbers, produce an index string. Consecutive numbers should form ranges seperated by a hyphen. for [1, 13, 14, 15, 37, 38, 70], return "1, 13-15, 37-38, 70".

# assuming non-zero entries in the array

def index(arr):
    result = ''
    ll = arr[0]
    ul = 0

    for i in range(1, len(arr)):
        if arr[i] != arr[i-1] + 1:
            if ul:
                result += ((", {}-{}").format(ll, ul) if result else ("{}-{}").format(ll, ul))
            else:
                result += ((", {}").format(ll) if result else ("{}").format(ll))

            ul = 0
            ll = arr[i]
        else:
            ul = arr[i]

    if ul:
        result += ((", {}-{}").format(ll, ul) if result else ("{}-{}").format(ll, ul))
    else:
        result += ((", {}").format(ll) if result else ("{}").format(ll))

    return result

myArr = [1, 13, 15, 37, 70]
myArr = [1, 13, 14, 15, 37, 38, 70]
myArr = [1, 2, 3, 4, 5, 13, 14, 15, 37, 38, 70, 71]
print(index(myArr))
