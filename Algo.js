// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

const nums1 = [2, 11, 7, 15];

const targetSum1 = 9;

const expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];


/*****************************************************************************/

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */
function twoSum(nums, targetSum) {
    const numMap = {}; // Store each number and its index in a map
    
    for (let i = 0; i < nums.length; i++) {
      const complement = targetSum - nums[i];
      
      if (numMap.hasOwnProperty(complement)) {
        // Found a pair that adds up to the targetSum
        return [numMap[complement], i];
      }
      
      // Store the current number and its index in the map
      numMap[nums[i]] = i;
    }
    
    // No pair found, return an empty array
    return [];
  }
  
console.log(twoSum(nums1, targetSum1));
console.log(twoSum(nums2, targetSum2));
console.log(twoSum(nums3, targetSum3));


module.exports = { twoSum };