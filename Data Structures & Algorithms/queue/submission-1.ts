class QueueNode {
    val: number;
    prev: QueueNode | null;
    next: QueueNode | null;

    constructor(val: number, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }

}

class MyDeque {
    dummyHead: QueueNode | null;
    dummyTail: QueueNode | null;

    constructor() {
        this.dummyHead = new QueueNode(-1);
        this.dummyTail = new QueueNode(-1);

        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;

    }

    /**
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.dummyHead.next === this.dummyTail
    }

    /**
     * @param {number} value
     */
    append(value: number): void {
        let valueToAppend = new QueueNode(value);
        valueToAppend.prev = this.dummyTail.prev;
        valueToAppend.next = this.dummyTail
        this.dummyTail.prev.next = valueToAppend;
        this.dummyTail.prev = valueToAppend;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value: number): void {
        let valueToAppend = new QueueNode(value);
        valueToAppend.next = this.dummyHead.next;
        valueToAppend.prev = this.dummyHead;
        this.dummyHead.next.prev = valueToAppend;
        this.dummyHead.next = valueToAppend;
    }

    /**
     * @return {void}
     */
    pop(): number | void {
        if (this.isEmpty()) {
            return -1;
        }
        let nodeToRemove = this.dummyTail.prev;
        nodeToRemove.prev.next = this.dummyTail;
        this.dummyTail.prev = nodeToRemove.prev;
        return nodeToRemove.val;
    }

    /**
     * @return {number}
     */
    popleft(): number {
        if (this.isEmpty()) {
            return -1;
        }
        let nodeToRemove = this.dummyHead.next;
        this.dummyHead.next = nodeToRemove.next;
        nodeToRemove.next.prev = this.dummyHead;
        return nodeToRemove.val;
    }
}
