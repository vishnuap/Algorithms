# Creating a stand alone lis class that can be imported into other files as required. By default, this class will have methods to add nodes, get head node / tail node, get length and display list contents

from listNode import Node

# create list class
class List(object):
    def __init__(self):
        self.__head   = None
        self.__tail   = None
        self.__length = 0

    def add(self, data):
        newNode = Node(data)
        if not self.__tail:
            self.__head = newNode
            self.__tail = newNode
        else:
            self.__tail.next = newNode
            self.__tail = newNode

        self.__length += 1

    def length(self):
        return self.__length

    # this method HAS to be called whenever an add / delete function is defined outside of the class / object
    def recalculateLength(self):
        tempLen = 0
        temp = self.__head
        while temp:
            tempLen += 1
            temp = temp.next
        self.__length = tempLen

    def getHeadNode(self):
        return self.__head

    def setHeadNode(self, node):
        self.__head = node

    def getTailNode(self):
        return self.__tail

    def setTailNode(self, node):
        self.__tail = node

    # this method HAS to be called whenever an add to end / delete from end function is defined outside of the class / object
    def recalculateTail(self):
        temp = self.__head
        while temp.next:
            temp = temp.next
        self.__tail = temp

    def show(self):
        listContent = ''
        temp = self.__head
        while temp:
            if listContent:
                listContent += '-'
            listContent += '{}'.format(temp.val)
            temp = temp.next
        return listContent
