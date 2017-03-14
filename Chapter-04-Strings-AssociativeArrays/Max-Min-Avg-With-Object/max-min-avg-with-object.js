// Given an array of numbers, return an object containing the array's max, min and average values
//  Dont use built-ins

function maxMinAvg(arr){
  if (arr.length){
    var result = {'max': arr[0], 'min': arr[0], 'avg': 0}
    var len = arr.length, sum = arr[0]

    for (let i = 1; i < len; i++){
      result['max'] = ((result['max'] < arr[i]) ? arr[i] : result['max'])
      result['min'] = ((result['min'] > arr[i]) ? arr[i] : result['min'])
      sum += arr[i]
    }

    result['avg'] = sum/len

    return result
  } else {
    return "Empty Array"
  }
}

var myArr = [1,2,3,4,5]
myArr = [-1,-2,3,-4,5,0,0]
myArr = []
myArr = [1]
console.log(maxMinAvg(myArr))
