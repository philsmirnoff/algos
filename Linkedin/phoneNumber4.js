// with caching the known words

// Cache: KNOWN_WORDS array (object) -> phoneBook (Map<numberString, string[]>)
const _indexCache = new Map();

function wordToPhoneNumber(word, keypad) {
  let digits = "";
  for (const ch of word.toLowerCase()) {
    const mapped = keypad[ch];
    if (!mapped) return null;
    digits += mapped;
  }
  return digits;
}

function phoneNumberWords(phoneNumber, KNOWN_WORDS) {
  const keypad = {
    /* ...mapping... */
  };

  for (const d of phoneNumber) if (d < "2" || d > "9") return [];

  let phoneBook = _indexCache.get(KNOWN_WORDS);
  if (!phoneBook) {
    phoneBook = new Map();
    for (const word of KNOWN_WORDS) {
      const digits = wordToPhoneNumber(word, keypad);
      if (!digits) continue;
      if (!phoneBook.has(digits)) phoneBook.set(digits, []);
      phoneBook.get(digits).push(word);
    }
    _indexCache.set(KNOWN_WORDS, phoneBook);
  }

  return phoneBook.get(phoneNumber) || [];
}
// Why this is best:
// ✅ wordToPhoneNumber is reusable and testable
// ✅ The if (!phoneBook) block only holds build logic
// ✅ Keeps function scope clean and predictable
// ✅ Perfectly readable in interviews
