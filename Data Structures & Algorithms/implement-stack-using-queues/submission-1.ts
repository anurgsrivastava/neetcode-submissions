class MyStack {
    queue1;
    queue2;

    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.queue1.push(x);
    }

    /**
     * @return {number}
     */
    pop(): number {
        if(!this.queue1.length) {
            return -1;
        }
        let res = this.queue1[this.queue1.length - 1];
        for(let i = 0; i < this.queue1.length - 1; i++) {
            this.queue2.push(this.queue1[i]);
        }
        this.queue1 = this.queue2;
        this.queue2 = [];
        return res;
    }

    /**
     * @return {number}
     */
    top(): number {
        if(!this.queue1.length) {
            return -1;
        }
        return this.queue1[this.queue1.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return !(this.queue1.length > 0);
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
