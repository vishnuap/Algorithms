# Chapter-2: Fundamentals-2
# Clock-Hand-Angles-Revisited
# Refer to Clock-Hand-Angles in the same chapter
# Print only integer values for the angles.

import math
# Assume the argument passed is a positive integer
# Approach:
# 1 full rotation of any hand = 360 degs
# In 1 min = 60 secs, seconds hand covers 360 degs. => in 1 sec, Seconds hand moves 6 degs
# In 1 hr = 3600 secs, minutes hand covers 360 degs => in 1 sec, Minutes hand moves 1/10 degs
# In 12 hrs = 12 * 3600 secs, hours hand covers 360 degs => in 1 sec, Hours hand moves 1/120 degs
# In 1 week = 7 * 24 * 3600 secs, week hand covers 360 degs => in 1 sec, Week hand moves 1/1680 degs
# Now use this to compute the final position of each hand after any given number of seconds
def clockHandAngles(secs):
    actualSecs = secs % (12 * 3600)
    weekSecs = secs % (7 * 24 * 3600)
    secondAngle = (actualSecs * 6.0) % 360
    minuteAngle = (actualSecs * (1/10.0)) % 360
    hourAngle = (actualSecs * (1/120.0)) % 360
    weekAngle = (weekSecs * (1/1680.0)) % 360

    print("Week hand: {} degs; Hour hand: {} degs; Minute hand: {} degs; Second hand: {} degs").format(int(math.ceil(weekAngle) if (weekAngle % 1 > 0.5) else math.floor(weekAngle)), int(math.ceil(hourAngle) if (hourAngle % 1 > 0.5) else math.floor(hourAngle)), int(math.ceil(minuteAngle) if (minuteAngle % 1 > 0.5) else math.floor(minuteAngle)), int(math.ceil(secondAngle) if (secondAngle % 1 > 0.5) else math.floor(secondAngle)))

mySec = 119730
clockHandAngles(mySec)
