class ListNode {
    val;
    prev;
    next;

    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class MyLinkedList {
    dummyHead;
    dummyTail;

    constructor() {
        this.dummyHead = new ListNode(-1);
        this.dummyTail = new ListNode(-1);
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        let currentNode = this.dummyHead.next;
        for(let currentIndex = 0; currentIndex < index - 1; currentIndex++) {
            if(!currentNode) {
                return -1;
            }
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let currentNode = this.dummyHead.next;
        for(let currentIndex = 0; currentIndex < index; currentIndex++) {
            if(!currentNode) {
                return -1;
            }
            currentNode = currentNode.next;
        }
        return currentNode.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let nodeToAdd = new ListNode(val);
        nodeToAdd.next = this.dummyHead.next;
        nodeToAdd.prev = this.dummyHead;
        this.dummyHead.next.prev = nodeToAdd;
        this.dummyHead.next = nodeToAdd;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let nodeToAdd = new ListNode(val);
        nodeToAdd.next = this.dummyTail;
        nodeToAdd.prev = this.dummyTail.prev;
        this.dummyTail.prev.next = nodeToAdd;
        this.dummyTail.prev = nodeToAdd;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        let currentNode = this.dummyHead.next;
        for(let currentIndex = 0; currentIndex < index; currentIndex++) {
            if(!currentNode) {
                return null;
            }
            currentNode = currentNode.next;
        }
        let previous = currentNode.prev;
        let nodeToAdd = new ListNode(val);
        nodeToAdd.next = currentNode;
        nodeToAdd.prev = previous;
        currentNode.prev = nodeToAdd;
        previous.next = nodeToAdd;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        let currentNode = this.dummyHead.next;
        for(let currentIndex = 0; currentIndex < index; currentIndex++) {
            currentNode = currentNode.next;
            if (currentNode.next === null) {
                return - 1
            }
        }
        let previous = currentNode.prev;
        let nextNode = currentNode.next;
        previous.next = nextNode;
        nextNode.prev = previous;
    }
}
