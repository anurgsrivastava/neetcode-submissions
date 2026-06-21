class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;
    tail: ListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let current = this.head;
        for(let currentIndex = 0; currentIndex < index; currentIndex++) {
            if (current === null) {
                return -1;
            }
            current = current.next;
        }
        return current ? current.val : -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        let newHead = new ListNode(val);
        newHead.next = this.head;
        this.head = newHead;
        if (this.tail === null) {
            this.tail = newHead;
        }
        return;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        let newTail = new ListNode(val);
        if (this.head === null) {
            this.head = newTail;
            this.tail = newTail;
            return;
        }
        this.tail.next = newTail;
        this.tail = newTail;
        return;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (this.head === null) {
            return false;
        }
        if (index === 0) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return true;
        }
        let prevNode = this.head;
        for(let currentIndex = 0; currentIndex < index - 1; currentIndex++) {
            if (prevNode.next === null) {
                return false;
            }
            prevNode = prevNode.next;
        }
        let nodeToRemove = prevNode.next;
        if (!nodeToRemove) {
            return false;
        }
        prevNode.next = nodeToRemove.next;
        if (nodeToRemove === this.tail) {
            this.tail = prevNode;
        }
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        let res = [];
        let start = this.head;
        while (start != null ) {
            res.push(start.val);
            start = start.next;
        }
        return res;
    }
}
