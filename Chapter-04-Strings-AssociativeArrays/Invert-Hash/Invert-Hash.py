# Given an object, write a function to convert the keys to values and values to keys. given {"name": "Zaphod", "charm": "high", "morals": "dicey"} return {"Zaphod": "name", "high": "charm", "dicey": "morals"}

def invert(hash):
    result = {}

    for key in hash:
        result[hash[key]] = key

    return result

myHash = {"name": "Zaphod", "charm": "high", "morals": "dicey"}
print(invert(myHash))
