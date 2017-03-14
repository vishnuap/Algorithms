# Chapter-2: Fundamentals-2
# Twelve-Bar-Blues
# Write a function that prints the number 1, then "chick", then "boom", then "chick". Then print 2 followed by "chick", then "boom", then "chick". Continue the same cycle for each number up to 12

def twelveBarBlues():
    for i in range(1, 13):
        print("{}").format(i)
        print("chick")
        print("boom")
        print("chick")

twelveBarBlues()
