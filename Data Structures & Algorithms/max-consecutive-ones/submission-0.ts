class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxLength = 0;
        let currentLength = 0;
        for (let i = 0; i < nums?.length; i++) {
            if(nums[i] == 1) {
                currentLength += 1;
                maxLength = currentLength > maxLength ? currentLength : maxLength;
            } else {
                currentLength = 0;
            }
        }
        return maxLength;
    }
}
