class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let A = [];
        for (let i = 0; i < nums.length; i++) {
            A.push([nums[i], i]);
        }

        A.sort((a, b) => a[0] - b[0]);
    
        let l = 0;
        let r = nums.length - 1;
        
        while(l < r) {
            let sum = A[l][0] + A[r][0];
            if(sum === target) {
                return [Math.min(A[l][1], A[r][1]), Math.max(A[l][1], A[r][1])];
            }
            else if(sum < target) {
                l++;
            } else {
                r--;
            }
        }
        return [];
    }
}
