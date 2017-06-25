# Create a function max(head) to return a lists's largest value

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

# function to get max value
def max(head):
    maximum = 0
    if head:
        maximum = head.val
        head = head.next
        while head:
            if head.val > maximum:
                maximum = head.val
            head = head.next
    else:
        maximum = 'The list is empty'

    return maximum

# print the list
print('The list is {}').format(newSList.show())

# print the max value
print('The maximum value in the list is {}').format(max(newSList.getHeadNode()))
