//Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(mynode) did!

var path = require('path'),
    SList= require(path.join(__dirname, '../singleList'))

// create a new list and populate it
var newSList = new SList()
for (let i = 0; i < 10; i++){
  newSList.add(i)
}

// function to display the contents given the head node. Building as a standalone function here. However for regular use, this is a built-in method of the list class I am using.
function displayList(head){
  let listContent = ''
  if (!head){
    listContent = `The list is empty`
  } else {
    while(head){
      if (listContent){ listContent += `-` }
      listContent += `${head.val}`
      head = head.next
    }
  }
  return listContent
}

console.log(displayList(newSList.getHeadNode()))
