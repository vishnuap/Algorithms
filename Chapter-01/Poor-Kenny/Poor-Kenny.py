# Chapter-1: Fundamentals
# Poor-Kenny
# Kenny tries to stay safe but somehow everyday something happens. If there is a 10% chance of volcano, 15% chance of tsunami, 20% chance of earthquake, 25% chance of blizzard and 30% chance of meteor strike, write a function whatHappensToday() to print the outcome

# Assume only one event will happen per day
import random as rd
def whatHappensToday():
    rand = int(rd.random() * 20)
    if rand in range(0, 2):
        print("Volcano")
    elif rand in range(2, 5):
        print("Tsunami")
    elif rand in range(5, 9):
        print("Earthquake")
    elif rand in range(9, 14):
        print("Blizzard")
    else:
        print("Meteor Strike")

whatHappensToday()
