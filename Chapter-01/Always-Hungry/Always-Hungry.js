// Chapter-1: Fundamentals
// Always-Hungry
// Create a function that accepts an array and prints "yummy" each time one of the values is equal to "food". If no array element is "food", then print "I'm hungry" once

// Assume the argument passed is an array
function yummy(arr){
  var hungry = 1
  arr.forEach(function(i){
    if (i === 'food'){
      hungry = 0
      console.log(`Yummy`)
    }
  })
  if (hungry){
    console.log(`I'm hungry`)
  }
}

myArr = ['I', 'food', 'to', 'food']
yummy(myArr)
