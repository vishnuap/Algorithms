// Write your own function to recreate the string search function of javascript. It returns the starting position (index) of the substring being searched. If the substring is not found, it returns -1.

// when an empty string is used as the substring, it returns 0 (first position)

function search(str, sub = ''){
  // handle no search string
  if ((typeof(sub) == 'string') && (!sub)){
    return 0
  }

  var result = -1
  var len = sub.length

  for (pos in str){
    if (str.substr(pos, len) == sub){
      result = pos
      break
    }
  }

  return result
}

var myStr = 'stringstreet'
myStr = 'string1street'
console.log(search(myStr))
console.log(search(myStr,''))
console.log(search(myStr,' '))
console.log(search(myStr,'st'))
console.log(search(myStr,'gs'))
console.log(search(myStr,'e'))
console.log(search(myStr,'i'))
console.log(search(myStr,1))
console.log(search(myStr,'1'))
