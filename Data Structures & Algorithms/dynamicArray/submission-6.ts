class DynamicArray {
    capacity: any;
    length: any;
    arr: any;
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.length = 0;
        this.arr = new Array(this.capacity).fill(0);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.arr[i] = n;
        // console.log('set', i, n, this.arr, this.capacity);
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.length === this.capacity) {
            this.resize();
        }
        this.arr[this.length] = n;
        this.length++;
        // console.log('pushback', n, this.arr, this.capacity);
    }

    /**
     * @returns {number}
     */
    popback(): number {
        if (this.length > 0) {
            // soft delete the last element
            this.length--;
        }
        return this.arr[this.length];
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2;
        const newArr = new Array(this.capacity).fill(0);
        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        // console.log('getSize', this.arr, this.capacity);
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        // console.log('getCapacity', this.arr, this.capacity);
        return this.capacity;
    }
}
