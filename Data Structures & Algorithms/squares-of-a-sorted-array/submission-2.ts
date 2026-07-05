class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {
        const n = nums.length;
        const res = new Array(n);
        let l = 0,
            r = n - 1,
            resIndex = n - 1;

        while(l <= r) {
            if (Math.abs(nums[l]) > Math.abs(nums[r])) {
                res[resIndex] = nums[l] * nums[l];
                l++;
            } else {
                res[resIndex] = nums[r] * nums[r];
                r--;
            }
            resIndex--;
        }
        return res;
    }
}
