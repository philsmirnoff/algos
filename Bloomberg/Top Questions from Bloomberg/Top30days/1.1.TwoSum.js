


const twoSum = (nums, target) => {
    let arr = nums.map((val, idx) => [val, idx])
    arr.sort((a, b) => a[0] - b[0])
    let left = 0;
    let right = arr.length - 1

    while (left < right) {
        let currSum = arr[left][0] + arr[right][0]

        if (currSum === target) {
             return [arr[left][1], arr[right][1]];
        } else if (currSum > target) {
            right--
        } else {
            left++
        }
    }
}



const twoSum = (nums, target) => {
    const hashmap = {}

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let complementPair = target - num
        if (complementPair in hashmap) {
            return [hashmap[complementPair], i]
        }
        hashmap[num] = i
    }
}
