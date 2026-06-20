class MinStack {
    arr;
    min;
    constructor() {
        this.arr = [];
        this.min = 0;
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        let dif = 0;
        if(!this.arr.length) {
            this.min = val;
        }
        if(this.arr.length) {
            dif = val - this.min
            if (dif < 0) {
                this.min = val;
            }
        }
        this.arr.push(dif);
    }

    /**
     * @return {void}
     */
    pop(): void {
        const dif = this.arr.pop();
        if (dif < 0) {
            this.min = this.min - dif;
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        if(this.arr[this.arr.length - 1] >= 0) {
            return this.arr[this.arr.length - 1] + this.min;
        }
        return this.min;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;
    }
}
