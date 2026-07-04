/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class MinHeap {
    private heap: ListNode[] = [];

    size(): number {
        return this.heap.length;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    push(node: ListNode): void {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): ListNode | null {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop()!;
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);

        return min;
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex].val <= this.heap[index].val) {
                break;
            }

            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    private bubbleDown(index: number): void {
        const length = this.heap.length;

        while (true) {
            let smallest = index;

            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (
                left < length &&
                this.heap[left].val < this.heap[smallest].val
            ) {
                smallest = left;
            }

            if (
                right < length &&
                this.heap[right].val < this.heap[smallest].val
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            this.swap(index, smallest);
            index = smallest;
        }
    }

    private swap(i: number, j: number): void {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

class Solution {

    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        let heap = new MinHeap();

        for (const list of lists) {
            if (list !== null) {
                heap.push(list);
            }
        }

        const dummy = new ListNode(0);
        let tail = dummy;

        while(!heap.isEmpty()) {
            let smallest = heap.pop();

            tail.next = smallest;
            tail = tail.next;

            if(smallest.next) {
                heap.push(smallest.next);
            }
        }

        return dummy.next;
    }
}
