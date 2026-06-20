class DynamicArray {
    capacity: number = 0;
    arr: undefined | number[] = undefined;
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        if (capacity > 0) {
            this.capacity = capacity;
            // console.log('constructor', capacity, this.arr, this.capacity);
        }
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        if(i <= this.capacity && this.arr[i]) {
            return this.arr[i];
        }
        console.log('get', i, this.arr, this.capacity);
        return 0;
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        if (i < this.capacity && this.arr[i]) {
            this.arr[i] = n;
        }
        // console.log('set', i, n, this.arr, this.capacity);
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        let currentSize = this.arr?.length ?? 0;
        if(!this.arr) {
            this.arr = Array(1).fill(n);
            currentSize = 1;
        } else {
            this.arr.push(n);
            currentSize = this.arr.length;
        }
        if(currentSize > this.capacity) {
            this.resize();
        }
        // console.log('pushback', n, this.arr, this.capacity);
    }

    /**
     * @returns {number}
     */
    popback(): number {
        if (this.arr.length) {
            const lastIndex = this.arr.length - 1;
            const res = this.arr[lastIndex];
            let newArray = [];
            for(let i = 0; i <= lastIndex - 1; i++) {
                newArray[i] = this.arr[i];
            }
            this.arr = newArray;
            // console.log('popback', this.arr, this.capacity);
            return res;
        }
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2;
        console.log('resize', this.arr, this.capacity);
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        // console.log('getSize', this.arr, this.capacity);
        return this.arr?.length ?? 0;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        // console.log('getCapacity', this.arr, this.capacity);
        return this.capacity;
    }
}
