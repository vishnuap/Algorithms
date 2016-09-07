# Chapter-1: Fundamentals
# Setting and Swapping:
# Set "myNumber" to 42. Set "myName" to your name. Now swap "myNumber" into "myName" and vice-versa

myNumber = 42
myName = 'Vishnu'

print("myNumber = {} - myName = {}").format(myNumber, myName)

myNumber, myName = myName, myNumber

print("After Swapping:")
print("myNumber = {} - myName = {}").format(myNumber, myName)