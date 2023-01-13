// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.



// Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:

// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]


const uncommonFromSentences = function(s1, s2) {
  const wordCount = new Map();
 s1.split(' ').concat(s2.split(' ')).forEach(word => {
     wordCount.set(word, (wordCount.get(word) || 0) + 1);
 });
 return [...wordCount.keys()].filter(word => wordCount.get(word) === 1);
};

This solution uses a Map to count the frequency of each word in the two sentences. It first concatenates the two sentences and splits them into an array of individual words. Then it iterates through this array and for each word, it increments the count in the wordCount map.

Then it filters the keys of the wordCount map and return only the ones that have a count of 1, which are the words that are unique to one sentence and not in the other one.

This solution has a time complexity of O(N) where N is the total number of words in the two sentences. It also has a space complexity of O(N) as well, as it creates a Map object that stores the frequency of each word in the two sentences, and the size of the map is directly proportional to the number of words in the two sentences.
