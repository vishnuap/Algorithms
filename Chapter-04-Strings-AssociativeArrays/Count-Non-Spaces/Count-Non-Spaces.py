# Accept a string and return the number of non-space characters found in the string. Given "Honey pie, you are driving me crazy" returns 29 (not 35)

# Use split and reduce

def noSpaceLength(string):
    temp = string.split()
    result = reduce(lambda x,y: x+y, temp)

    return len(result)

myStr = "Honey pie, you are driving me crazy"
print("The original string is {}").format(myStr)
print("The number of non-space characters in it are {}").format(noSpaceLength(myStr))
