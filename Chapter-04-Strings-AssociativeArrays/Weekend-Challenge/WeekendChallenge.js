// Get a long text and analyse it to determine the following:
// How many chars does it have?
// How many words?
// How many unique characters?
// How many unique words?
// Unique chars and unique words without capitalization?
// List all unique words in alphabetical order?
// Most common words used? What is their frequency?
// Create an array of unique words and their frequency in ascending order of frequency.

// for the long text I have copied the text from www.classicreader.com/book/206/1 into a file called text.txt which I will use.

// for reading local text file in js we can use the XMLHttpRequest object if we are running the js on the browser. For running the js on node, you will have to "require" the "fs" module and use it to access, read, write from the local file system.

// doing this syncronously since it is a small file
function getTextFrom(file){
  var fs = require('fs')
  // read the contents of the file and return it as a single, large string.
  return fs.readFileSync(file, 'utf8')
}

// sortObjectCount function takes an object/hashmap as insput and returns a sorted array where the array contains the object's key-value pairs as subarrays. The sort order is descending based on the value of the key-value pairs
function sortObjectCount(obj){
  var result = []

  // convert the object into array of k-v pairs
  for (key in obj){
    result.push([key, obj[key]])
  }

  // The compare function is an anonymous function written using the new arrow notation. its same as:
  // function(x,y){ return y[1]-x[1]}
  // here x and y are the subarrays, that is why comparison is done on x[1] and y[1]
  return result.sort((x, y) => y[1] - x[1])
}

// sortObjectAlpha function takes an object/hashmap as insput and returns a sorted array where the array contains the object's key-value pairs as subarrays. The sort order is alphabetical based on the key of the key-value pairs
function sortObjectAlpha(obj){
  var result = []

  // convert the object into array of k-v pairs
  for (key in obj){
    result.push([key, obj[key]])
  }

  // No compare function is used here since sort() automatically considers elements as strings and sorts alphabetically
  return result.sort()
}

function weekendChallenge(file){
  var str = getTextFrom(file)

  // How many chars does it have?
  var numOfChars = str.length

  // use regex to get rid of everything else except alpha-numeric
  var str1 = str.replace(/[^a-zA-Z0-9]+/g, '')
  var numOfLetters = str1.length

  // str2 - remove all symbols but retains spaces
  var str2 = str.replace(/[^a-zA-Z0-9\r\n\t ]+/g, '')
  var str2 = str2.replace(/[\r\n\t]+/g, ' ')
  // use string.split() to get the array of words. Use a regex in the split to handle one or more spaces between the words
  var words = str2.split(/[ ]+/)
  var unqWords = 0

  var wordCount = {}
  var wordCountNoCaps = {}
  var letterCount = {}
  var letterCountNoCaps = {}

  for (pos in words){
    let word = words[pos]
    if (word in wordCount){
      wordCount[word] += 1
    } else {
      wordCount[word] = 1
      unqWords += 1
    }

    if (word.toLowerCase() in wordCountNoCaps){
      wordCountNoCaps[word.toLowerCase()] += 1
    } else {
      wordCountNoCaps[word.toLowerCase()] = 1
    }

    for (charPos in word){
      let char = word.charAt(charPos)
      if (char in letterCount){
        letterCount[char] += 1
      } else {
        letterCount[char] = 1
      }

      if (char.toLowerCase() in letterCountNoCaps){
        letterCountNoCaps[char.toLowerCase()] += 1
      } else {
        letterCountNoCaps[char.toLowerCase()] = 1
      }
    }
  }

  console.log(sortObjectCount(wordCount))
  console.log("----------------------------------")
  console.log(sortObjectAlpha(wordCount))
  console.log("----------------------------------")
  console.log(sortObjectCount(letterCount))
  console.log("----------------------------------")
  console.log(sortObjectAlpha(letterCount))
  console.log("----------------------------------")
  console.log(sortObjectCount(wordCountNoCaps))
  console.log("----------------------------------")
  console.log(sortObjectAlpha(wordCountNoCaps))
  console.log("----------------------------------")
  console.log(sortObjectCount(letterCountNoCaps))
  console.log("----------------------------------")
  console.log(sortObjectAlpha(letterCountNoCaps))
  console.log("----------------------------------")
  console.log(unqWords)
}

weekendChallenge('text.txt')
