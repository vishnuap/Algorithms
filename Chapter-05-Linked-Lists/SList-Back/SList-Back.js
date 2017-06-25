// Create a function that accepts a head node pointer and reurns the last value in the list

// import the list class
var path = require('path'),
    SList= require(path.join(__dirname, '../singleList'))

// create a new list and populate it
var newSList = new SList()
for(let i = 0; i < 10; i++){
  newSList.add(Math.floor(Math.random() * 100))
}

// function to return last value in the list. This is a standalone function which traverses through the list to get the last value. In my list class, I have a getTailNode method which points to the last node and can be used to access the last node value. However, I am not using it for this exercise
function back(head){
  let result = ''
  if (!head){
    result = 'The list is empty'
  } else {
    while(head.next){
      head = head.next
    }
    result = head.val
  }
  return result
}

// print the list
console.log(`The list is ${newSList.show()}`)

// print the last value in the list
console.log(`The last value in the list is ${back(newSList.getHeadNode())}`)
