# Create a function to return a boolean whether the string is a strict palindrome. Strict palindrome is where you dont ignore spaces, punctuation, capitalization etc. "a x a" and  "racecar" return true. "Dud" and "oho!" return false

def strictPalindrome(str):
    # j = len(str) - 1

    # for i in range(0, len(str)/2):
    #     if str[i] != str[j]:
    #         return False

    # Another way we could do this is using the negative subscript to read the string from the end
    for i in range(0, len(str)/2):
        if str[i] != str[-(i+1)]:
            return False

    return True

# Create a function to return a boolean whether the string is a palindrome. ignore spaces, punctuation, capitalization etc. "a x a" and  "ax a" and "axa" are all treated the same

# ignoring the unnecessary characters can be done using regex. I am choosing to do it using the char code of the alphabet: a-z => 97 - 122

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

myStr = "dUd"
myStr = "a x a"
myStr = "Oho!"
myStr = "Able was I, ere I saw Elba"
myStr = "Madam I'm Adam"
print("The string is '{}' and strictPalindrome is '{}'").format(myStr, strictPalindrome(myStr))
print("The string is '{}' and palindrome is '{}'").format(myStr, palindrome(myStr))
