class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        for(let i = 0; i < arr.length; i++) {
            let great = -1;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > great) {
                    great = arr[j];
                }
            }
            arr[i] = great;
        }
        return arr;
    }
}
