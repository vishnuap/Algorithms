# Given a pointer to the first node in the list, remove the head node and return the new head node

# node class
class Node(object):
    def __init__(self, value):
        self.val = value
        self.next = None

# linked list class
class lList(object):
    def __init__(self):
        self.__head = None
        self.__tail = None
        self.__length = 0

    def addFront(self, val):
        newNode = Node(val)

        if not self.__head:
            self.__head = newNode
            self.__tail = newNode
        else:
            temp = self.__head
            self.__head = newNode
            newNode.next = temp

        self.__length += 1

    def removeFront(self):
        if not self.__head:
            front = "Empty List"
        else:
            front = self.__head.val
            if self.__head == self.__tail:
                self.__head = None
                self.__tail = None
            else:
                self.__head = self.__head.next

            self.__length -= 1

        return front

    def remove(self):
        if not self.__head:
            back = "Empty List"
        else:
            current = self.__head
            back = self.__tail.val
            if current == self.__tail:
                self.__head = None
                self.__tail = None
            else:
                while current.next != self.__tail:
                    current = current.next
                current.next = None
                self.__tail = current

            self.__length -= 1

        return back

    def add(self, val):
        newNode = Node(val)

        if not self.__tail:
            self.__head = newNode
            self.__tail = newNode
        else:
            self.__tail.next = newNode
            self.__tail = newNode

        self.__length += 1

    def length(self):
        return self.__length

    def show(self):
        if not self.__head:
            print "Empty List"
        else:
            result = ''
            current = self.__head
            while current:
                result = "{}{} ".format(result, current.val)
                current = current.next

            print result

# create the list
newList = lList()
newList.show()
print newList.length()

# populate the list
for i in range(1, 11):
    newList.add(i)
newList.show()
print newList.length()

myVal = 25
# add this new value to front of the list
newList.addFront(myVal)
newList.show()
print newList.length()

# Now remove the value at the front.
print newList.removeFront()
newList.show()
print newList.length()

# remove the value at the back
print newList.remove()
newList.show()
print newList.length()
