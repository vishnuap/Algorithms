// The Basic 13
// Get-and-Print-Avg
// Analyze an array's values and print the average

function avg(arr){
  var sum = arr.reduce(function(prev, cur){
    return prev + cur
  })

  console.log(`${sum / arr.length}`)
}

var myArr = [1,2,3,4,5]
avg(myArr)
