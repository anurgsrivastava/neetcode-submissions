class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    removeDuplicates(s: string, k: number): string {
        const stack = []; // [char, count]

        for (const c of s) {
            if (stack.length && stack[stack.length - 1][0] === c) {
                stack[stack.length - 1][1]++;
            }  else {
                stack.push([c, 1]);
            }
            if (stack[stack.length - 1][1] === k) {
                stack.pop();
            }
        }
        let res = '';
        for (const [char, count] of stack) {
            res += char.repeat(count);
        }
        return res;
    }
}
