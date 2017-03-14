# Chapter-3: Arrays
# Credit-Card-Validation
# The Luhn formula is sometimes used to validate credit card numbers. Create a function 'isCreditCardValid(digitArr)' that accepts an array of digits on the card (13 to 19 digits depending on the card) and returns a boolen whether the card digits satisfy the following:
# 1. Set aside the last digit and do not include it in the calculations till the last step (step - 5)
# 2. Starting from the back, multiply the digits in odd positions (last, third to last and so on) by 2
# 3. If any results are larger than 9, subtract 9 from them
# 4. Add all the numbers (not just the odds) together
# 5. Now add the last digit back in
# The above sum must be a multiple of 10
# e.g., given [5,2,2,8,2], after step-1: [5,2,2,8]; after step-2: [5,4,2,16]; after step-3: [5,4,2,7]; after step-4: 18; after step-5: 20; so return 'true'.

# Assume the argument passed in an array of positive integers where each value is less than 10.
def isCreditCardValid(arr):
    sum = 0
    multiply = True

    for i in range(len(arr) - 2, -1, -1):
        if multiply:
            sum += arr[i] * 2 if arr[i] * 2 <= 9 else arr[i]*2 - 9
            multiply = not multiply
        else:
            sum += arr[i]
            multiply = not multiply

    sum += arr[len(arr) - 1]

    return True if sum % 10 == 0 else False

myArr = [5,2,2,8,2]
print("The card array is {}; isCreditCardValid = {}").format(myArr, isCreditCardValid(myArr))
