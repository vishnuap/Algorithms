// write a function that, given an array of strings, returns the longest common suffix (word-end) among all of them. given ["determination", "nation", "communication", "promotion"], return "tion". Given ["nice", "ice", "baby"], return "" (empty string)


// assuming the validations are not required for the array being passed
// It is not empty and contains strings
function suffix(arr){
  // using the array.prototype.reduce method to find the smallest string in the array. So that we don't loop thru more than required
  var minLen =  arr.reduce(function(len, val){
    if (len == 0){
      len = val.length
    } else {
      if (len > val.length){
        len = val.length
      }
    }
    return len
  }, 0)

  var suffix = ''

  // if minimum string length in array is 0, immediately return empty string as the longest common suffix
  if (!minLen){
    return suffix
  }

  // compare characters starting from the last of each string in array and in each iteration move inside. stop iterations when the comparison fails.
  var j = 1
  while (j <= minLen){
    for (var i = 0; i < arr.length-1; i++){
      if (arr[i].substring(arr[i].length - j) != arr[i+1].substring(arr[i+1].length - j)){
        return suffix
      }
    }
    suffix = arr[i].substring(arr[i].length - j)
    j++
  }
  return suffix
}

var myArr = ["determination", "nation", "communication", "promotion"]
myArr = ["determination", "nation", "damnation", "carnation", "crenation"]
myArr = ["determination", "ruination", "contamination", "procrastination"]
myArr = ["dog", "cat", "cow", "pig"]
console.log(`The array of strings is [${myArr}]`)
console.log(`The longest common suffix is "${(!suffix(myArr) ? "An empty string" : suffix(myArr))}"`)
