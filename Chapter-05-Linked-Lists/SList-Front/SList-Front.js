// Return the value at the head of the list. return null if list is empty

// import the list class
var path = require('path'),
    SList= require(path.join(__dirname, '../singleList'))

// create a new list and populate it
var newSList = new SList()
for(let i = 0; i < 10; i++){
  newSList.add(Math.floor(Math.random() * 100))
}

// function to return the first value
function front(head){
  if (!head) {
    return null
  } else {
    return head.val
  }
}

// print the list
console.log(`The list is ${newSList.show()}`)

// print the value at head of the list
console.log(`The value at the head of the list is ${front(newSList.getHeadNode())}`)
