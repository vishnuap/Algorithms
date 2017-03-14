# For this, we will look not only at the entire string provided but also at the substrings within it. Return the longest palindromic substring. Given "what up, daddy-o?", return "dad". Given "Yikes! my favorite racecar erupted!" return "e racecar e". Strings which are not complete meaningful words are ok.
# Do this first using strict rules.
# Do this next ignoring everything except the alphabet

# Assumption: Ignore single letters/characters

# I will be using the functions developed in the previous assignment - Palindrome - here

# Strict
def strictPalindrome(str):
    for i in range(0, len(str)/2):
        if str[i] != str[-(i+1)]:
            return False

    return True

# Not Strict
def palindrome(str):
    i = 0
    j = len(str) - 1

    while i < j:
        front = ord(str[i].lower())
        while ((front < 97) or (front > 122)) and (i < j):
            i += 1
            front = ord(str[i].lower())

        back = ord(str[j].lower())
        while ((back < 97) or (back > 122)) and (i < j):
            j -= 1
            back = ord(str[j].lower())

        if front != back:
            return False
        else:
            i += 1
            j -= 1

    return True

myStr = "what up, daddy-o?"
# myStr = "uh.. not much"
# myStr = "Yikes! my favorite racecar erupted!"
# myStr = "Hot pureE eruption!"

palinStr = ''
palinStrLen = 0

print("STRICT")
for i in range(0, len(myStr)):
    for j in range(i+2, len(myStr)+1):
        if strictPalindrome(myStr[i:j]) and len(myStr[i:j]) > palinStrLen:
            palinStrLen = len(myStr[i:j])
            palinStr = myStr[i:j]

if palinStrLen:
    print("The longest palindromic substring in '{}' is '{}'").format(myStr, palinStr)
    print("The length is {}").format(palinStrLen)
else:
    print("The string '{}' doesn't have any palindromic substrings")
print("-------------------")

print("Not STRICT")
palinStr = ''
palinStrLen = 0
for i in range(0, len(myStr)):
    for j in range(i+2, len(myStr)+1):
        # print("{} - {}").format(myStr[i:j], palindrome(myStr[i:j]))
        if palindrome(myStr[i:j]) and len(myStr[i:j]) > palinStrLen:
            palinStrLen = len(myStr[i:j])
            palinStr = myStr[i:j]

if palinStrLen:
    print("The longest palindromic substring in '{}' is '{}'").format(myStr, palinStr)
    print("The length is {}").format(palinStrLen)
else:
    print("The string '{}' doesn't have any palindromic substrings")
print("-------------------")
