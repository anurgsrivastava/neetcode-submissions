class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let arrLen = nums?.length ?? 0;
        let res = new Array(arrLen * 2).fill(0);
        for(let i = 0; i < arrLen; i++) {
            res[i] = nums[i];
            res[i + arrLen] = nums[i];
        }
        return res; // nums.concat(nums);
    }
}
