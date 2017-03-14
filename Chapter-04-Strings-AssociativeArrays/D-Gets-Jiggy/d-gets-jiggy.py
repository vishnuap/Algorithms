# Write a function that accepts a string parameter which is someone's name. Return the following: Strip the first letter of the string, Capitalize the first letter of the remaining string and return "[new word with Capitalized first lettet] to the [first letter]". e.g., Given Dylan, return "Ylan to the D!"

def jiggy(str):
    return "{}{} to the {}!".format(str[1].upper(),str[2:].lower(), str[0].upper())

myStr = 'dEvOn'
print("The name is '{}'. '{}'").format(myStr, jiggy(myStr))
