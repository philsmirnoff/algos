// with caching the known words

// Cache: KNOWN_WORDS array (object) -> phoneBook (Map<numberString, string[]>)
const _indexCache = new WeakMap();

function phoneNumberWords(phoneNumber, KNOWN_WORDS) {
  // 1) Classic keypad mapping (constant-size; could also be hoisted)
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

  // 2) Validate phoneNumber: only digits 2–9 allowed (no 0/1 or non-digits)
  for (const d of phoneNumber) if (d < "2" || d > "9") return [];

  // 3) Build or reuse phoneBook for this KNOWN_WORDS
  let phoneBook = _indexCache.get(KNOWN_WORDS);
  if (!phoneBook) {
    phoneBook = new Map();

    const wordToPhoneDigits = (word) => {
      let digits = "";
      for (const ch of word.toLowerCase()) {
        const mapped = keypad[ch];
        if (!mapped) return null; // non-letter -> skip
        digits += mapped;
      }
      return digits;
    };

    for (const word of KNOWN_WORDS) {
      const digits = wordToPhoneDigits(word);
      if (!digits) continue;
      if (!phoneBook.has(digits)) phoneBook.set(digits, []);
      phoneBook.get(digits).push(word);
    }

    _indexCache.set(KNOWN_WORDS, phoneBook);
  }

  // 4) O(1) lookup
  return phoneBook.get(phoneNumber) || [];
}
