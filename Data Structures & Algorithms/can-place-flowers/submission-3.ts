class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed: number[], n: number): boolean {
        flowerbed = [0, ...flowerbed, 0];

        for (let i = 1; i < flowerbed.length - 1; i++) {
            if(!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
                flowerbed[i] = 1;
                n--;
            }
        }

        return n <= 0;
    }
}
