// write a program that outputs all words that can be formed from any n-digit phone number from the list of given KNOWN_WORDS considering the mapping mentioned above.KNOWN_WORDS= ['careers', 'linkedin', 'hiring', 'interview', 'linkedgo']phoneNumber: 2273377Output: ['careers']phoneNumber: 54653346Output: ['linkedin', 'linkedgo']

// T9 keypad mapping: letter -> digit
const T9 = {
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
 * Convert a word to its T9 numeric signature (e.g., "careers" -> "2273377").
 * Returns null if the word contains unsupported chars (non [a-zA-Z]).
 */
function wordToDigits(word) {
  let s = "";
  for (const ch of word.toLowerCase()) {
    if (!(ch in T9)) return null; // reject digits/punct/etc.
    s += T9[ch]; // build the signature as a string
  }
  return s;
}

/**
 * Build a signature index: digits -> array of words with that signature.
 * Example: index.get("54653346") => ["linkedin", "linkedgo"]
 */
function buildSignatureIndex(knownWords) {
  const index = new Map();
  for (const w of knownWords) {
    const sig = wordToDigits(w);
    if (sig == null) continue; // skip words with non-letters
    if (!index.has(sig)) index.set(sig, []);
    index.get(sig).push(w);
  }
  return index;
}

/**
 * Return all KNOWN_WORDS that match the given phone number.
 * Notes: classic T9 has no letters for 0/1 → return [] if present.
 */
function t9Matches(number, signatureIndex) {
  if (/[01]/.test(number)) return []; // no letter mapping on 0/1
  return signatureIndex.get(number) || [];
}

/* ===========================
   Demo (from your examples)
   =========================== */
const KNOWN_WORDS = ["careers", "linkedin", "hiring", "interview", "linkedgo"];
const INDEX = buildSignatureIndex(KNOWN_WORDS);

console.log(t9Matches("2273377", INDEX)); // ['careers']
console.log(t9Matches("54653346", INDEX)); // ['linkedin', 'linkedgo']

// Extra checks:
console.log(t9Matches("447464", INDEX)); // ['hiring']
console.log(t9Matches("468378439", INDEX)); // ['interview']
console.log(t9Matches("101", INDEX)); // [] (contains 0/1 → no mapping)

// For building the signature index, I iterate through every known word once and map each letter to its corresponding digit.

// If there are N words and each word has length L on average, that step runs in O(N × L) time — basically linear in the total number of characters across all words.

// I store each word exactly once in the map, so the space complexity is also O(N × L).

// For queries, the lookup is just a hash map get() by the number string, which is O(1) on average.
// Even if multiple words share the same digit signature, I just return that small list — so query time is O(M), where M is the number of matching words.

// Overall, it’s optimal for this problem: linear preprocessing, then constant-time lookups.
// Metric	Complexity	Explanation
// Time (build phase)	O(N × L)	You visit every character of every word once while converting to digits. N = number of words, L = average length of a word.
// Space (index)	O(N × L)	You store each word once inside a Map bucket, so total memory is proportional to all characters combined.
