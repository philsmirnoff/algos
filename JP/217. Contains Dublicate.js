217. Contains Duplicate
Easy

6238

1009

Add to List

Share
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


var containsDuplicate = function(nums) {
    let map = {};
    for (let char of nums) {
        if (!(char in map)) {
            map[char] = 0;
        }
        map[char]++;
    }

    for (let char in map) {
        if (map[char] > 1) {
            return true
        }

    }
  return false
    }

    The time complexity of this solution is O(N) where N is the number of elements in the input array, nums. This is because it iterates through the input array once in the first loop, and then again in the second loop. The first loop has a time complexity of O(N) as it visits each element in the array exactly once. The second loop also has a time complexity of O(N) as it visits each key in the map object which is constructed from the input array, but this map object will contain at most N keys, one for each element in the input array.

The space complexity of this solution is O(N) as well. This is because it creates a map object from the input array, and the size of this map object is directly proportional to the number of elements in the input array. The map object will contain at most N keys, one for each element in the input array. Each key takes some constant amount of space, so the space complexity is O(N).

Overall, this solution has a linear time and space complexity, which is efficient for arrays of a moderate size, but would not be ideal for very large input arrays.



