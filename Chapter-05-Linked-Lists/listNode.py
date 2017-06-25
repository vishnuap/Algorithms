# Creating a stand alone node class that can be imported into other files as required.

# Define the node class (inherits from the default object class)
class Node(object):
    def __init__(self, data):
        self.val  = data
        self.next = None
