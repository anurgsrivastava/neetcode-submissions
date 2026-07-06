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
        for (let i = 0; i < nums2.length; i++) {
            if (!nums1Idx.has(nums2[i])) {
                continue;
            }
            for (let j = i + 1; j < nums2.length; j++) {
                if (nums2[j] > nums2[i]) {
                    const idx = nums1Idx.get(nums2[i]);
                    res[idx] = nums2[j];
                    break;
                }
            }
        }
        return res;
    }
}
