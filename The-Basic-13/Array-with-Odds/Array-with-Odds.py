# The Basic 13
# Array-with-Odds
# Create an array with all odd integers between 1 and 255 inclusive

def makeArr():
    arr = []
    for i in range(1, 256, 2):
        arr.append(i)

    print(arr)

makeArr()
