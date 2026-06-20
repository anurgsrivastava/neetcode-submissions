class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] == val) {
                nums[i] = 101;
            } else {
                count += 1;
            }
        }
        nums.sort((a, b) => a - b);
        // console.log(nums, count);
        return count;
    }
}
