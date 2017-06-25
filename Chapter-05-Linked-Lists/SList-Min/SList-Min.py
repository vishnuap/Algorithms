# Create a function min(head) to return a lists's smallest value

# imort the list class
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

# function to get min value
def min(head):
    minimum = 0
    if head:
        minimum = head.val
        head = head.next
        while head:
            if head.val < minimum:
                minimum = head.val
            head = head.next
    else:
        minimum = 'The list is empty'

    return minimum

# print the list
print('The list is {}').format(newSList.show())

# print the min value
print('The minimum value in the list is {}').format(min(newSList.getHeadNode()))
