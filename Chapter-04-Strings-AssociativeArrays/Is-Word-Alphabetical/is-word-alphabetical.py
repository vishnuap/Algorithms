# Given a string, return whether all contained letters are in alphabetical order

# use the charCode of each alphabet to decide the alphabetical order

def alphaOrder(str):
    for i in range(1, len(str)):
        if ord(str[i].lower()) < ord(str[i-1].lower()):
            return False

    return True

myStr = 'facetiously'
# myStr = 'effort'
# myStr = 'abhors'
# myStr = 'ghosty'
# myStr = 'accent'
# myStr = 'beefily'
# myStr = 'billowy'
# myStr = 'biopsy'
# myStr = 'chintz'
# myStr = 'almost'
# myStr = 'access'
# myStr = 'bijoux'
# myStr = 'aegilops'
print("All letters in '{}' are in order - '{}'").format(myStr, alphaOrder(myStr))
