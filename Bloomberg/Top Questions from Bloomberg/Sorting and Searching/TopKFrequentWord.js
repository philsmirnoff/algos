// Top K Frequent Words

// Solution
// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.



// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.


/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const wordCounts = {};

  // Count the frequency of each word in the array
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }

  // Sort the words by frequency and then by lexicographic order
  const sortedWords = Object.keys(wordCounts).sort((a, b) => {
    if (wordCounts[b] === wordCounts[a]) {
      return a.localeCompare(b);
    } else {
      return wordCounts[b] - wordCounts[a];
    }
  });

  // Return the top k frequent words
  return sortedWords.slice(0, k);
};

// The solution first counts the frequency of each word in the input array using an object wordCounts. It then sorts the words in descending order of their frequency, and if two words have the same frequency, it sorts them in ascending order of their lexicographic order using the sort method with a comparison function that compares the frequencies and the words' lexicographic order.

// Finally, the function returns the first k elements of the sorted array using the slice method.

// The time complexity of this solution is O(n log n), due to the sorting step, where n is the length of the input array. The space complexity is O(n), for storing the frequency counts and the sorted words.
