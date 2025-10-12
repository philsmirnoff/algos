var trap = function (height) {
  // initialize variables to keep track of left and right maximum heights and water trapped
  let leftMax = 0;
  let rightMax = 0;
  let left = 0;
  let right = height.length - 1;
  let water = 0;

  // iterate through the elevation map with two pointers
  while (left < right) {
    // update left maximum height if current height is greater
    leftMax = Math.max(leftMax, height[left]);
    // update right maximum height if current height is greater
    rightMax = Math.max(rightMax, height[right]);
    // calculate water trapped on current bar
    if (leftMax < rightMax) {
      water += leftMax - height[left];
      left++;
    } else {
      water += rightMax - height[right];
      right--;
    }
  }

  // return total water trapped
  return water;
};

// Complexity Analysis
// Time Complexity: O(n) where n is the number of bars in the elevation map.
// Space Complexity: O(1) since we are not using any extra space.

// Explanation
// The trap function takes an array height as input, which represents the elevation map.

// The function initializes variables to keep track of the left and right maximum heights and the water trapped.

// The function initializes two pointers left and right to the first and last indices of the array, respectively.

// The function enters a loop that continues until the left pointer is less than the right pointer.

// During each iteration of the loop, the function updates the left maximum height and right maximum height as the maximum of their current values and the height at their respective pointers.

// The function then calculates the water trapped on the current bar as the minimum of the left and right maximum heights minus the height of the current bar. The pointer with the smaller maximum height is moved inwards, and the water trapped is added to the total water trapped.

// After the loop, the function returns the total water trapped.

// This algorithm has a time complexity of O(n) and a space complexity of O(1), where n is the length of the input array. It is an efficient and elegant solution to the problem.
