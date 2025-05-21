var rob = function(nums) {
    // Base case: If there is only one house, rob it and return its value.
    if (nums.length === 1) return nums[0];

    // Helper function to compute the maximum amount of money that can be robbed
    // from a linear list of houses (not considering the circular nature of the problem).
    const robHelper = (nums) => {
        let prev1 = 0;  // Stores the maximum loot up to the previous house (i-1).
        let prev2 = 0;  // Stores the maximum loot up to two houses before (i-2).

        // Iterate through the houses (represented by `num`) and compute the maximum loot.
        for (let num of nums) {
            let temp = prev1;  // Store the current `prev1` value, as it will be updated in the next line.

            // Calculate the maximum loot for robbing the current house (adding it to prev2)
            // or skipping the current house (taking the loot from prev1).
            prev1 = Math.max(prev2 + num, prev1);  // Rob or skip the current house.

            // Update `prev2` to the old value of `prev1` for the next iteration.
            prev2 = temp;  // `prev2` now holds the value of the previous `prev1`.
        }
        return prev1;  // Return the maximum loot obtained by robbing houses in a linear arrangement.
    };

    // Solve the circular problem by considering two cases:
    // Case 1: Rob houses from index 0 to n-2 (exclude the last house).
    // Case 2: Rob houses from index 1 to n-1 (exclude the first house).
    // We take the maximum of the two cases, and return it.
    return Math.max(robHelper(nums.slice(0, -1)), robHelper(nums.slice(1)), nums[0]);
};
Explanation:
Base Case:

If the input array nums has only one house, we simply return the value of that house because there’s no other option. This handles edge cases like [1] or [5].

robHelper Function:
This function calculates the maximum loot you can rob from a linear arrangement of houses (ignoring the circular constraint):

prev1 and prev2: These variables store the maximum loot at different stages:

prev1 keeps the loot for robbing up to the previous house (house i-1).

prev2 keeps the loot for robbing up to two houses before the current one (house i-2).

Iteration:

The loop iterates through each house (represented by num in nums).

temp = prev1: We store the value of prev1 because it will be overwritten in the next line.

The logic prev1 = Math.max(prev2 + num, prev1) calculates whether it’s better to rob the current house (adding its value to prev2) or skip it and keep the loot from prev1.

prev2 = temp: We update prev2 to the old value of prev1, as we move to the next house.

Finally, the function returns prev1, which holds the maximum loot that can be robbed in a linear arrangement.

Circular Array Handling:

The main challenge of this problem is the circular nature of the houses. To handle this, we calculate the maximum loot for two cases:

Case 1: Rob houses from index 0 to n-2 (exclude the last house). This is done by slicing the array from index 0 to n-1 and passing it to robHelper.

Case 2: Rob houses from index 1 to n-1 (exclude the first house). This is done by slicing the array from index 1 to n.

Final Step: We return the maximum value between the two cases and also consider the case where we rob the first house (which is nums[0]). This ensures that we account for both possible scenarios in a circular street.

Example Walkthrough:
Let’s walk through an example with nums = [2, 3, 2].

Case 1: Rob houses from index 0 to n-2 → nums.slice(0, 2) → [2, 3]

robHelper([2, 3]): We calculate the maximum loot for this linear array, which is 3.

Case 2: Rob houses from index 1 to n-1 → nums.slice(1) → [3, 2]

robHelper([3, 2]): We calculate the maximum loot for this linear array, which is 3.

Result: The final result is Math.max(3, 3, 2) which is 3.

Time and Space Complexity:
Time Complexity:

The robHelper function is called twice, each time for a slice of the nums array. Each call to robHelper takes
𝑂
(
𝑛
)
O(n), where
𝑛
n is the length of the input array.

Therefore, the total time complexity is
𝑂
(
𝑛
)
O(n), because we process the list twice.

Space Complexity:

The space complexity is
𝑂
(
𝑛
)
O(n) due to the slice operations, which create new arrays of size
𝑛
−
1
n−1. The space used by robHelper itself is
𝑂
(
1
)
O(1), as we are only using a few variables (prev1, prev2, temp) to track the current and previous results.

This solution is efficient for this problem and handles the circular nature of the houses while minimizing space complexity.













