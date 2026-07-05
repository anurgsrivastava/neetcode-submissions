class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid: number[][]): number {
        const M = grid.length, N = grid[0].length;
        const dp = new Array(N + 1).fill(0);
        dp[N - 1] = 1;

        for (let r = M - 1; r >= 0; r--) {
            for (let c = N - 1; c >= 0; c--) {
                if (grid[r][c] === 1) {
                    dp[c] = 0;
                } else {
                    dp[c] += dp[c + 1];
                }
            }
        }

        return dp[0];
    }
}
