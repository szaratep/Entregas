//https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [3,3];
let target = 6;
let result = [];

var twoSum = function(nums, target) {
    if ((nums.length >=  2 && nums.length <= 10**4) && (target >= ((-10)**9) && target <= 10**9)){
        for(let i = 0; i < nums.length; i++){
            result = [];
            for(let j = 1; j < nums.length; j++){
                if (nums[i] >= ((-10)**9) && nums[i] <= 10**9 && target === (nums[i] + nums[j])){
                    result.push(i);
                    result.push(j);
                    return result;
                }
            }
        }
    }
    return result;
};

console.log(twoSum(nums, target));