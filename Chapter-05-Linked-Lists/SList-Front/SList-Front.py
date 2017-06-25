# Return the value at the head of the list. return null if list is empty

# import the list class
import sys
from os.path import abspath, dirname

mainDir = dirname(dirname(abspath(__file__)))
sys.path.append(mainDir)

from singleList import List

# import the random module
from random import randrange

# create a new list and populate it
newSList = List()
for i in range(0, 10):
    newSList.add(randrange(100))

# function to return the first value
def front(head):
    if not head:
        return None
    else:
        return head.val

# print the list
print('The list is {}').format(newSList.show())

# print the value at the head of the list
print('The value at the head of the list is {}').format(front(newSList.getHeadNode()))
