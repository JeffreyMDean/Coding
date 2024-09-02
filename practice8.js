// Two Sum  
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// var nums = [2,7,11,15];      2, 0
// var target = 9;              0, 1

var twoSum = function(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];     // retreiving data
    }

    numMap.set(nums[i], i); // inserting data
  }

  return [];
};

console.log(twoSum([2,7,11,15], 9));