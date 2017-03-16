# Write your own function to recreate the string.strip() function of python. Given str = "      I am Me     ", remove whitespace from both sides and return "I am Me".

# Using the ord(char) values (9 = tab, 10 = newline, 13 = carriage return, 32 = space) to do this. First from the front, then from the back. Using the "slice" notation to do the substrings

# instead of the slice, we can do FOR loops to copy character by character into the result variable

# assumption: string is not empty

def trim(str):
    i = 0
    # front
    while ord(str[i]) == 9 or ord(str[i]) == 10 or ord(str[i]) == 13 or ord(str[i]) == 32:
        i += 1

    temp = str[i:]
    i = len(temp) - 1

    while ord(temp[i]) == 9 or ord(temp[i]) == 10 or ord(temp[i]) == 13 or ord(temp[i]) == 32:
        i -= 1

    return temp[0:i+1]

myStr = "      i am Me         "
myStr = "     \n  i am Me     \t    "
print('"{}"').format(myStr)
print('"{}"').format(trim(myStr))
