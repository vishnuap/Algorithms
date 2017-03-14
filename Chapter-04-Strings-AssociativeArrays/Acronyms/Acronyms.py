# Create a function that, given a string, returns the string's acronym (first letters only, capitalized). Given " there's no free lunch - gotta pay yer way ", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN"

# use the split command here

def acronym(string):
    temp = string.split()
    result = ''

    for i in temp:
        if (i):
            result += i[0].upper()

    return result

myStr = " there's no free lunch - gotta pay yer way "
myStr2 = "Live from New York, it's Saturday Night!"
print("The original string is {}").format(myStr2)
print("The acronym is {}").format(acronym(myStr2))
    