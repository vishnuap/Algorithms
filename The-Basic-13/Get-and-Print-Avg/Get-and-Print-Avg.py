# The Basic 13
# Get-and-Print-Avg
# Analyze an array's values and print the average

def avg(arr):
    sum = reduce((lambda x,y: x+y), arr)
    print("{}").format(sum * 1.0 / len(arr))

myArr = [1,2,3,4,5]
avg(myArr)
