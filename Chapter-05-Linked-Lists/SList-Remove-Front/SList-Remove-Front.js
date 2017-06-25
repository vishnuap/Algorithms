// Given a pointer to the first node in the list, remove the head node and return the new head node

// import the list class and node class
var path = require('path'),
    SList= require(path.join(__dirname, '../singleList'))

// Create a new list and populate it
var newSList = new SList()
for(let i = 0; i < 10; i++){
  newSList.add(Math.floor(Math.random() * 100))
}

// print the existing list
console.log(`The existing list is ${newSList.show()} - length is ${newSList.length()}`)

// function to remove the first element of the list
function removeFront(list, head){
  let temp = head
  head = head.next
  list.setHeadNode(head)
  list.recalculateLength()
  return list.getHeadNode()
}

// print the results of the remove function
console.log(removeFront(newSList, newSList.getHeadNode()))
console.log(`The modified list is ${newSList.show()} - length is ${newSList.length()}`)
