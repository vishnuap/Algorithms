// The Basic 13
// Find-and-Print-Max
// Given an array find and print the largest element

function largest(arr){
  var largest = arr.reduce(function(prev, cur){
    return ((prev > cur) ? prev : cur)
  },arr[0])

  console.log(largest)
}

var myArr = [1,5,3,7,5]
largest(myArr)
