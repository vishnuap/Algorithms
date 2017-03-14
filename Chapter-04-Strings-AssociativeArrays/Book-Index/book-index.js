// Given a sorted array of numbers, produce an index string. Consecutive numbers should form ranges seperated by a hyphen. for [1, 13, 14, 15, 37, 38, 70], return "1, 13-15, 37-38, 70".

// assuming non-zero entries in the array

function index(arr){
  var result = ''
  var ll = arr[0], ul = 0

  for (let i = 1, len = arr.length; i < len; i++){
    if (arr[i] != (arr[i-1] + 1)){
      if (ul){
        result += (result ? `, ${ll}-${ul}` : `${ll}-${ul}`)
      } else {
        result += (result ? `, ${ll}` : `${ll}`)
      }

      ul = 0
      ll = arr[i]
    } else {
      ul = arr[i]
    }
  }

  if (ul){
    result += (result ? `, ${ll}-${ul}` : `${ll}-${ul}`)
  } else {
    result += (result ? `, ${ll}` : `${ll}`)
  }

  return result
}

var myArr = [1, 13, 15, 37, 70]
myArr = [1, 13, 14, 15, 37, 38, 70]
myArr = [1, 2, 3, 4, 5, 13, 14, 15, 37, 38, 70, 71]
console.log(index(myArr))
