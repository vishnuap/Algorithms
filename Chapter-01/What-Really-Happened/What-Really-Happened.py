# Chapter-1: Fundamentals
# What-really-Happened
# (refer to Poor Kenny for background)
# Kyle notes that the chance of one disaster is totally unrelated to the chance of another. Change whatHappensToday() to whatReallyHappensToday(). In this new function test for each disaster independantly instead of assuming exactly one disaster will happen. In other words, in this new function, all five might occur today or none. Maybe kenny will survive!!

# Assume the probabilities of disasters from the Poor-Kenny question
# 10% chance of volcano, 15% chance of tsunami, 20% chance of earthquake, 25% chance of blizzard and 30% chance of meteor strike
import random as rd
def whatReallyHappensToday():
    rVol = int(rd.random() * 20)
    rTsu = int(rd.random() * 20)
    rEqu = int(rd.random() * 20)
    rBli = int(rd.random() * 20)
    rMet = int(rd.random() * 20)
    none = 1

    if rVol >= 0 and rVol <= 1:
        print("Volcano")
        none = 0
    if rTsu >= 0 and rTsu <= 2:
        print("Tsunami")
        none = 0
    if rEqu >= 0 and rEqu <= 3:
        print("Earthquake")
        none = 0
    if rBli >= 0 and rBli <= 4:
        print("Blizzard")
        none = 0
    if rMet >= 0 and rMet <= 5:
        print("Meteor Strike")
        none = 0
    if none:
        print("Nothing Happens Today")

whatReallyHappensToday()
