# Chapter-3: Arrays
# Array-Filter-Range
# Gievn 'arr' and values 'min', 'max', remove array values between 'min' and 'max'. Work in-place and do not use built-in functions.

# Assume the argument passed is an array, is non-empty and contains integers. Assume that min and max are integers
# Assume that the size of the array has to be modified as we remove the values
# Assume that the range limits are inclusive
def filterRange(arr, min, max):
    # If min and max values are mixed up, this will set them right
    (min, max) = (min, max) if max > min else (max, min)

    length = len(arr)
    idx = 0
    done = False

    for i in range(0, length):
        arr[i] = arr[i] if min <= arr[i] <= max else ''

    while not done:
        if idx < length:
            if arr[idx] == '':
                for i in range(idx, length - 1):
                    arr[i] = arr[i + 1]

                # Since the array length can't be manipulated in python, we will pop off the unwanted cells at the end
                arr.pop()

                length = len(arr)
            else:
                idx += 1
        else:
            done = True

myArr = [4,1,2,5,3,7,8]
myMin = 7
myMax = 3
print("The original array is {}").format(myArr)
filterRange(myArr, myMin, myMax)
print("Filter range - [{} - {}]. The filtered array is {}").format(myMin, myMax, myArr)
