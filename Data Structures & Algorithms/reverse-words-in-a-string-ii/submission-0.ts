class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseWords(s: string[]): void {
        this.reverse(s, 0, s.length - 1);

        let start = 0;
        for (let end = 0; end <= s.length; end++) {
            if (end === s.length || s[end] === ' ') {
                this.reverse(s, start, end - 1);
                start = end + 1;
            }
        }
    }

    reverse(s: string[], left: number, right: number): void {
        while (left < right) {
            const temp = s[left];
            s[left] = s[right];
            s[right] = temp;

            left++;
            right--;
        }
    }
}
