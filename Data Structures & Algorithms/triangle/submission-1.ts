class Solution {
    /**
     * @param {number[][]} triangle
     * @return {number}
     */
    minimumTotal(triangle: number[][]): number {
        const memo = Array.from({ length: triangle.length }, (_, r) =>
            Array(triangle[r].length).fill(Infinity),
        );
        const dfs = (row, col) => {
            if (row >= triangle.length) {
                return 0;
            }
            if (memo[row][col] !== Infinity) {
                return memo[row][col];
            }
            memo[row][col] =
                triangle[row][col] +
                Math.min(dfs(row + 1, col), dfs(row + 1, col + 1));
            return memo[row][col];
        }
        return dfs(0, 0);
    }
}
