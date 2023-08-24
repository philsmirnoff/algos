// "Given a string, find the deepest string nested inside a '()', '[]' or '{}'."

// e.g.
// '''
// "abc(def)ghi" => ["def"]
// "abc(def[ghi]jkl)mno" => ["ghi"]
// "abc(def)ghi[jkl]mno" => ["def", "jkl"]
// "abc" => ["abc"]
// "" => [""]
// (),[],{}
// '''


function findDeepestNestedString(input) {
  const stack = []; // Initialize a stack to keep track of opening brackets and their indices
  const depths = new Map(); // Initialize a map to store nested strings at different depths
  let maxDepth = 0; // Initialize the maximum depth encountered

  for (let i = 0; i < input.length; i++) {
    const char = input[i]; // Get the current character from the input string

    // If the character is an opening bracket, push it onto the stack with its index
    if (char === '(' || char === '[' || char === '{') {
      stack.push({ char, index: i });
    }
    // If the character is a closing bracket
    else if (char === ')' || char === ']' || char === '}') {
      const openingBracket = stack.pop(); // Pop the corresponding opening bracket from the stack

      if (openingBracket) {
        const depth = stack.length; // Calculate the depth based on the current stack size
        maxDepth = Math.max(maxDepth, depth); // Update the maximum depth encountered

        // If the depth is not already in the depths map, initialize an array at that depth
        if (!depths.has(depth)) {
          depths.set(depth, []);
        }

        // Store the substring between the brackets in the depths map at the calculated depth
        depths.get(depth).push(input.substring(openingBracket.index + 1, i));
      }
    }
  }

  // Retrieve and return the deepest nested strings from the depths map, or an empty array if none
  return depths.get(maxDepth) || [];
}

// Test cases
console.log(findDeepestNestedString("abc(def)ghi")); // Should print ["def"]
console.log(findDeepestNestedString("abc(def[ghi]jkl)mno")); // Should print ["ghi"]
console.log(findDeepestNestedString("abc(def)ghi[jkl]mno")); // Should print ["def", "jkl"]
console.log(findDeepestNestedString("abc")); // Should print ["abc"]
console.log(findDeepestNestedString("")); // Should print []
