// Chapter-1: Fundamentals
// Letter-Grade
// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade given an integer representing the score from 0 to 100. Those getting 90+ get an "A", 80-89 get a "B", 70-79 is a "C". 60-69 is a "D" and lower than 60 is a an "F". e.g., for a score of 61, Print the "Score: 61. Grade: D"

// Assume input is an integer and is between 0 to 100
function grade(num){
  var grade
  switch (true) {
    case (num >= 90 && num <= 100):
      grade = "A"
      break;
    case (num >= 80 && num <= 89):
      grade = "B"
      break;
    case (num >= 70 && num <= 79):
      grade = "C"
      break;
    case (num >= 60 && num <= 69):
      grade = "D"
      break;
    default:
      grade = "F"
      break;

  }
  console.log(`Score: ${num}. Grade: ${grade}`);
}

var myScore = 90
grade(myScore)
