// Without using the "length" property, find the number of elements in a given array

function arrLen(arr){
  var result = 0

  for (key in arr){
    result++
  }

  return result
}

var myArr = [1,2,3,4,5]
myArr = ['a', 'b', 3, 'd', 5, 'f']
myArr = {'a': 1, 'b': 2, 'c': 3}
console.log(arrLen(myArr))
