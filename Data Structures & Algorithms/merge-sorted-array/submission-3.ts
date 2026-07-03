class Solution {
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let i = m - 1, j = n - 1, k = m + n - 1;
        while( i >= 0 && j >= 0) {
            if(nums2[j] < nums1[i]) {
                nums1[k] = nums1[i];
                k -= 1;
                i -= 1;
            } else {
                nums1[k] = nums2[j];
                k -= 1;
                j -= 1;
            }
        }

        while(j >= 0) {
            nums1[k] = nums2[j];
            k -= 1;
            j -= 1;
        }
    }
}
