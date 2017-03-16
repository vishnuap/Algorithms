// Write your own function to recreate the string.split() function of javascript. split a string into an array of substrings. It takes in a seperator based on which to split the string.

function split(str, sep = -1, limit = -1){
  // if the seperator is not specified, return the entire string as an element in an array
  // the limit cannot be specified without specifying the seperator
  if (typeof(sep) === 'number'){
    return [str]
  }

  // the limit has to be a positive integer
  if ((typeof(limit) != 'number') || (limit == 0)){
    return []
  }
  // if seperator is empty string, break the entire string into individual characters and put them into the array
  var result = []
  var done = false
  var i = 0
  var prev = 0

  var compare = function(){
    if (str.substr(i, sep.length) == sep){
      result.push(str.substring(prev, i))
      i += sep.length
      prev = i
    } else {
      i++
    }

    if (i >= str.length){
      result.push(str.substring(prev, i))
      done = true
    }
  }

  if ((typeof(sep) === 'string') && (sep.length) && (limit > 0)){
    while ((result.length < limit) && (!done)){
      compare()
    }
  } else if ((typeof(sep) === 'string') && (sep.length)){
    while (!done){
      compare()
    }
  } else {
    for (pos in str){
      result.push(str.charAt(pos))
    }
  }

  return result
}

var myStr = "stringstreetest"
myStr = "stringstreet"
myStr = "string street"
console.log(`split('${myStr}',3)      -->`, split(myStr, 3))
console.log(`split('${myStr}')        -->`, split(myStr))
console.log(`split('${myStr}','st',5) -->`, split(myStr,'st',5))
console.log(`split('${myStr}','st',2) -->`, split(myStr,'st',2))
console.log(`split('${myStr}','st')   -->`, split(myStr,'st'))
console.log(`split('${myStr}','')     -->`, split(myStr,''))
console.log(`split('${myStr}','xyz')  -->`, split(myStr,'xyz'))
