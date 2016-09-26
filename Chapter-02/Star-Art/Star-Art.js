// Chapter-2: Fundamentals-2
// Star-Art
// Write 3 functions:
// Write function "drawLeftStars(num)" that accepts a number and prints that many 'stars'
// Write function "drawRightStars(num)" that accepts a number and prints 75 characters in total with that many 'stars' from the right side. The last 'num' characters of the 75 must be 'stars'
// Write function "drawCenterStars(num)" that prints 75 characters total. The stars should be centered in the 75.

// Assume the argument passed is a positive integer <= 75
function drawLeftStars(num){
  var star = ""
  for(let i = 1; i <= num; i++){
    star += "*"
  }
  console.log(star)
}

function drawRightStars(num){
  var star = ""
  for(let i = 1; i <= 75 - num; i++){
    star += "-"
  }
  for(let j = 1; j <= num; j++){
    star += "*"
  }
  console.log(star)
}

function drawCenterStars(num){
  var star = ""
  for(let i = 1; i <= Math.floor((75 - num)/2); i++){
    star += "-"
  }
  for(let j = 1; j <= num; j++){
    star += "*"
  }
  var len = star.length
  for(let k = 1; k <= 75 - len; k++){
    star += "-"
  }
  console.log(star)
}

drawLeftStars(35)
drawRightStars(40)
drawCenterStars(40)
