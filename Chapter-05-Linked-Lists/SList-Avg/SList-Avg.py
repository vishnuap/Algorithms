# Create a function average(head) to return average of the lists's values
# assume all entries are numeric

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

# function to get average value
def average(head):
    sum = 0
    len = 0
    if head:
        while head:
            sum += head.val
            len += 1
            head = head.next
        return sum/len
    else:
        return 'The list is empty'

# print the list
print('The list is {}').format(newSList.show())

# print the average value
print('The average of values in the list is {}').format(average(newSList.getHeadNode()))
