//Creating a stand alone lis class that can be imported into other files as required. By default, this class will have methods to add nodes, get head node / tail node, get length and display list contents

var path = require('path'),
    Node = require(path.join(__dirname, 'listNode'))

//create list class
function List(){
  let head   = null,
      tail   = null,
      length = 0

  this.add = function(data){
    var newNode = new Node(data)

    if (!head){
      head = newNode
      tail = newNode
    } else {
      tail.next = newNode
      tail      = newNode
    }

    length++
  }

  this.getHeadNode = function(){
    return head
  }

  this.setHeadNode = function(node){
    head = node
  }

  this.getTailNode = function(){
    return tail
  }

  this.setTailNode = function(node){
    tail = node
  }

  // this method HAS to be called whenever an add to end / delete from end function is defined outside of the class / object
  this.recalculateTail = function(){
    let temp = head
    while (temp.next){
      temp = temp.next
    }
    tail = temp
  }

  this.length = function(){
    return length
  }

  // this method HAS to be called whenever an add / delete function is defined outside of the class / object
  this.recalculateLength = function(){
    let tempLen = 0,
        temp = head
    while (temp){
      tempLen += 1
      temp = temp.next
    }
    length = tempLen
  }

  this.show = function(){
    let listContent = '',
        temp = head
    while (temp){
      if (listContent){ listContent += '-' }
      listContent += temp.val
      temp = temp.next
    }

    return listContent
  }
}

module.exports = List
