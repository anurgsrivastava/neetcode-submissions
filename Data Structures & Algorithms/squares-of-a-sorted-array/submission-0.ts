class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {
        nums.sort((a, b) => Math.abs(a) - Math.abs(b));

        for(let i = 0; i < nums.length; i++) {
            nums[i] = Math.pow(nums[i], 2); 
        }

        return nums;

    }
}
