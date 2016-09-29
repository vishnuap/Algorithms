# Chapter-2: Fundamentals-2
# Date-on-a-Deserted-Island
# 1. Create "weekdayName(num)" function that, given a number between 1 and 7, will print a string containing the day of the week for that number. e.g., weekdayName(1) = "Sunday"
# 2. Create "weekdayName2(num)" function that, given a number between 1 and 365, will print a string containing the day of the week for that number. e.g., weekdayName2(1) = "Sunday". weekdayName2(8) = "Sunday"
# 3. Create "someDays()" that calls weekdayName2() 17 times with random integers as input. Print each result string. If it is a weekday, print "Work hard!" and for weekend print "Enjoy your day off!"
# 4. Create "monthName(num)" that, given a number from 1 to 12, returns a string containing the name of the month. e.g., monthName(5) = "May"
# 5. Create "monthToDays(num)" that returns the number of days in that month for 2017.
# 6. Create "dayToMonth(num)" that, given a number since the year began, returns the current month. e.g., dayToMonth(75) = "March"
# 7. Create "fullDate(num)" to accept number of days so far in 2017 and return a full date string. e.g., fullDate(142) = "Monday, March 22, 2017"
# 8. Create "fullDate2(num)" that will handle a 4 digit input representing the number of days passed since Dec-31, 2016 and print the full date string. e.g., fullDate2(8475) = "Thursday, March 15, 2040". Handle leap years
# 9. Create "fullDate3(num)" to handle 6 digit inputs. e.g., fullDate3(139947) = "Tuesday, February 29, 2400"

import random as rd

# Combining weekdayName and weekdayName2
def weekdayName(num):
    weekDays = {1: "Sunday", 2: "Monday", 3: "Tuesday", 4: "Wednesday", 5: "Thursday", 6: "Friday", 7: "Saturday"}

    if num <= 0:
        return "Invalid Input"
    else:
        num = 7 if (num % 7 == 0) else (num % 7)
        return weekDays[num]

def someDays():
    for i in range(1, 18):
        day = weekdayName(rd.randint(1, 365))
        if (day == "Sunday") or (day == "Saturday"):
            print("{} - Enjoy your day off!").format(day)
        else:
            print("{} - Work Hard!").format(day)

def monthName(num):
    months = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"}

    if (num <= 0):
        return "Invalid input"
    else:
        num = 12 if (num % 12 == 0) else (num % 12)
        return months[num]

def monthToDays(num, leap=False):
    if (num <= 0):
        return "Invalid input"
    else:
        num = 12 if (num % 12 == 0) else (num % 12)
        if num == 1 or num == 3 or num == 5 or num == 8 or num == 10 or num == 12:
            return 31
        elif num == 2:
            return 29 if leap else 28
        else:
            return 30

def isLeap(year):
    return True if (year % 400 == 0) else (False if (year % 100 == 0) else (True if (year % 4 == 0) else False))

# The "dayToMonth()" function is written to handle functionality of dayToMonth(), and all three fullDate() functions asked for.
def dayToMonth(num):
    if num <= 0:
        return "Invalid input"
    else:
        day = weekdayName(num)
        year = 2017
        daysInYear = 366 if isLeap(year) else 365

    # The below while loop will reduce the 'num' parameter to less than or equal to number of days in the year.
    while (num > daysInYear):
        num = num - daysInYear
        year += 1
        daysInYear = 366 if isLeap(year) else 365

    for month in range(1, 13):
        days = monthToDays(month, isLeap(year))
        if (num - days) > 0:
            num -= days
        else:
            return {"day": day, "date": num, "month": monthName(month), "year": year}

myWeekDayNum = 1492
print("{} corresponds to {}").format(myWeekDayNum, weekdayName(myWeekDayNum))

# someDays()
#
myMonthNum = 53
print("{} corresponds to {} which has {} days").format(myMonthNum, monthName(myMonthNum), monthToDays(myMonthNum))
#
myDayToMonthNum = 1492
print("{} days corresponds to the month of {}").format(myDayToMonthNum, dayToMonth(myDayToMonthNum)["month"])
#
fullDate = dayToMonth(myDayToMonthNum)
print("{} days corresponds to a full date of '{}, {} {}, {}'").format(myDayToMonthNum, fullDate["day"], fullDate["month"], fullDate["date"], fullDate["year"])
#
myFullDateNum = 8475
fullDate = dayToMonth(myFullDateNum)
print("{} days corresponds to a full date of '{}, {} {}, {}'").format(myFullDateNum, fullDate["day"], fullDate["month"], fullDate["date"], fullDate["year"])

myFullDateNum = 139947
fullDate = dayToMonth(myFullDateNum)
print("{} days corresponds to a full date of '{}, {} {}, {}'").format(myFullDateNum, fullDate["day"], fullDate["month"], fullDate["date"], fullDate["year"])
