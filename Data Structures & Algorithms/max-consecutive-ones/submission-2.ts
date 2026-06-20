class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxLength = 0;
        let currentLength = 0;
        for (const num of nums) {
            currentLength = num == 1 ? currentLength + 1 : 0;
            maxLength = Math.max(maxLength, currentLength)
        }
        return maxLength;
    }
}
