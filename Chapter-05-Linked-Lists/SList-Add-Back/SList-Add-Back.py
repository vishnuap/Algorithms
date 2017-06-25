# Create a function which inserts a given value at the end of the list
# This is the same as the built-in 'add' method in the list class we are using but for this exercise is will create a standalone function

# import the list class as well as the node class
import sys
from os.path import dirname, abspath

mainDir = dirname(dirname(abspath(__file__)))
sys.path.append(mainDir)

from listNode import Node
from singleList import List

# import the random module
from random import randrange

# create a new list and populate it. Here we use the built-in 'add' method
newSList = List()
for i in range(0, 10):
    newSList.add(randrange(100))

# create function to add a given value to end of list.
# I will create a standalone function which accepts the head node and value and add it to end of the list. However, there are other ways of doing this. Use the built-in 'add' method or use the 'getTailNode' method to find the last existing node and add the new value there. In case of empty list, have to use the setHeadNode method of the class to set the head node to the new value. Otherwise, the head node cannot be set.
# The use of setHeadNode is not required when we use the built-in 'add' method

def addBack(list, head, val):
    newNode = Node(val)
    if not head:
        list.setHeadNode(newNode)
    else:
        while head.next:
            head = head.next
        head.next = newNode
    list.recalculateTail()
    list.recalculateLength()

# print original list
print('The list is {} - length is {}').format(newSList.show(), newSList.length())

# add a new value to the back
myVal = 42
addBack(newSList, newSList.getHeadNode(), myVal)

# print the new list
print('The new list is {} - length is {}').format(newSList.show(), newSList.length())
