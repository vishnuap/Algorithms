// Chapter-1: Fundamentals
// More-Accurate-Grades
// Refer to "Letter Grade"
// For an additional challenge, add "-" and "+" signs to the scores. Add "-" to the bottom 2% of the A, B, C, D scores. And add "+" signs to the top 2% of the B, C, D scores (no one gets an A+!!!!). e.g., given 88, print "Score: 88. Grade: B+"

// Assume the input is an integer and is between 0 and 100
function betterGrades(num){
  var grade = '',
      sign = ''
  switch (true){
    case (num >= 90 && num <= 100):
      if (num < 92){
        sign = "-"
      }
      grade = "A"
      break;
    case (num >= 80 && num <= 89):
      if (num < 82){
        sign = "-"
      } else if (num > 87){
        sign = "+"
      }
      grade = "B"
      break;
    case (num >= 70 && num <= 79):
      if (num < 72){
        sign = "-"
      } else if (num > 77){
        sign = "+"
      }
      grade = "C"
      break;
    case (num >= 60 && num <= 69):
      if (num < 62){
        sign = "-"
      } else if (num > 67){
        sign = "+"
      }
      grade = "D"
      break;
    default:
      grade = "F"
      break;
  }
  console.log(`Score: ${num}. Grade: ${grade}${sign}`)
}

var myScore = 99
betterGrades(myScore)
