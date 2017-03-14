# Chapter-1: Fundamentals
# Print and Count:
# Print all integer multiples of 5, from 512 to 4096. Afterward, log how many there were

start = 515 # 515 is the least multiple of 5 greater than 512
end = 4095  # 4095 is the greatest multiple of 5 less than 4096
count = 0

for i in range(start, end+1, 5):
    print("The multiple of 5 is {}").format(i)
    count += 1
    
print("The number of multiples of 5 between 512 and 4096 is {}").format(count)