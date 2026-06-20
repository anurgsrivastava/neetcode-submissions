class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let res = [];
        let backIndex = arr.length - 1;
        let maxTillNow = -1;
        res[backIndex] = -1;
        for(let i = backIndex; i >= 1; i--) {
            if (arr[i] > maxTillNow) {
                maxTillNow = arr[i];
            }
            res[i - 1] = maxTillNow;
        }
        return res;
    }
}
