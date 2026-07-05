class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        for(let l = 0, r = 0; r < nums.length; r++) {
            if (nums[r] !== 0) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
                l++;
            }
        }
    }
}
