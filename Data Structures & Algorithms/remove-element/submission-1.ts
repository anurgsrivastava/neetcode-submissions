class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let count = 0;
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] != val) {
                res.push(nums[i]);
            } else {
                count += 1;
            }
        }
        for (let j = 0; j < res.length; j++) {
            nums[j] = res[j];
        }
        return res.length;
    }
}
