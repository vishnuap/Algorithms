# Create a function that accepts a pointer to the head node and returns number of nodes in that SList

# importing the singleList class and populating it first. Then will write a stand alone function to get its length.
# I like to include the length as an attribute of the list class so that its easy to get to it. But for this assignment I will not make use of it.

# import sys to be able to change the directories in which python searches for imported modules/files
# import abspath and dirname from os.path to get the path for the common modules.
import sys
from os.path import abspath, dirname
mainDir = dirname(dirname(abspath(__file__)))
sys.path.append(mainDir)

# now that the python search directories have been updated, import the single-list class we created
from singleList import List

# create new list and populate it
newSList = List()
for i in range(0, 10):
    newSList.add(i)

# calculate the length of the list (function)
def listLength(head):
    length = 0
    while head:
        length += 1
        head = head.next
    return length

print listLength(newSList.getHeadNode())
