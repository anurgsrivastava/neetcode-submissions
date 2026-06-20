class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let maxTillNow = arr[arr.length - 1];
        arr[arr.length - 1] = -1;
        for(let i = arr.length - 2; i >= 0; i--) {
            let temp = arr[i]
            arr[i] = maxTillNow;
            maxTillNow = Math.max(temp, maxTillNow);
        }
        return arr;
    }
}
