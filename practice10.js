// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Are there any contraints on the size of the input?

// Can the arrary input contain negative numbers or 0?

// Can we assume there will always be a valid input?

// Should the indice be returned in ascending order or does it not matter?

// Can I return an empty array if there is no solution?

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], targ

// Input: nums = [3,3], target = 6
// Output: [0,1]

let twoSum = function(nums, target) {
  const numMap = new Map();
  console.log("numMap", numMap); // 
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  return [];
};

console.log(twoSum([3,2,4,11,15,20,30], 50));

// Big O(N)
// time: O(N)
// space: N