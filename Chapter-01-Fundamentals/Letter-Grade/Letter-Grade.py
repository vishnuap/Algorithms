# Chapter-1: Fundamentals
# Letter-Grade
# Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade given an integer representing the score from 0 to 100. Those getting 90+ get an "A", 80-89 get a "B", 70-79 is a "C". 60-69 is a "D" and lower than 60 is a an "F". e.g., for a score of 61, Print the "Score: 61. Grade: D"

# Assume input is an integer and is between 0 to 100
def grade(num):
    if num >= 90 and num <= 100:
        grade = "A"
    elif num >= 80 and num <= 89:
        grade = "B"
    elif num >= 70 and num <= 79:
        grade = "C"
    elif num >= 60 and num <= 69:
        grade = "D"
    else:
        grade = "F"

    print("Score: {}. Grade: {}").format(num, grade)

myScore = 99
grade(myScore)
