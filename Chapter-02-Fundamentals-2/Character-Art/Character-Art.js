// Chapter-2: Fundamentals-2
// Character-Art
// Refer "Star-Art"
// Derive from the above and draw any character passed (not just 'star')

// Assume the argument passed is a positive integer <= 75
// Assume the character argument is a single character
function drawLeftChars(num, char){
  var str = ""
  for(let i = 1; i <= num; i++){
    str += char
  }
  console.log(str)
}

function drawRightChars(num, char){
  var str = ""
  for(let i = 1; i <= 75 - num; i++){
    str += "-"
  }
  for(let j = 1; j <= num; j++){
    str += char
  }
  console.log(str)
}

function drawCenterChars(num, char){
  var str = ""
  for(let i = 1; i <= Math.floor((75 - num)/2); i++){
    str += "-"
  }
  for(let j = 1; j <= num; j++){
    str += char
  }
  var len = str.length
  for(let k = 1; k <= 75 - len; k++){
    str += "-"
  }
  console.log(str)
}

drawLeftChars(35, '@')
drawRightChars(40, '#')
drawCenterChars(40, '~')
