# Chapter-1: Fundamentals
# Counting-the-Dojo-Way:
# Print integers 1 to 100, If divisible by 5, print "Coding" instead. If by 10, also print "Dojo"

for i in range(1, 101):
    if i % 10 == 0:
        print("Coding Dojo")
    elif i % 5 == 0:
        print("Coding")
    else:
        print(i)