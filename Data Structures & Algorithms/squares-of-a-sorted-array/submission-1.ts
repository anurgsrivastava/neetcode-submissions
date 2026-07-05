class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {
        let l = 0,
            r = nums.length - 1;
        const res = [];

        while(l <= r) {
            if (nums[l] * nums[l] > nums[r] * nums[r]) {
                res.push(nums[l] * nums[l]);
                l++;
            } else {
                res.push(nums[r] * nums[r]);
                r--;
            }
        }
        return res.reverse();
    }
}
