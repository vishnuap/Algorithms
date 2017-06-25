// Create a function which accepts the head node of a list and removes the last element in the list

// import the list class
var path = require('path'),
    SList= require(path.join(__dirname, '../singleList'))

// create a new list and populate it
var newSList = new SList()
for(let i = 0; i < 10; i++){
  newSList.add(Math.floor(Math.random() * 100))
}

// print the existing list
console.log(`The existing list is ${newSList.show()} - length is ${newSList.length()}`)

// function to remove last element
function removeBack(list, head){
  if (head){
    if (!head.next){
      list.setHeadNode(null)
      list.setTailNode(null)
    } else {
      let tempHead = head.next,
          trailer  = head
      while (tempHead.next){
        trailer = tempHead
        tempHead= tempHead.next
      }
      trailer.next = null
      list.setTailNode(trailer)
    }
    list.recalculateLength()
  }
}

// print the result of running the remove function
removeBack(newSList, newSList.getHeadNode())
console.log(`The modified list is ${newSList.show()} - length is ${newSList.length()}`)
