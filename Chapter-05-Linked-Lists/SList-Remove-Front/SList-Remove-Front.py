# Given a pointer to the first node in the list, remove the head node and return the new head node

# import the list class.
import sys
from os.path import abspath, dirname

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

# function to remove the first element in the list
def removeFront(list, head):
    temp = head
    head = head.next
    list.setHeadNode(head)
    list.recalculateLength()
    return list.getHeadNode()

# print the results of the remove function
print(removeFront(newSList, newSList.getHeadNode()))
print('The modified list is {} - length is {}').format(newSList.show(), newSList.length())
