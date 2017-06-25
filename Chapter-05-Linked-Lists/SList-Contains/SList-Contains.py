# Given the 'head' pointer to list and a value, return whether the vaue is found in the list or not

# import the list class
import sys
from os.path import abspath, dirname

mainDir = dirname(dirname(abspath(__file__)))
sys.path.append(mainDir)

from singleList import List

# import the random module
from random import randrange

# create a new list and populate it with random numbers
newSList = List()
for i in range(0, 10):
    newSList.add(randrange(100))

# create a function to accept head pointer and a value and check for occurance in the list
def listHas(head, val):
    result = False
    if not head:
        result = 'The list is empty'
    else:
        while head:
            if head.val == val:
                result = True
                break
            head = head.next
    return result

# print the list
print('The list is {}').format(newSList.show())

# print the result
myVal = 45
print('{} is in the given list - {}').format(myVal, listHas(newSList.getHeadNode(), myVal))
