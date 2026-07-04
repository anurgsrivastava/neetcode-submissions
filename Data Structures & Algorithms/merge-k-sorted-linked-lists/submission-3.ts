/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {

    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        const heap = new MinPriorityQueue((node: ListNode) => node.val);

        for (const head of lists) {
            if (head !== null) {
                heap.enqueue(head);
            }
        }

        const dummy = new ListNode(0);
        let tail = dummy;

        while(!heap.isEmpty()) {
            const smallest = heap.dequeue();

            tail.next = smallest;
            tail = tail.next;

            if(smallest.next !== null) {
                heap.enqueue(smallest.next);
            }
        }

        return dummy.next;
    }
}
