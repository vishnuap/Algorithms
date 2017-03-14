// Build a standalone function to remove strings of even lengths from a given array. Given ['Nope!', 'Its', 'kris', 'strating', 'with', 'K!', '(instead', 'of', 'Chris', 'with', 'C)', '.'], change it to ['Nope!', 'Its', 'Chris']
function removeEven(strArr){
  for (let i = 0; i < strArr.length; i++){
    if ((strArr[i].length % 2) === 0){
      strArr.splice(i, 1)
      i--
    }
  }
}

var myStrArr = ['Nope!', 'Its', 'kris', 'starting', 'with', 'K!', '(instead', 'of', 'Chris', 'with', 'C)', '.']
console.log(`The original array is ${myStrArr}`)
removeEven(myStrArr)
console.log(`The changed array is ${myStrArr}`)
