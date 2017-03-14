# Create a function that accepts an input string, removes leading and trailing white spaces (at beginning and ending only), capitalizes the first letter of every word and returns the string. If original string contains the word Mike anywhere, immediately return "stunned silence" instead. Given "   tomorrow never dies  ", return "Tomorrow Never Dies". Given " Watch Mike and Mike ", return "stunned silence"

# used built-in functions/methods
# lower() - converts the full string into lower case
# index(str2) - provides the starting position of str2 inside str1. If not found, throws an exception
# strip() - strips the leading and trailing whitespaces
# title() - converts the string into titlecase i.e., capitalize first letter in each word of the string
def dropIt(str):
    try:
        i = str.lower().index('mike')
    except:
        return str.strip().title()
    else:
        return "stunned silence"

myStr = "   tomorrow never dies   "
# myStr = "mike and Mike"
print(dropIt(myStr))
