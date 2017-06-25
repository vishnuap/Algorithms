// Given a pointer to the first node in the list and a value, create a new node, assign it to the list head and return a pointer to the new head node

// import the list class and the node class
var path = require('path'),
    Node = require(path.join(__dirname, '../listNode')),
    SList= require(path.join(__dirname, '../singleList'))

// create a new list and populate it
var newSList = new SList()
for(let i = 0; i < 10; i++){
  newSList.add(Math.floor(Math.random() * 100))
}

// function to add value at front
function addFront(list, head, val){
  let newNode = new Node(val)
  if (head){
    newNode.next = head
  }
  list.setHeadNode(newNode)
  list.recalculateLength()
  return list.getHeadNode()
}

// print the original list
console.log(`The original list is ${newSList.show()} - length is ${newSList.length()}`)

// add the value to the front and display results
var myVal = 42
console.log(addFront(newSList, newSList.getHeadNode(), myVal))

// print list after adding
console.log(`The new list is ${newSList.show()} - length is ${newSList.length()}`)
