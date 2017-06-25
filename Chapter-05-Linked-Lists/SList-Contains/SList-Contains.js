// Given the 'head' pointer to list and a value, return whether the vaue is found in the list or not

// import the list class
var path = require('path'),
    SList= require(path.join(__dirname, '../singleList'))

// create a new list and populate it with random numbers
var newSList = new SList()
for (let i = 0; i < 10; i++){
  newSList.add(Math.floor(Math.random() * 100))
}

// create a function to accept head pointer and a value and check for occurance in the list
function listHas(head, value){
  let result = false
  if (!head){
    result = `The list is empty`
  } else {
    while (head){
      if (head.val == value){
        result = true
        break
      }
      head = head.next
    }
  }
  return result
}

// print the list
console.log(`The list is ${newSList.show()}`)

// print the result
var myVal = 45
console.log(`${myVal} is in the given list - ${listHas(newSList.getHeadNode(), myVal)}`)
