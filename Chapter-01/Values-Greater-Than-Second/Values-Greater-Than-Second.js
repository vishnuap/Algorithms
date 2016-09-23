// Chapter-1: Fundamentals
// Values-Greater-Than-Second
// For [1,3,5,7,9,13] print values that are greater than it's 2nd value. Return how many values this is

// Assuming that the parameter passed is an array and it has atleast 2 elements
function gtSecond(arr){
  var second = arr[1],
         len = arr.length,
       count = 0

  for(let i = 0; i < len; i++){
    if (arr[i] > second){
      count += 1
      console.log(`${arr[i]} is greater than ${second}`)
    }
  }
  console.log(`Number of values greater than ${second} = ${count}`)
}

gtSecond([1,3,5,7,9,13])
