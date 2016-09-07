// Chapter-1: Fundamentals
// Leap-Year:
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However if it is divisible by 400, then it is

function isLeap(year){
    if ((typeof year == "number") && (year > 0) && (year % 1 === 0)){
        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
            console.log(`${year} is a leap year`)
        } else {
            console.log(`${year} is not a leap year`)
        }
    } else {
        console.log("Invalid input. Please provide a non-zero integer")
    }
}

isLeap(2016)
isLeap(2000)
isLeap(1900)
isLeap(1980)