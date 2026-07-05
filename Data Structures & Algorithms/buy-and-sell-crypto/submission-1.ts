class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minSoFar = prices[0], profit = 0;

        for(let i = 1; i < prices.length; i++) {
            profit = Math.max(profit, prices[i] - minSoFar);
            minSoFar = Math.min(minSoFar, prices[i]);
        }

        return profit;
    }
}
