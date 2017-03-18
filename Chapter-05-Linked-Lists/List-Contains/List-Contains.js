// Write a function to check if a value is in any list node or not

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

  this.removeFront = function(){
    if (!head){
      var front = "Empty List"
    } else {
      var front = head.val
      if (head == tail){
        head = null
        tail = null
      } else {
        head = head.next
      }
      length--
    }
    return front
  }

  this.remove = function(){
    if (!head){
      var back = "Empty List"
    } else {
      var back = tail.val
      var current = head

      if (current == tail){
        head = null
        tail = null
      } else {
        while (current.next != tail){
          current = current.next
        }
        tail = current
      }
      length--
    }
    return back
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

  this.search = function(value){
    if (head){
      var current = head
      while (current){
        if (current.val == value){
          return true
        }
        current = current.next
      }
      return false
    } else {
      return false
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

var myVal = 11
// search for myVal in the list
if (newList.search(myVal)){
  console.log(`${myVal} is in the list`)
} else {
  console.log(`${myVal} is not in the list`)
}
