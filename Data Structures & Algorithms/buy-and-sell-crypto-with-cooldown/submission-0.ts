class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let hold = Number.MIN_SAFE_INTEGER;
        let sold = 0;
        let rest = 0;

        for(let i = 0; i < prices.length; i++) {
            let prevHold = hold;
            let prevSold = sold;
            let prevRest = rest;

            hold = Math.max(prevHold, prevRest - prices[i]);
            sold = prevHold + prices[i];
            rest = Math.max(prevRest, prevSold);
        }

        return Math.max(sold, rest);
    }
}
