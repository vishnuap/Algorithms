// Create a function min(head) to return a lists's smallest value

// import the list class
var path = require('path'),
    SList= require(path.join(__dirname, '../singleList'))

// create a new list and populate it with random numbers
var newSList = new SList()
for (let i = 0; i < 10; i++){
  newSList.add(Math.floor(Math.random() * 100))
}

// function to get min value
function min(head){
  let minimum = 0
  if (head){
    minimum = head.val
    head    = head.next
    while (head){
      if (head.val < minimum){
        minimum = head.val
      }
      head = head.next
    }
  } else {
    minimum = `The list is empty`
  }
  return minimum
}

// print the list
console.log(`The list is ${newSList.show()}`)

// print the max value
console.log(`The minimum value in the list is ${min(newSList.getHeadNode())}`)
