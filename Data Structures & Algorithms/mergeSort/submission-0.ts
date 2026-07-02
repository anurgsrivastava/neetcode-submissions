/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {

    merge(pairs: Pair[], start: number, mid: number, end: number) {
        let length1 = mid - start + 1;
        let length2 = end - mid;

        let L = new Array(length1);
        let R = new Array(length2);

        for (let i = 0; i < length1; i++) {
            L[i] = pairs[start + i];
        }

        for (let i = 0; i < length2; i++) {
            R[i] = pairs[mid + 1 + i];
        }

        let i = 0;
        let j = 0;
        let k = start;


        while (i < length1 && j < length2) {
            if (L[i].key <= R[j].key) {
                pairs[k] = L[i];
                i++;
            } else {
                pairs[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < length1) {
            pairs[k] = L[i];
            i++;
            k++;
        }

        while (j < length2) {
            pairs[k] = R[j];
            j++;
            k++;
        }

    }

    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    callMergeSort(pairs: Pair[], start: number, end: number): Pair[] {
        if(start < end) {
            let len = pairs.length;
            let mid = Math.floor((start + end)/2);

            this.callMergeSort(pairs, start, mid);
            this.callMergeSort(pairs, mid + 1, end);

            this.merge(pairs, start, mid, end);
        }
        return pairs;

    }

    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs: Pair[]): Pair[] {
        if(!pairs.length) {
            return [];
        }
        const res = this.callMergeSort(pairs, 0, pairs.length - 1)
        return res;

    }
}
