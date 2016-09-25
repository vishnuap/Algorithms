# Chapter-1: Fundamentals
# More-Accurate-Grades
# Refer to "Letter Grade"
# For an additional challenge, add "-" and "+" signs to the scores. Add "-" to the bottom 2% of the A, B, C, D scores. And add "+" signs to the top 2% of the B, C, D scores (no one gets an A+!!!!). e.g., given 88, print "Score: 88. Grade: B+"

# Assume the input is an integer and is between 0 and 100
def betterGrades(num):
    grades = ''
    sign = ''

    if num >= 90 and num <= 100:
        grade = "A"
        if num < 92:
            sign = "-"
    elif num >= 80 and num <= 89:
        grade = "B"
        if num < 82:
            sign = "-"
        elif num > 87:
            sign = "+"
    elif num >= 70 and num <= 79:
        grade = "C"
        if num < 72:
            sign = "-"
        elif num > 77:
            sign = "+"
    elif num >= 60 and num <= 69:
        grade = "D"
        if num < 62:
            sign = "-"
        elif num > 67:
            sign = "+"
    else:
        grade = "F"

    print("Score: {}. Grade: {}").format(num, grade + sign)

myScore = 99
betterGrades(myScore)
