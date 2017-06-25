# Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(mynode) did!

# import sys to be able to change the directories in which python searches for imported modules/files
# import abspath and dirname from os.path to get the path for the common modules.
import sys
from os.path import abspath, dirname
mainDir = dirname(dirname(abspath(__file__)))
sys.path.append(mainDir)

# now that the python search directories have been updated, import he single-list class we created
from singleList import List

# create a new list and populate it
newSList = List()
for i in range(0, 10):
    newSList.add(i)

# function to display the contents given the head node.  Building as a standalone function here. However for regular use, this is a built-in method of the list class I am using.
def displayList(head):
    listContent = ''
    if not head:
        listContent = 'The list is empty'
    else:
        while head:
            if listContent:
                listContent += '-'
            listContent += '{}'.format(head.val)
            head = head.next

    return listContent

print displayList(newSList.getHeadNode())
