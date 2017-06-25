// Create a function max(head) to return a lists's largest value

// import the list class
var path = require('path'),
    SList= require(path.join(__dirname, '../singleList'))

// create a new list and populate it with random numbers
var newSList = new SList()
for (let i = 0; i < 10; i++){
  newSList.add(Math.floor(Math.random() * 100))
}

// function to get max value
function max(head){
  let maximum = 0
  if (head){
    maximum = head.val
    head    = head.next
    while (head){
      if (head.val > maximum){
        maximum = head.val
      }
      head = head.next
    }
  } else {
    maximum = `The list is empty`
  }
  return maximum
}

// print the list
console.log(`The list is ${newSList.show()}`)

// print the max value
console.log(`The maximum value in the list is ${max(newSList.getHeadNode())}`)
