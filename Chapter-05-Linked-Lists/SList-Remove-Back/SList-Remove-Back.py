# Create a function which accepts the head node of a list and removes the last element in the list

# import the list class
import sys
from os.path import dirname, abspath

mainDir = dirname(dirname(abspath(__file__)))
sys.path.append(mainDir)

from singleList import List

# import random module
from random import randrange

# create a new list and populate it
newSList = List()
for i in range(0, 10):
    newSList.add(randrange(100))

# print the existing list
print('The existing list is {} - length is {}').format(newSList.show(), newSList.length())

# function to remove the last element in the list
def removeBack(list, head):
    if head:
        if not head.next:
            list.setHeadNode(None)
            list.setTailNode(None)
        else:
            tempHead = head.next
            trailer  = head
            while tempHead.next:
                trailer = tempHead
                tempHead= tempHead.next
            trailer.next = None
            list.setTailNode(trailer)
        list.recalculateLength()

# print the result of running the remove function
removeBack(newSList, newSList.getHeadNode())
print('The modified list is {} - length is {}').format(newSList.show(), newSList.length())
