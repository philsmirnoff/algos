/**
 * Given a phone number string and a list of known words,
 * returns all words that correspond to that number using
 * the classic phone keypad mapping.
 *
 * Example:
 *   phoneNumberWords("54653346", ["linkedin", "linkedgo", "careers"])
 *   → ["linkedin", "linkedgo"]
 */
function phoneNumberWords(phoneNumber, knownWords) {
  // 1️⃣ Keypad mapping (letter → digit)
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

  // 2️⃣ Return [] early if invalid digits (0 or 1)
  if (phoneNumber.includes("0") || phoneNumber.includes("1")) return [];

  // 3️⃣ Helper: convert a word → phone number string
  const wordToDigits = (word) => {
    let num = "";
    for (const ch of word.toLowerCase()) {
      if (!(ch in keypad)) return null; // skip non-letter chars
      num += keypad[ch];
    }
    return num;
  };

  // 4️⃣ Filter knownWords that match the input phone number
  const matches = [];
  for (const word of knownWords) {
    if (wordToDigits(word) === phoneNumber) {
      matches.push(word);
    }
  }

  return matches;
}

/* ===========================
   Demo
   =========================== */
const KNOWN_WORDS = ["careers", "linkedin", "hiring", "interview", "linkedgo"];

console.log(phoneNumberWords("2273377", KNOWN_WORDS)); // ['careers']
console.log(phoneNumberWords("54653346", KNOWN_WORDS)); // ['linkedin', 'linkedgo']
console.log(phoneNumberWords("447464", KNOWN_WORDS)); // ['hiring']
console.log(phoneNumberWords("468378439", KNOWN_WORDS)); // ['interview']
console.log(phoneNumberWords("101", KNOWN_WORDS)); // []
