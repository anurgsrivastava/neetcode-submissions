class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        let res = 0;
        let currentSum = 0;
        const prefixSums = new Map();
        prefixSums.set(0, 1)
        for(let i = 0; i < nums.length; i++) {
            currentSum += nums[i];
            let diff = currentSum - k;
            res += prefixSums.get(diff) ?? 0;
            prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1);
        }
        return res;
    }
}
