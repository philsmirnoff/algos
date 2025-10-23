// write a program that outputs all words that can be formed from any n-digit phone number from the list of given KNOWN_WORDS considering the mapping mentioned above.KNOWN_WORDS= ['careers', 'linkedin', 'hiring', 'interview', 'linkedgo']phoneNumber: 2273377Output: ['careers']phoneNumber: 54653346Output: ['linkedin', 'linkedgo']

// T9 keypad mapping: letter -> digit

// Letter → digit mapping for classic phone keypad
const keypad = {
  a: "2",
  b: "2",
  c: "2",
  d: "3",
  e: "3",
  f: "3",
  g: "4",
  h: "4",
  i: "4",
  j: "5",
  k: "5",
  l: "5",
  m: "6",
  n: "6",
  o: "6",
  p: "7",
  q: "7",
  r: "7",
  s: "7",
  t: "8",
  u: "8",
  v: "8",
  w: "9",
  x: "9",
  y: "9",
  z: "9",
};

/**
 * Convert a word into its numeric phone number representation.
 * Example: "linkedin" → "54653346"
 */
function wordToPhoneNumber(word) {
  let phoneNumber = "";
  for (const ch of word.toLowerCase()) {
    if (!(ch in keypad)) return null; // skip invalid characters
    phoneNumber += keypad[ch];
  }
  return phoneNumber;
}

/**
 * Build a phoneBook mapping phone numbers → list of matching words.
 */
function buildPhoneBook(knownWords) {
  const phoneBook = new Map();
  for (const word of knownWords) {
    const phoneNumber = wordToPhoneNumber(word);
    if (!phoneNumber) continue;
    if (!phoneBook.has(phoneNumber)) phoneBook.set(phoneNumber, []);
    phoneBook.get(phoneNumber).push(word);
  }
  return phoneBook;
}

/**
 * Check the phoneBook for words that correspond to a given phone number.
 * (Returns [] if number includes 0 or 1, which have no letter mappings.)
 */
function phoneBookChecker(phoneNumber, phoneBook) {
  if (phoneNumber.includes("0") || phoneNumber.includes("1")) return [];
  return phoneBook.get(phoneNumber) || [];
}

/* ===========================
   Demo
   =========================== */
const KNOWN_WORDS = ["careers", "linkedin", "hiring", "interview", "linkedgo"];
const phoneBook = buildPhoneBook(KNOWN_WORDS);

console.log(phoneBookChecker("2273377", phoneBook)); // ['careers']
console.log(phoneBookChecker("54653346", phoneBook)); // ['linkedin', 'linkedgo']
console.log(phoneBookChecker("447464", phoneBook)); // ['hiring']
console.log(phoneBookChecker("468378439", phoneBook)); // ['interview']
console.log(phoneBookChecker("101", phoneBook)); // [] (contains 0/1)

// For building the signature index, I iterate through every known word once and map each letter to its corresponding digit.

// If there are N words and each word has length L on average, that step runs in O(N × L) time — basically linear in the total number of characters across all words.

// I store each word exactly once in the map, so the space complexity is also O(N × L).

// For queries, the lookup is just a hash map get() by the number string, which is O(1) on average.
// Even if multiple words share the same digit signature, I just return that small list — so query time is O(M), where M is the number of matching words.

// Overall, it’s optimal for this problem: linear preprocessing, then constant-time lookups.
// Metric	Complexity	Explanation
// Time (build phase)	O(N × L)	You visit every character of every word once while converting to digits. N = number of words, L = average length of a word.
// Space (index)	O(N × L)	You store each word once inside a Map bucket, so total memory is proportional to all characters combined.
