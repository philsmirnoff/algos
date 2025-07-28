const productExceptSelf = (nums) => {
    // Example input: [1, 2, 3, 4]
    // Goal: Return an array where each element at index i is the product
    // of all elements in the array except nums[i] — without using division.

    // We'll use three arrays:
    // leftProduct[i] = product of all elements to the left of index i
    // rightProduct[i] = product of all elements to the right of index i
    // solution[i] = leftProduct[i] * rightProduct[i]

    let leftProduct = [];
    let rightProduct = [];
    let solution = [];

    // Step 1: Populate leftProduct
    // leftProduct[0] = 1 (no elements to the left of first element)
    for (let i = 0; i < nums.length; i++) {
        if (leftProduct.length === 0) {
            // First element gets 1
            leftProduct.push(1);
        } else {
            // Multiply previous left product with the previous number in nums
            // Example:
            // i = 1: leftProduct[1] = leftProduct[0] * nums[0] = 1 * 1 = 1
            // i = 2: leftProduct[2] = leftProduct[1] * nums[1] = 1 * 2 = 2
            // i = 3: leftProduct[3] = leftProduct[2] * nums[2] = 2 * 3 = 6
            leftProduct.push(leftProduct[i - 1] * nums[i - 1]);
        }
    }

    // Step 2: Populate rightProduct (from right to left)
    // rightProduct[last] = 1 (no elements to the right of last element)
    for (let i = nums.length - 1; i > -1; i--) {
        if (rightProduct.length === 0) {
            // Last element gets 1
            rightProduct.push(1);
        } else {
            // Multiply the first value in rightProduct (which was pushed from the right)
            // with the number after the current index in nums
            // Use unshift() to add to the beginning to maintain order
            // Example:
            // i = 2: rightProduct.unshift(rightProduct[0] * nums[3]) = 1 * 4 = 4
            // i = 1: rightProduct.unshift(4 * nums[2]) = 4 * 3 = 12
            // i = 0: rightProduct.unshift(12 * nums[1]) = 12 * 2 = 24
            rightProduct.unshift(rightProduct[0] * nums[i + 1]);
        }
    }

    // Step 3: Multiply corresponding elements from leftProduct and rightProduct
    // This gives the final result
    // solution[i] = leftProduct[i] * rightProduct[i]
    // Example:
    // solution[0] = 1 * 24 = 24
    // solution[1] = 1 * 12 = 12
    // solution[2] = 2 * 4 = 8
    // solution[3] = 6 * 1 = 6
    for (let i = 0; i < leftProduct.length; i++) {
        solution.push(leftProduct[i] * rightProduct[i]);
    }

    // Return the final product array
    return solution;
};

Time complexity: O(n)
Space complexity: O(n)

solution: 2
const productExceptSelf = (nums) => {
    // Create an output array of the same length as input, filled with 1s.
    // This will eventually hold our final answer.
    const output = Array(nums.length).fill(1);

    // 'left' will hold the running product of elements to the LEFT of the current index.
    // Initialize it to 1 because there are no elements to the left of index 0.
    let left = 1;

    // First pass: left-to-right
    for (let i = 0; i < nums.length; i++) {
        // At index i, set output[i] to the product of all elements to the left of i.
        output[i] = left;

        // Update 'left' to include nums[i] in the running product for the next index.
        left *= nums[i];

        // Example with nums = [1, 2, 3, 4]
        // After loop:
        // output = [1, 1, 2, 6]  ← same as leftProduct array from the other solution
    }

    // 'right' will hold the running product of elements to the RIGHT of the current index.
    // Initialize it to 1 because there are no elements to the right of the last index.
    let right = 1;

    // Second pass: right-to-left
    for (let i = nums.length - 1; i >= 0; i--) {
        // Multiply the current value in output[i] by the product of all elements to the right.
        output[i] *= right;

        // Update 'right' to include nums[i] in the running product for the next index to the left.
        right *= nums[i];

        // Example with nums = [1, 2, 3, 4]
        // After loop:
        // output = [24, 12, 8, 6] ← final result
    }

    // Return the output array, which contains the product of all elements except self.
    return output;
};

Time complexity: O(n)
Space complexity: O(1)


const productExceptSelf = (nums) => {
    // Create an output array of the same length as input, filled with 1s.
    // This will eventually hold our final answer.
    const output = Array(nums.length).fill(1);

    // 'left' will hold the running product of elements to the LEFT of the current index.
    // Initialize it to 1 because there are no elements to the left of index 0.
    let left = 1;

    // First pass: left-to-right
    for (let i = 0; i < nums.length; i++) {
        // At index i, set output[i] to the product of all elements to the left of i.
        output[i] = left;

        // Update 'left' to include nums[i] in the running product for the next index.
        left *= nums[i];

        // Example with nums = [1, 2, 3, 4]
        // After loop:
        // output = [1, 1, 2, 6]  ← same as leftProduct array from the other solution
    }

    // 'right' will hold the running product of elements to the RIGHT of the current index.
    // Initialize it to 1 because there are no elements to the right of the last index.
    let right = 1;

    // Second pass: right-to-left
    for (let i = nums.length - 1; i >= 0; i--) {
        // Multiply the current value in output[i] by the product of all elements to the right.
        output[i] *= right;

        // Update 'right' to include nums[i] in the running product for the next index to the left.
        right *= nums[i];

        // Example with nums = [1, 2, 3, 4]
        // After loop:
        // output = [24, 12, 8, 6] ← final result
    }

    // Return the output array, which contains the product of all elements except self.
    return output;
};

Time complexity: O(n)
Space complexity: O(1)

