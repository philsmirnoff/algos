// 1356. Sort Integers by The Number of 1 Bits
// Easy

// 1446

// 64

// Add to List

// Share
// You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

// Return the array after sorting it.



// Example 1:

// Input: arr = [0,1,2,3,4,5,6,7,8]
// Output: [0,1,2,4,8,3,5,6,7]
// Explantion: [0] is the only integer with 0 bits.
// [1,2,4,8] all have 1 bit.
// [3,5,6] have 2 bits.
// [7] has 3 bits.
// The sorted array by bits is [0,1,2,4,8,3,5,6,7]
// Example 2:

// Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
// Output: [1,2,4,8,16,32,64,128,256,512,1024]
// Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.

var sortByBits = function(arr) {
  return arr.sort((a,b) => {
      let bitA = (a.toString(2).match(/[1]/g)?.length || 0);
      let bitB = (b.toString(2).match(/[1]/g)?.length || 0);

      if (bitA !== bitB) {
          return bitA - bitB
      } else {
          return a-b
      }
  })
};

The time complexity of this code is O(NlogN) where N is the number of elements in the array. The reason for this is that the sorting algorithm used is the built-in JavaScript sort method, which has an average time complexity of O(NlogN) for most cases.
The sorting algorithm sorts the array by comparing each element, which takes O(1) time to compare the number of bits in each element.

The space complexity of this code is O(1) because it only uses a few variables (bitA and bitB) to store the number of bits in each element and it sorts the input array in place. It doesn't use any data structure to store the result.
The regex operation used to match the number of 1's has a O(n) time complexity and O(n) space complexity.
