// Chapter-1: Fundamentals
// Fit-the-First-value
// Your function should accept an array. If value at [0] is greater than array's length, print "Too big!"; if value at [0] is less than array's length, print "Too small!"; otherwise print "Just right!"

// Assuming argument passed is an array and first element is a number
function ftfv(arr){
  switch (true){
    case (arr[0] > arr.length):
      console.log(`Too big!`)
      break
    case (arr[0] < arr.length):
      console.log(`Too small!`)
      break
    default:
      console.log(`Just right!`)
  }
}

var myArr = [6,4,6,3,2]
ftfv(myArr)
