// Accept a string and return the number of non-space characters found in the string. Given "Honey pie, you are driving me crazy" returns 29 (not 35)

// Use split and join
function noSpaceLength(str){
  var temp = str.split(' '),
      result = temp.join('')

  return result.length
}

var myStr = "Honey pie, you are driving me crazy"
console.log(`The original string is ${myStr}`)
console.log(`The number of non-space characters in it are ${noSpaceLength(myStr)}`)
