// Chapter-1: Fundamentals
// Previous-Lengths
// You are passed an array containing strings. Working within that same array replace each string with a number - the length of the string at previous array index - and return the array

// Assume the argument to the function is an array containing strings
// We need to start this processing from the end since starting from the first element would mean that by the time we go to the next one, the previous element (the one we started with) would have become a number
// The first element can get the length of the last element
function prevLen(arr){
  var lenLast = arr[arr.length - 1].length
  for(var i = arr.length - 1; i > 0; i--){
    arr[i] = arr[i - 1].length
  }
  arr[0] = lenLast
}

myArr = ["first", "second", "third", "fourth", "fifth", "sixth"]
console.log(`The array before replacement - ${myArr}`)
prevLen(myArr)
console.log(`The array after replacement - ${myArr}`)
