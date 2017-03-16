# Get a long text and analyse it to determine the following:
# How many chars does it have?
# How many words?
# How many unique characters?
# How many unique words?
# Unique chars and unique words without capitalization?
# List all unique words in alphabetical order?
# Most common words used? What is their frequency?
# Create an array of unique words and their frequency in ascending order of frequency.

# for the long text I have copied the text from www.classicreader.com/book/206/1 into a file called text.txt which I will use.

import re

# read the local file and get the contents as a string.
def getTextFrom(file):
    fs = open(file, 'r')
    return fs.read()

def sortObjectAlpha(obj):
    result = [[key, obj[key]] for key in obj]
    result.sort()
    return result

def sortObjectCount(obj):
    result = [[key, obj[key]] for key in obj]
    result.sort(lambda x,y: y[1]-x[1])
    return result

def weekendChallenge(file):
    str = getTextFrom(file)
    numOfChars = len(str) # num of characters

    # use regex to get rtid of all characters except alpha-numeric
    str1 = re.sub("[^a-zA-Z0-9]+", '', str)
    numOfLetters = len(str1)

    # use regex to retain only alphanumeric and spaces. remove everything else. convert tabs and new line characters (CRLF) to spaces
    str2 = re.sub("[^a-zA-Z0-9\r\n\t ]+", '', str)
    str2 = re.sub("[\r\n\t]+", ' ', str2)
    # now split the string into words
    words = str2.split()

    unqWords = 0
    wordCount = {}
    wordCountNoCaps = {}
    letterCount = {}
    letterCountNoCaps = {}

    for word in words:
        if word in wordCount:
            wordCount[word] += 1
        else:
            wordCount[word] = 1
            unqWords += 1

        if word.lower() in wordCountNoCaps:
            wordCountNoCaps[word.lower()] += 1
        else:
            wordCountNoCaps[word.lower()] = 1

        for char in word:
            if char in letterCount:
                letterCount[char] += 1
            else:
                letterCount[char] = 1

            if char.lower() in letterCountNoCaps:
                letterCountNoCaps[char.lower()] += 1
            else:
                letterCountNoCaps[char.lower()] = 1

    print(sortObjectCount(wordCount))
    print("----------------------------------")
    print(sortObjectAlpha(wordCount))
    print("----------------------------------")
    print(sortObjectCount(letterCount))
    print("----------------------------------")
    print(sortObjectAlpha(letterCount))
    print("----------------------------------")
    print(sortObjectCount(wordCountNoCaps))
    print("----------------------------------")
    print(sortObjectAlpha(wordCountNoCaps))
    print("----------------------------------")
    print(sortObjectCount(letterCountNoCaps))
    print("----------------------------------")
    print(sortObjectAlpha(letterCountNoCaps))
    print("----------------------------------")
    print(unqWords)

weekendChallenge('text.txt')
