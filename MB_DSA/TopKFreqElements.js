// 692
function topKFrequent(words, k) {
  // // Count the frequency of each number using a hash map
  // const frequencyMap = new Map();
  // for (const num of nums) {
  //   frequencyMap.set(num, frequencyMap.get(num) + 1 || 1);
  // }

  // // Create an array of unique numbers
  // const uniqueNums = [...frequencyMap.keys()];

  // // Sort the unique numbers based on their frequency in descending order
  // uniqueNums.sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a));

  // // Return the top k frequent elements
  // return uniqueNums.slice(0, k);

  const wordCounts = new Map();

  // Create a map with counts of each word
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    if (!wordCounts[currentWord]) {
      wordCounts[currentWord] = 0;
    }
    wordCounts[currentWord]++;
  }

  const wordArray = [];
  for (let key in wordCounts) {
    const count = wordCounts[key]
    let word = new Word(key, count);
    wordArray.push(word);
  }

  // Sort the array by count, then alphabetically
  wordArray.sort((a, b) => b.count == a.count ? a.word.localeCompare(b.word) : b.count - a.count);

  let i = 0;
  const output = [];
  while (i < k) {
    output.push(wordArray[i].word);
    i++;
  }
  return output

}

class Word {
  constructor(word, count) {
    this.word = word;
    this.count = count;
  }
}
