class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed: number[], n: number): boolean {
        let empty = flowerbed[0] === 0 ? 1 : 0;

        for (let f of flowerbed) {
            if (f === 1) {
                n -= Math.floor(Math.max(0, empty - 1) / 2);
                empty = 0;
            } else {
                empty++;
            }
        }

        n -= Math.floor(empty / 2);
        return n <= 0;
    }
}
