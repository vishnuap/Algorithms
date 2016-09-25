// The Basic 13
// Greater-Than-Y
// Given an array and a value Y, count and print the number of array values that are greater than Y

function greater(arr, y){
  var count = 0
  for(let i = 0; i < arr.length; i++){
    if (arr[i] > y){ count++ }
  }

  console.log(`In the array ${arr}, the number of values greater than ${y} is ${count}`)
}

var myArr = [1,2,11,4,5,6,7,8,9],
    myY = 6
greater(myArr, myY)
