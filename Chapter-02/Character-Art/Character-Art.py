# Chapter-2: Fundamentals-2
# Character-Art
# Refer "Star-Art"
# Derive from the above and draw any character passed (not just 'star')

# Assume the argument passed is a positive integer <= 75
# Assume the character argument is a single character
def drawLeftChars(num, char):
    print("{}").format(char * num)

def drawRightChars(num, char):
    str1 = "-" * (75 - num)
    str2 = char * num
    print("{}").format(str1 + str2)

def drawCenterChars(num, char):
    str1 = "-" * ((75 - num)/2)
    str2 = char * num
    str3 = "-" * (75 - ((75 - num)/2 + num))
    print("{}").format(str1+str2+str3)

drawLeftChars(35, '@')
drawRightChars(40, '#')
drawCenterChars(35, '~')
