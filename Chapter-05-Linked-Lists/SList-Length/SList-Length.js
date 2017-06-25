// Create a function that accepts a pointer to the head node and returns number of nodes in that SList

// Using the singleList.js module to create a new list
// I like to include the length as an attribute of the list class so that its easy to get to it. But for this assignment I will not make use of it.

var path = require('path'),
    SList= require(path.join(__dirname, '../singleList'))

// create a new list and populate it
var newSList = new SList()
for (let i = 0; i < 10; i++){
  newSList.add(i)
}

// calculate the length of the list (function)
function listLength(head){
  var length = 0
  while (head){
    length++
    head = head.next
  }
  return length
}

console.log(listLength(newSList.getHeadNode()))
