//Creating a stand alone node class that can be imported into other files as required.

//Define the node class
function Node(data){
  this.val  = data
  this.next = null
}

module.exports = Node
