# Chapter-1: Fundamentals
# Leap-Year:
# Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However if it is divisible by 400, then it is

def isLeap(year):
    if type(year) is int and year > 0:
        if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
            print("{} is a leap year").format(year)
        else:
            print("{} is not a leap year").format(year)
    else:
        print("Invalid input. Please provide a non-zero integer")

isLeap(2016)
isLeap(2000)
isLeap(1900)
isLeap(1980)