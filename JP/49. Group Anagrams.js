// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

var groupAnagrams = function(strs) {
  if (strs.length === 0) return []
  let sorted = strs.map(word => word.split('').sort().join(''))
  let map = {};

  for (let i = 0; i < strs.length; i++) {
      let str = sorted[i];
      if (!(map[str])) {
          map[str] = [strs[i]];
      } else {
          map[str].push(strs[i])
      }
  }
  return Object.values(map)
};

The time complexity of this function groupAnagrams is O(nm log m) and the space complexity is O(nm)

// The function first maps the input array of strings by sorting each string, which takes O(n*m log m) time because for each of the n strings, we sort m characters.

// Then it iterates through the sorted array of strings using a for loop, which takes O(n) time. Inside the loop, it checks if a given sorted string is in the map object, if it is not, it creates a new entry in the map object with that sorted string as the key and its corresponding original string as the value. If the key already exists in the map, it pushes the original string into the array that is the value of that key. So, the time complexity of this loop is O(n).

// After the loop, it returns the values of the map object, which takes O(n) time.

// The space complexity is O(n*m) because we use a map object to store the n strings, where each string has m characters.

// It's worth noting that the function assumes that all the strings are distinct, if there are duplicate strings, the function will return incorrect results.
