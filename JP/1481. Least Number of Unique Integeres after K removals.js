// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.



// Example 1:

// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.
// Example 2:
// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.

const findLeastNumOfUniqueInts = function(arr, k) {
  let m = {}
    for (let a of arr) {
        m[a] =(m[a]||0)+1
    }
    let frequencyArr = Object.values(m).sort((a,b)=>a-b)
    for (let i= 0; i < frequencyArr.length; i++) {
        k -= frequencyArr[i]
        if(k < 0) return  frequencyArr.length - i
    }
    return 0
}


// The time complexity of the function findLeastNumOfUniqueInts is O(n log n) and the space complexity is O(n).

// The time complexity is O(n log n) because the function uses a for loop to iterate through the input array, which takes O(n) time, and it also sorts the array of values, which takes O(n log n) time using the JavaScript sort function. So the overall time complexity is O(n + n log n) = O(n log n).

// The space complexity is O(n) because the function uses an object (m) to store the count of each element in the input array, and the number of keys in the object will be equal to the number of unique elements in the array, which is at most n. And it also uses another array(frequencyArr) to store the count of each element in the input array, which will also be at most n. So the overall space complexity is O(n).
