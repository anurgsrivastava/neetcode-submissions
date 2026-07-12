class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */

    distanceFromOrigin(x: number, y: number) {
        return x*x + y*y;
    }

    kClosest(points: number[][], k: number): number[][] {
        points.sort((a, b) => {
            const distA = this.distanceFromOrigin(a[0], a[1]);
            const distB = this.distanceFromOrigin(b[0], b[1]);

            return distA - distB;
        });

        return points.slice(0, k);
    }
}
