class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let i = m - 1, j = n - 1, k = m + n - 1;
        while( j >= 0) {
            if(nums2[j] < nums1[i]) {
                while(nums2[j] < nums1[i]) {
                    let temp = nums1[k];
                    nums1[k] = nums1[i];
                    nums1[i] = temp;
                    k -= 1;
                    i -= 1;
                }
            } else {
                nums1[k] = nums2[j];
                k -= 1;
                j -= 1;
            }
        }
    }
}
