/**
 * Given a phone number string and a list of known words,
 * returns all words that correspond to that number using a
 * precomputed phoneBook (hash map) built inside the function.
 *
 * Example:
 *   phoneNumberWords("54653346", ["linkedin", "linkedgo", "careers"])
 *   → ["linkedin", "linkedgo"]
 */

const cache = new Map();

function phoneNumberWords(phoneNumber, KNOWN_WORDS) {
  // 🔹 1. Classic keypad mapping
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

  // 🔹 2. Helper: convert a word into its numeric phone number form
  function wordToPhoneNumber(word) {
    let num = "";
    for (const ch of word.toLowerCase()) {
      if (!(ch in keypad)) return null; // skip non-letters
      num += keypad[ch];
    }
    return num;
  }

  // 🔹 3. Early validation: 0 or 1 cannot map to letters
  if (phoneNumber.includes("0") || phoneNumber.includes("1")) return [];

  // 🔹 4. Build the phoneBook (hash map)
  const phoneBook = new Map();
  for (const word of KNOWN_WORDS) {
    const num = wordToPhoneNumber(word);
    if (!num) continue;
    if (!phoneBook.has(num)) phoneBook.set(num, []);
    phoneBook.get(num).push(word);
  }

  // 🔹 5. Lookup result in O(1)
  return phoneBook.get(phoneNumber) || [];
}

/* ===========================
   Demo
   =========================== */
const KNOWN_WORDS = ["careers", "linkedin", "hiring", "interview", "linkedgo"];

console.log(phoneNumberWords("2273377", KNOWN_WORDS)); // ['careers']
console.log(phoneNumberWords("54653346", KNOWN_WORDS)); // ['linkedin', 'linkedgo']
console.log(phoneNumberWords("447464", KNOWN_WORDS)); // ['hiring']
console.log(phoneNumberWords("468378439", KNOWN_WORDS)); // ['interview']
console.log(phoneNumberWords("101", KNOWN_WORDS)); // [] (invalid digits)
// .

// 🧮 Complexity
// Step	Time	Space
// Build phoneBook	O(W × L)	O(W × L)
// Lookup	O(1)	O(1)
// Total	O(W × L)	O(W × L)

// W = number of words

// L = average word length

// Practically, as soon as you have more than one or two queries, precomputing usually pays off.

// Other benefits of precomputing

// Deterministic latency: Lookups are consistently fast (hash map get).

// Reuse: Same index serves UIs (autocomplete), APIs, or repeated tasks.

// Extensibility: Easy to add:

// Length bucketing → faster validation

// Prefix support (switch to a Trie if you need “partial number → word suggestions”)

// Caching across requests/sessions

// When not to precompute

// You only ever do one query.

// Memory is tight and W is huge.

// Dictionary changes constantly (unless you can incrementally update/rebuild in the background).

// What to say in the interview

// “If we expect multiple lookups on the same dictionary, I’ll precompute a Map<numberString, words[]>. Building it is O(W·L) once; then each query is O(1) on average. Compared to scanning the entire dictionary per query (O(W·L) each time), precomputing reduces total cost from O(Q·W·L) to O(W·L + Q)—a massive win even for a small number of queries. The trade-off is O(W·L) memory, which I’ll accept if queries are frequent or latency matters.”
