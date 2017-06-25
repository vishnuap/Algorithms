# Create a function that accepts a head node pointer and reurns the last value in the list

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

# function to return last value in the list. This is a standalone function which traverses through the list to get the last value. In my list class, I have a getTailNode method which points to the last node and can be used to access the last node value. However, I am not using it for this exercise
def back(head):
    result = ''
    if not head:
        result = 'The list is empty'
    else:
        while head.next:
            head = head.next
        result = head.val
    return result

# print the list
print('The list is {}').format(newSList.show())

# print the last value in the list
print('The last value in the list is {}').format(back(newSList.getHeadNode()))
