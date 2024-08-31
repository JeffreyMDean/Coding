// Two Sum  
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];  
    }         // calls get method on numMap object to retrieve the value associated with the complement key
              // returning array of 2 elements:
              // 1) the index of the number in 'nums' that when added to nums[i], equals the target
              // 2) current index in the 'nums' array
              // returns [1, 0]

    numMap.set(nums[i], i);
  }        // during first iteration, numMap does not have 7, so you store 2 in 'NumMap' with its index: 'NumMap(2, 0)'
          // second iteration: nums[1] is 7, complement needed is 9 - 7 = 2, function returns [0, 1], where 0 is the index from 'NumMap' and 1 is the current index 'i'

  return [];
};

console.log(twoSum([2,7,11,15], 9));

