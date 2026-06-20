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
        this.arr = Array(capacity).fill(0);
        this.length = 0;
        console.log(capacity, 'constructor', this.capacity, this.arr, this.length);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        console.log(i, 'get', this.capacity, this.arr, this.length);
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        console.log(i, n, 'set', this.capacity, this.arr, this.length);
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        console.log(n, 'pushback before', this.capacity, this.arr, this.length);
        if(this.capacity === this.length) {
            this.resize();
        }
        this.arr[this.length] = n;
        this.length += 1;
        console.log(n, 'pushback after', this.capacity, this.arr, this.length);
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
        let newArr = new Array(this.capacity).fill(0);
        for(let i in this.arr) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
        console.log('resize', this.capacity, this.arr, this.length);
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        console.log('getSize', this.length);
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        console.log('getCapacity', this.capacity);
        return this.capacity;
    }
}
