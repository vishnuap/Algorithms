// Chapter-1: Fundamentals
// Only-Keep-The-Last-Few
// Stan learned something today: that reducing an array's length immediately shortens it by that amount. Given array "arr" and number "x", remove all except the last "x" elements and return changed "arr". e.g., Input: ([2,4,6,8,10], 3) - output: [6,8,10]

// Assume the arguments passed are an array with numbers and a numbers
// Approach-1: By manipulating array.length
function lastFew(arr, num){
  if (num > arr.length){
    console.log(`The given number is bigger than the array length`)
  } else if (num < arr.length){
    for(let i = 1; i <= num; i++){
      arr.unshift(arr.pop())
    }
    arr.length = num
  }
}

// Approach-1: By simply using the array.shift() method.
function lastFew2(arr, num){
  if (num > arr.length){
    console.log(`The given number is bigger than the array length`)
  } else if (num < arr.length){
    var len = arr.length
    for(let i = 1; i <= len - num; i++){
      arr.shift()
    }
  }
}

var myArr = [1,2,3,4,5,6,7],
    myArr2 = [1,2,3,4,5,6,7],
    myNum = 4
console.log(`The original array1 is ${myArr}`)
lastFew(myArr, myNum)
console.log(`The changed array1 is ${myArr}`)
console.log('------------------------------');
console.log(`The original array2 is ${myArr2}`)
lastFew2(myArr2, myNum)
console.log(`The changed array2 is ${myArr2}`)
