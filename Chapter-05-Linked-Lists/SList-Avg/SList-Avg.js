// Create a function average(head) to return average of the  lists's values
// assume all entries are numeric

// import the list class
var path = require('path'),
    SList= require(path.join(__dirname, '../singleList'))

// create a new list and populate it with random numbers
var newSList = new SList()
for (let i = 0; i < 10; i++){
  newSList.add(Math.floor(Math.random() * 100))
}

// function to get average value
function average(head){
  let sum = 0,
      len = 0
  if (head){
    while (head){
      sum += head.val
      len += 1
      head = head.next
    }
    return (sum / len)
  } else {
    return `The list is empty`
  }
}

// print the list
console.log(`The list is ${newSList.show()}`)

// print the average value
console.log(`The average of values in the list is ${average(newSList.getHeadNode())}`)
