// Chapter-1: Fundamentals
// Values-Greater-Than-Second-Generalized
// Write a function that accepts any array and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

function gtSecond(arr){
  var result
  if (arr.constructor != Array){
    result = "Parameter passed is not an Array"
  } else if (arr.length < 2){
    result = "The array passed is not long enough"
  } else {
    var second = arr[1],
           len = arr.length

    result = []

    for(let i = 0; i < len; i++){
      if (arr[i] > second){
        result.push(arr[i])
      }
    }
  }
  return result
}

var myArr = [2,3,1,4,5,8,7,6],
    myResult = gtSecond(myArr)

console.log(`The array is ${myArr}`)
if (myResult.constructor === Array){
  if (myResult.length){
    console.log(`The values greater than ${myArr[1]} are ${myResult}. There are ${myResult.length} of them`)
  } else {
    console.log(`There are no values greater than ${myArr[1]}`);
  }
} else {
  console.log(`${myResult}`)
}
