class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1: number[], nums2: number[]): number[] {
        const nums1Idx = new Map();
        nums1.forEach((num, i) => nums1Idx.set(num, i));
        const res = new Array(nums1.length).fill(-1);
        const stack = [];
        for (let num of nums2) {
            while (stack.length && num > stack[stack.length - 1]) {
                const val = stack.pop();
                const idx = nums1Idx.get(val);
                res[idx] = num;
            }
            if (nums1Idx.has(num)) {
                stack.push(num);
            }
        }
        return res;
    }
}
