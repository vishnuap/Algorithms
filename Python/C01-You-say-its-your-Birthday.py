# Chapter-1: Fundamentals
# You-say-its-your-Birthday:
# If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day..."

myBDate = [3, 6]

def bd(num1, num2):
    if num1 in myBDate and num2 in myBDate:
        print("How did you know?")
    else:
        print("Just another day...")

bd(1, 2)
bd(3, 6)
bd(6, 3)
bd(5 ,4)