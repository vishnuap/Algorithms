# Given a pointer to the first node in the list and a value, create a new node, assign it to the list head and return a pointer to the new head node

# import the list class and node class
import sys
from os.path import dirname, abspath

mainDir = dirname(dirname(abspath(__file__)))
sys.path.append(mainDir)

from listNode import Node
from singleList import List

# import the random module
from random import randrange

# Create a new list and populate it
newSList = List()
for i in range(0, 10):
    newSList.add(randrange(100))

# function to add given value to the beginning of the list
def addFront(list, head, val):
    newNode = Node(val)
    if head:
        newNode.next = head

    list.setHeadNode(newNode)
    list.recalculateLength()
    return list.getHeadNode()

# print the existing list
print('The original list is {} - length is {}').format(newSList.show(), newSList.length())

# add the value to the front and display results
myVal = 42
print('{}').format(addFront(newSList, newSList.getHeadNode(), myVal))

# print the list after the addition
print('The new list is {} - length is {}').format(newSList.show(), newSList.length())
