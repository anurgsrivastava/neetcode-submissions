class MinStack {
    arr = [];
    length = 0;
    min = [Number.MAX_SAFE_INTEGER];
    constructor() {}
    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.arr.push(val);
        this.min.push(Math.min(this.getMin(), val));
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.arr.pop();
        this.min.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.arr[this.arr.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min[this.min.length - 1]
    }
}
