// Given a pointer to the first node in the list and a value, create a new node, assign it to the list head and return a pointer to the new head node

// node class
function Node(value){
  this.val = value
  this.next = null
}

// linked list class
function lList(){
  var head = null
  var tail = null
  var length = 0

  this.addFront = function(val){
    var newNode = new Node(val)
    if (!head){
      head = newNode
      tail = newNode
    } else {
      var temp = head
      head = newNode
      newNode.next = temp
    }
    length++
  }

  this.add = function(val){
    var newNode = new Node(val)
    if (!tail){
      head = newNode
    } else {
      tail.next = newNode
    }
    tail = newNode
    length++
  }

  this.length = function(){
    return length
  }

  this.show = function(){
    if (!head){
      console.log("Empty List")
    } else {
      var result = ''
      var current = head
      while (current){
        result = result + current.val + ' '
        current = current.next
      }
      console.log(result)
    }
  }
}

// create a list first
var newList = new lList()
newList.show()
console.log(newList.length())

// populate the list
for (let i = 1; i < 11; i++){
  newList.add(i)
}
newList.show()
console.log(newList.length())

var myVal = 25
// add the new value to the front of the list
newList.addFront(myVal)
newList.show()
console.log(newList.length())
