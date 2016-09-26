// Chapter-2: Fundamentals-2
// Clock-Hand-Angles
// Create clockHandAngles(seconds) which, given a number of seconds since 12:00:00 prints angles (in degrees) of the hour, minute and second hands. e.g., for input of 3600 (equivalent of 1:00:00), print "Hour hand: 30 degs; Minute hand: 0 degs; Second hand: 0 degs"
// Also calculate the angle of a "week hand" that completes a rotation once each week

// Assume the argument passed is a positive integer
// Approach:
// 1 full rotation of any hand = 360 degs
// In 1 min = 60 secs, seconds hand covers 360 degs. => in 1 sec, Seconds hand moves 6 degs
// In 1 hr = 3600 secs, minutes hand covers 360 degs => in 1 sec, Minutes hand moves 1/10 degs
// In 12 hrs = 12 * 3600 secs, hours hand covers 360 degs => in 1 sec, Hours hand moves 1/120 degs
// In 1 week = 7 * 24 * 3600 secs, week hand covers 360 degs => in 1 sec, Week hand moves 1/1680 degs
// Now use this to compute the final position of each hand after any given number of seconds
function clockHandAngles(secs){
  // get the equivalent number of secs
  var actualSecs = secs % (12 * 3600),
      numDays = Math.floor(secs / (24 * 3600)),
      weekSecs = secs % (7 * 24 * 3600),
      numWeeks = Math.floor(secs / (7 * 24 * 3600)),
      secondAngle = (actualSecs * 6) % 360,
      minuteAngle = (actualSecs * (1/10)) % 360,
      hourAngle = (actualSecs * (1/120)) % 360,
      weekAngle = (weekSecs * (1/1680)) % 360

  console.log(`Week hand: ${weekAngle} degs; Hour hand: ${hourAngle} degs; Minute hand: ${minuteAngle} degs; Second hand: ${secondAngle} degs`)
}

var mySec = 119730
clockHandAngles(mySec)
