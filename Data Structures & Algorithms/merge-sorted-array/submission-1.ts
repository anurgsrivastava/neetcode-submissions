class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let i = m, j = n, k = m + n - 1;
        while( i > 0 &&j > 0) {
            if(nums1[i - 1] > nums2[j - 1]) {
                nums1[k--] = nums1[i-- - 1];
            } else {
                nums1[k--] = nums2[j-- - 1];
            }
        }
        while (j > 0) {
            nums1[k--] = nums2[j-- - 1];
        }
    }
}
