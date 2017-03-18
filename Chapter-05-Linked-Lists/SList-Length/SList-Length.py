# Create a function that accepts a pointer to the head node and returns number of nodes in that SList

# creating nodes and SList and populating it first. Then will write a stand alone function to get its length.
# I like to include the length as an attribute of the list class so that its easy to get to it. But for this assignment I will not make use of it.

# node class
class Node(object):
    self.val = value
    self.next = None

# list class
class SList(object):
    self.__head = None
    self.__tail = None
    self.__length = 0

  this.add = function(value){
    var newNode = new Node(value)

    if (!head){
      head = newNode
      tail = newNode
    } else {
      tail.next = newNode
      tail = newNode
    }

    length++
  }

  this.show = function(){
    if (!head){
      console.log("Empty List")
    } else {
      var result = ''
      var current = head

      while (current){
        if (result){
          result += `->${current.val}`
        } else {
          result = `${current.val}`
        }
        current = current.next
      }
      console.log(result)
    }
  }

  this.length = function(){
    return length
  }

  this.getHeadNode = function(){
    return head
  }
}

// create a new list and populate it
var newSList = new SList()
for (let i = 0; i < 10; i++){
  newSList.add(i)
}

newSList.show()
console.log(newSList.length())

// stand alone function to find length of list, given the head node
function findLength(head){
  var length = 0
  if (head){
    var current = head
    while (current){
      length++
      current = current.next
    }
  }

  return length
}

console.log(findLength(newSList.getHeadNode()))
