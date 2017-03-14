// Chapter-2: Fundamentals-2
// Date-on-a-Deserted-Island
// 1. Create "weekdayName(num)" function that, given a number between 1 and 7, will print a string containing the day of the week for that number. e.g., weekdayName(1) = "Sunday"
// 2. Create "weekdayName2(num)" function that, given a number between 1 and 365, will print a string containing the day of the week for that number. e.g., weekdayName2(1) = "Sunday". weekdayName2(8) = "Sunday"
// 3. Create "someDays()" that calls weekdayName2() 17 times with random integers as input. Print each result string. If it is a weekday, print "Work hard!" and for weekend print "Enjoy your day off!"
// 4. Create "monthName(num)" that, given a number from 1 to 12, returns a string containing the name of the month. e.g., monthName(5) = "May"
// 5. Create "monthToDays(num)" that returns the number of days in that month for 2017.
// 6. Create "dayToMonth(num)" that, given a number since the year began, returns the current month. e.g., dayToMonth(75) = "March"
// 7. Create "fullDate(num)" to accept number of days so far in 2017 and return a full date string. e.g., fullDate(142) = "Monday, March 22, 2017"
// 8. Create "fullDate2(num)" that will handle a 4 digit input representing the number of days passed since Dec-31, 2016 and print the full date string. e.g., fullDate2(8475) = "Thursday, March 15, 2040". Handle leap years
// 9. Create "fullDate3(num)" to handle 6 digit inputs. e.g., fullDate3(139947) = "Tuesday, February 29, 2400"

// Combining weekdayName and weekdayName2
function weekdayName(num){
  var weekDays = {1: "Sunday", 2: "Monday", 3: "Tuesday", 4: "Wednesday", 5: "Thursday", 6: "Friday", 7: "Saturday"}

  if (num <= 0){
    return "Invalid Input"
  } else {
    num = ((num % 7 == 0) ? 7 : (num % 7))
    return weekDays[num]
  }
}

function someDays(){
  for (let i = 1; i <= 17; i++){
    var day = weekdayName(Math.floor(Math.random() * 365) + 1)
    if ((day == "Sunday") || (day == "Saturday")){
      console.log(`${day} - Enjoy your day off!`)
    } else {
      console.log(`${day} - Work Hard!`)
    }
  }
}

function monthName(num){
  var months = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"}

  if (num <= 0){
    return "Invalid input"
  } else {
    num = ((num % 12 == 0) ? 12 : (num % 12))
    return months[num]
  }
}

function monthToDays(num, leap=false){
  if (num <= 0){ return "Invalid input"}
  else {
    num = ((num % 12 == 0) ? 12 : (num % 12))
    switch (num){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31
      case 2:
        return (leap ? 29 : 28)
      default:
        return 30
    }
  }
}

function isLeap(year){
  switch (true){
    case (year % 400 == 0):
      return true
    case (year % 100 == 0):
      return false
    case (year % 4 == 0):
      return true
    default:
      return false
  }
}

// The "dayToMonth()" function is written to handle functionality of dayToMonth(), and all three fullDate() functions asked for.
function dayToMonth(num){
  if (num <= 0){ return "Invalid input"}
  else {
    var day = weekdayName(num),
        year = 2017,
        daysInYear = (isLeap(year) ? 366 : 365)

    // The below while loop will reduce the 'num' parameter to less than or equal to number of days in the year.
    while (num > daysInYear){
      num = num - daysInYear
      year += 1
      daysInYear = (isLeap(year) ? 366 : 365)
    }

    for (let month = 1; month <= 12; month++){
      var days = monthToDays(month, isLeap(year))
      if ((num - days) > 0){
        num -= days
      } else {
        return {"day": day, "date": num, "month": monthName(month), "year": year}
      }
    }
  }
}

var myWeekDayNum = 1492
console.log(`${myWeekDayNum} corresponds to ${weekdayName(myWeekDayNum)}`)

// someDays()

var myMonthNum = 53
console.log(`${myMonthNum} corresponds to ${monthName(myMonthNum)} which has ${monthToDays(myMonthNum)} days`)

var myDayToMonthNum = 1492
console.log(`${myDayToMonthNum} days corresponds to the month of ${dayToMonth(myDayToMonthNum)["month"]}`);
//
var fullDate = dayToMonth(myDayToMonthNum)
console.log(`${myDayToMonthNum} days corresponds to a full date of "${fullDate["day"]}, ${fullDate["month"]} ${fullDate["date"]}, ${fullDate["year"]}"`);
//
var myFullDateNum = 8475
fullDate = dayToMonth(myFullDateNum)
console.log(`${myFullDateNum} days corresponds to a full date of "${fullDate["day"]}, ${fullDate["month"]} ${fullDate["date"]}, ${fullDate["year"]}"`);

myFullDateNum = 139947
fullDate = dayToMonth(myFullDateNum)
console.log(`${myFullDateNum} days corresponds to a full date of "${fullDate["day"]}, ${fullDate["month"]} ${fullDate["date"]}, ${fullDate["year"]}"`);
