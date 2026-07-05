class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums: number[]): number[] {
        const count = {};
        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }
        nums.sort((a, b) => {
            if (count[a] !== count[b]) return count[a] - count[b];
            return b - a;
        });
        return nums;
    }
}
